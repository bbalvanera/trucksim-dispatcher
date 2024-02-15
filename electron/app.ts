import { app, ipcMain } from 'electron';
import handleGetAvailableGames from './api/game/getAvailableGames/handleGetAvailableGames.js';
import createWindow from './createWindow.js';

function registerEndpoints() {
  ipcMain.handle('game:getAvailableGames', handleGetAvailableGames);
}

async function run() {
  app.whenReady().then(() => {
    registerEndpoints();
    createWindow();
  });

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('activate', () => {
    createWindow();
  });
}

const thisApp = { run };
export default thisApp;
