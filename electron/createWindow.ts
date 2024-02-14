import { join as joinPath } from 'path';
import { BrowserWindow } from 'electron';
import isDev from 'electron-is-dev';

let win: BrowserWindow | null = null;
async function createWindow() {
  if (win !== null) {
    return;
  }

  win = new BrowserWindow({
    width: 1181,
    height: 890,
  });

  console.log('isDev', isDev);
  win.loadURL(
    isDev ? 'http://localhost:3000' : `file://${joinPath(__dirname, '../build/index.html')}`,
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

export default createWindow;
