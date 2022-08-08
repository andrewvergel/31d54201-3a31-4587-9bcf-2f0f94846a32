import { App } from './App';

(async () => {
  try {
    new App().start();
  } catch (e: any) {
    console.log('Start Error::', e.message);
    process.exit(1);
  }

  process.on('uncaughtException', (err) => {
    console.log('uncaughtException', err);
    process.exit(1);
  });
})();
