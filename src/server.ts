import { buildApp } from './app.js';
import { config } from './config.js';

const app = buildApp();

async function start() {
  await app.listen({
    host: '0.0.0.0',
    port: config.PORT,
  });
}

start().catch(async (error) => {
  app.log.error({ err: error }, 'Falha ao iniciar servidor');
  await app.close();
  process.exitCode = 1;
});

export { app };
