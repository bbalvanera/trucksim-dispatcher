import Registry from 'winreg';

function getSteamInstallPath(): Promise<string> {
  return new Promise((resolve, reject) => {
    const regKey = new Registry({
      hive: Registry.HKLM,
      key: '\\SOFTWARE\\Valve\\Steam',
      arch: 'x86',
    });

    regKey.get('InstallPath', (err, item) => {
      if (err) {
        reject(err);
      } else {
        resolve(item.value);
      }
    });
  });
}

export default getSteamInstallPath;
