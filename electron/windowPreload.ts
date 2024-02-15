const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('trucksimAPI', {
  getAvailableGames: () => ipcRenderer.invoke('game:getAvailableGames'),
});
