export interface IPlatform {
  name: string;
  imageUrl: string;
  connected: boolean;
  twoFactorAuth?: string;
}

export const PLATFORMS: IPlatform[] = [
  {
    name: "Sleeper",
    imageUrl: "/sleeper.svg",
    connected: true,
  },
  {
    name: "ESPN",
    imageUrl: "/espn.svg",
    twoFactorAuth: "2FA required",
    connected: false,
  },
  {
    name: "Yahoo",
    imageUrl: "/yahoo.svg",
    connected: false,
  },
  {
    name: "CBS",
    imageUrl: "/cbs.svg",
    connected: false,
  },
  {
    name: "NFL.com",
    imageUrl: "/nfl.svg",
    connected: false,
  },
];
