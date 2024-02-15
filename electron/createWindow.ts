import { join as joinPath, dirname } from 'path';
import { fileURLToPath } from 'url';
import { BrowserWindow } from 'electron';
import isDev from 'electron-is-dev';

// eslint-disable-next-line @typescript-eslint/naming-convention
const __filename = fileURLToPath(import.meta.url);
// eslint-disable-next-line @typescript-eslint/naming-convention
const __dirname = dirname(__filename);

let win: BrowserWindow | null = null;
async function createWindow() {
  if (win !== null) {
    return;
  }

  win = new BrowserWindow({
    width: 1181,
    height: 890,
    webPreferences: {
      preload: joinPath(__dirname, 'windowPreload.js'),
    },
  });

  win.loadURL(
    isDev ? 'http://localhost:3000' : `file://${joinPath(__dirname, '../build/index.html')}`,
  );

  if (isDev) {
    win.webContents.openDevTools({ mode: 'detach' });
  }

  win.setMenu(null);
  win.on('closed', () => {
    win = null;
  });
}

export default createWindow;
