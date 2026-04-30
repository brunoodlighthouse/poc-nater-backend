import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import type { FastifyInstance } from 'fastify';

describe('swagger documentation', () => {
  let app: FastifyInstance;

  beforeAll(async () => {
    process.env.NODE_ENV ??= 'test';
    process.env.PORT ??= '3000';
    process.env.ALLOWED_ORIGIN ??= 'http://localhost:5173';
    process.env.DATABASE_URL ??= 'file:./swagger-test.db';
    process.env.PROTHEUS_BASE_URL ??= 'https://protheus.exemplo.com.br/rest';
    process.env.PROTHEUS_MOCK_ENABLED ??= 'true';

    const { buildApp } = await import('../../src/app.js');
    app = buildApp();
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it('exposes the OpenAPI JSON with the documented routes', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/docs/json',
      headers: {
        host: 'api.localtest.me:3333',
        'x-forwarded-proto': 'https',
      },
    });

    expect(response.statusCode).toBe(200);

    const body = response.json<{
      openapi: string;
      servers: Array<{ url: string }>;
      tags: Array<{ name: string }>;
      paths: Record<string, Record<string, { summary?: string; responses?: Record<string, unknown> }>>;
    }>();

    expect(body.openapi).toBe('3.0.3');
    expect(body.servers[0]?.url).toBe('https://api.localtest.me:3333');
    expect(body.tags.some((tag) => tag.name === 'Lojas')).toBe(true);
    expect(body.paths['/api/v1/lojas']?.get?.summary).toBe('Listar lojas ativas');
    expect(body.paths['/api/v1/sessoes/atual']?.get?.responses?.['401']).toBeDefined();
    expect(body.paths['/api/v1/entregas/iniciar']?.post?.responses?.['201']).toBeDefined();
  });

  it('serves the Swagger UI with a CSP header compatible with the UI assets', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/docs/',
    });

    expect(response.statusCode).toBe(200);
    expect(response.headers['content-security-policy']).toContain("script-src 'self'");
    expect(response.headers['content-security-policy']).toContain("style-src 'self' https:");
    expect(response.headers['content-type']).toContain('text/html');
  });
});
