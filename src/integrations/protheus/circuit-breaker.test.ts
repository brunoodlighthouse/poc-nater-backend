import { describe, it, expect, beforeEach, vi } from 'vitest';
import { createCircuitBreaker } from './circuit-breaker.js';

describe('CircuitBreaker', () => {
  let cb: ReturnType<typeof createCircuitBreaker>;

  beforeEach(() => {
    cb = createCircuitBreaker({
      threshold: 3,
      windowMs: 5000,
      halfOpenAfterMs: 1000,
    });
  });

  it('inicia no estado fechado', () => {
    expect(cb.getState()).toBe('closed');
    expect(cb.isOpen()).toBe(false);
  });

  it('permanece fechado abaixo do limiar de falhas', () => {
    cb.recordFailure();
    cb.recordFailure();
    expect(cb.getState()).toBe('closed');
    expect(cb.isOpen()).toBe(false);
  });

  it('abre apos atingir limiar de falhas', () => {
    cb.recordFailure();
    cb.recordFailure();
    cb.recordFailure();
    expect(cb.getState()).toBe('open');
    expect(cb.isOpen()).toBe(true);
  });

  it('sucesso reseta contador de falhas', () => {
    cb.recordFailure();
    cb.recordFailure();
    cb.recordSuccess();
    cb.recordFailure();
    cb.recordFailure();
    // Should still be closed since success reset the counter
    expect(cb.getState()).toBe('closed');
  });

  it('transiciona para half-open apos tempo de espera', () => {
    cb.recordFailure();
    cb.recordFailure();
    cb.recordFailure();
    expect(cb.isOpen()).toBe(true);

    // Simulate time passing
    vi.useFakeTimers();
    vi.advanceTimersByTime(1001);

    expect(cb.isOpen()).toBe(false);
    expect(cb.getState()).toBe('half_open');

    vi.useRealTimers();
  });

  it('fecha apos sucesso em half-open', () => {
    vi.useFakeTimers();

    cb.recordFailure();
    cb.recordFailure();
    cb.recordFailure();

    vi.advanceTimersByTime(1001);
    cb.isOpen(); // triggers transition to half_open

    cb.recordSuccess();
    expect(cb.getState()).toBe('closed');
    expect(cb.isOpen()).toBe(false);

    vi.useRealTimers();
  });

  it('volta para aberto apos falha em half-open', () => {
    vi.useFakeTimers();

    cb.recordFailure();
    cb.recordFailure();
    cb.recordFailure();

    vi.advanceTimersByTime(1001);
    cb.isOpen(); // triggers transition to half_open

    cb.recordFailure();
    expect(cb.getState()).toBe('open');
    expect(cb.isOpen()).toBe(true);

    vi.useRealTimers();
  });

  it('reseta para estado inicial', () => {
    cb.recordFailure();
    cb.recordFailure();
    cb.recordFailure();
    expect(cb.getState()).toBe('open');

    cb.reset();
    expect(cb.getState()).toBe('closed');
    expect(cb.isOpen()).toBe(false);
  });
});
