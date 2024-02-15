import fs from 'fs';
import { join as joinPath } from 'path';
import { AvailableGame, AvailableGames } from '../../../common/types/index.js';
import { getDirectories } from '../../../utils/directory.js';
import isNumeric from '../../../utils/isNumeric.js';
import getSteamInstallPath from './getSteamInstallPath.js';
import isProcessRunningSync from './isProcessRunning.js';

const noneAvailable: AvailableGames = {
  ets2: {
    available: false,
    running: false,
  },
  ats: {
    available: false,
    running: false,
  },
};

const ets2Info = {
  dir: '227300',
  exe: 'eurotrucks2',
};
const atsInfo = {
  dir: '270880',
  exe: 'amtrucks',
};

function getGameInfo(basePath: string, gameDir: string, processName: string): AvailableGame {
  const retVal = { available: false, path: '', running: false };
  const gamePath = joinPath(basePath, gameDir);

  if (!fs.existsSync(gamePath)) {
    return retVal;
  }

  return { available: true, path: gamePath, running: isProcessRunningSync(processName) };
}

async function handleGetAvailableGames(): Promise<AvailableGames> {
  const steamInstallPath = await getSteamInstallPath();
  if (steamInstallPath === null) {
    return noneAvailable;
  }

  const userData = joinPath(steamInstallPath, 'userdata');
  if (!fs.existsSync(userData)) {
    return noneAvailable;
  }

  const userDirs = getDirectories(userData).filter((userDir) => isNumeric(userDir.name));
  if (userDirs.length === 0) {
    return noneAvailable;
  }

  const retVal = { ...noneAvailable };
  for (const { path: userPath } of userDirs) {
    if (!retVal.ets2.available) {
      const { dir: ets2Dir, exe: ets2Exe } = ets2Info;
      retVal.ets2 = getGameInfo(userPath, ets2Dir, ets2Exe);
    }

    if (!retVal.ats.available) {
      const { dir: atsDir, exe: atsExe } = atsInfo;
      retVal.ats = getGameInfo(userPath, atsDir, atsExe);
    }

    if (retVal.ets2.available && retVal.ats.available) {
      break;
    }
  }

  return retVal;
}

export default handleGetAvailableGames;
