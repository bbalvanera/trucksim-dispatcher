import Registry from 'winreg';

function getSteamInstallPath(): Promise<string | null> {
  return new Promise((resolve) => {
    const regKey = new Registry({
      hive: Registry.HKLM,
      key: '\\SOFTWARE\\Valve\\Steama',
      arch: 'x86',
    });

    regKey.get('InstallPath', (err: any, item) => {
      if ((err || {}).code === 1) {
        resolve(null);
        return;
      } else {
        resolve(item.value);
      }
    });
  });
}

export default getSteamInstallPath;
