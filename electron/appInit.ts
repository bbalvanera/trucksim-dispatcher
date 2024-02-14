import { app } from 'electron';
import createWindow from './createWindow.js';

async function appInit() {
  app.whenReady().then(() => createWindow());

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('activate', () => {
    createWindow();
  });
}

export default appInit;
