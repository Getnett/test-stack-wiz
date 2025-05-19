"use client";

import { FC } from "react";
import ButtonYellow from "./ButtonYellow";
import { PLATFORMS } from "../data/patform";
import Platform from "./Platform";

const PlatformList: FC = () => {
  return (
    <div className="flex flex-col gap-3 mt-10 w-sm">
      {PLATFORMS.map(({ name, imageUrl, twoFactorAuth, connected }) => (
        <Platform
          key={name}
          name={name}
          imageUrl={imageUrl}
          twoFactorAuth={twoFactorAuth}
          connected={connected}
        />
      ))}

      <div className="mt-10">
        <ButtonYellow title="Continue" onClick={() => {}} />
      </div>
    </div>
  );
};

export default PlatformList;
