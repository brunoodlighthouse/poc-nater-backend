import { describe, it, expect, vi } from 'vitest';
import { withRetry, isTransientError, isTransientStatusCode } from './retry.js';

describe('isTransientError', () => {
  it('retorna true para AbortError (timeout)', () => {
    const error = new Error('timeout');
    error.name = 'AbortError';
    expect(isTransientError(error)).toBe(true);
  });

  it('retorna true para TimeoutError', () => {
    const error = new Error('timeout');
    error.name = 'TimeoutError';
    expect(isTransientError(error)).toBe(true);
  });

  it('retorna true para ECONNRESET', () => {
    const error = new Error('connection reset') as Error & { code: string };
    error.code = 'ECONNRESET';
    expect(isTransientError(error)).toBe(true);
  });

  it('retorna false para erros de negocio', () => {
    expect(isTransientError(new Error('documento invalido'))).toBe(false);
  });

  it('retorna false para valores nao-Error', () => {
    expect(isTransientError('string error')).toBe(false);
    expect(isTransientError(null)).toBe(false);
  });
});

describe('isTransientStatusCode', () => {
  it('retorna true para 502, 503, 504', () => {
    expect(isTransientStatusCode(502)).toBe(true);
    expect(isTransientStatusCode(503)).toBe(true);
    expect(isTransientStatusCode(504)).toBe(true);
  });

  it('retorna false para erros de negocio', () => {
    expect(isTransientStatusCode(400)).toBe(false);
    expect(isTransientStatusCode(401)).toBe(false);
    expect(isTransientStatusCode(404)).toBe(false);
    expect(isTransientStatusCode(409)).toBe(false);
    expect(isTransientStatusCode(422)).toBe(false);
  });
});

describe('withRetry', () => {
  it('retorna resultado na primeira tentativa em caso de sucesso', async () => {
    const fn = vi.fn().mockResolvedValue('ok');
    const result = await withRetry(fn, { maxAttempts: 3, baseDelayMs: 10, jitterFactor: 0 });
    expect(result).toBe('ok');
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('retenta em erros transitorios e retorna no sucesso', async () => {
    const transientError = new Error('timeout');
    transientError.name = 'AbortError';

    const fn = vi
      .fn()
      .mockRejectedValueOnce(transientError)
      .mockRejectedValueOnce(transientError)
      .mockResolvedValue('ok');

    const result = await withRetry(fn, { maxAttempts: 3, baseDelayMs: 10, jitterFactor: 0 });
    expect(result).toBe('ok');
    expect(fn).toHaveBeenCalledTimes(3);
  });

  it('nao retenta em erros de negocio', async () => {
    const businessError = new Error('documento invalido');
    const fn = vi.fn().mockRejectedValue(businessError);

    await expect(
      withRetry(fn, { maxAttempts: 3, baseDelayMs: 10, jitterFactor: 0 }),
    ).rejects.toThrow('documento invalido');

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('lanca erro apos esgotar tentativas', async () => {
    const transientError = new Error('timeout');
    transientError.name = 'AbortError';
    const fn = vi.fn().mockRejectedValue(transientError);

    await expect(
      withRetry(fn, { maxAttempts: 3, baseDelayMs: 10, jitterFactor: 0 }),
    ).rejects.toThrow('timeout');

    expect(fn).toHaveBeenCalledTimes(3);
  });

  it('passa o numero da tentativa para a funcao', async () => {
    const transientError = new Error('timeout');
    transientError.name = 'AbortError';

    const fn = vi
      .fn()
      .mockRejectedValueOnce(transientError)
      .mockImplementation((attempt: number) => Promise.resolve(attempt));

    const result = await withRetry(fn, { maxAttempts: 3, baseDelayMs: 10, jitterFactor: 0 });
    expect(result).toBe(1);
    expect(fn).toHaveBeenCalledWith(0);
    expect(fn).toHaveBeenCalledWith(1);
  });
});
