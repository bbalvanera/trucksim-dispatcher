// import isDev from 'electron-is-dev';
const path = require('path');
const { app, BrowserWindow } = require('electron');

require('dotenv').config();

let win = null;
const isDev = import('electron-is-dev');

function createWindow() {
  win = new BrowserWindow({
    width: 1181,
    height: 890,
  });

  win.loadURL(
    isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`,
  );

  if (isDev) {
    win.webContents.openDevTools({ mode: 'detach' });
  } else {
    win.setMenu(null);
  }

  win.on('closed', () => {
    win = null;
  });
}

app.whenReady().then(() => {
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});