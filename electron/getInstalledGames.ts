export type GameType = 'ets' | 'ats';

export interface AvailableGame {
  readonly installed: boolean;
  readonly running: boolean;
}

export interface AvailableGames {
  ets: AvailableGame;
  ats: AvailableGame;
}

// read SteamInstallPath from registry
// check installPath + userdata/ exists and contains at least one folder
// check if folder is only numbers
// go inside that folder and check if either 227300 for ets or 270880 for ats exists
// if so, return interface
function getInstalledGames(): AvailableGames {
  return {
    ets: {
      installed: true,
      running: false,
    },
    ats: {
      installed: true,
      running: false,
    },
  };
}
