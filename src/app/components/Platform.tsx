"use client";
import { FC, useState } from "react";
import Image from "next/image";
import ButtonConnect from "./ButtonConnect";
import ConnectedStatus from "./ConnectedStatus";
import OverlayModal from "./OverlayModal";

// Layout & Pos,Grid&Flex,Speacing,Sizing,Typography,backgrounds,borders,effects,trans&anim,interactivty,access,state modif,variantmode

interface PlatformProps {
  name: string;
  imageUrl: string;
  connected: boolean;
  twoFactorAuth?: string;
}

const Platform: FC<PlatformProps> = ({
  name,
  imageUrl,
  connected,
  twoFactorAuth,
}) => {
  const [openOverlay, setOpenOverlay] = useState(false);
  const handleCloseOverlay = () => {
    setOpenOverlay(false);
  };
  const handleOpenOverlay = () => {
    setOpenOverlay(true);
  };
  return (
    <div className="flex justify-between h-[80px] p-6 w-[380px] bg-[#141414] rounded-md   ">
      <div className="flex items-center gap-4">
        <Image src={imageUrl} alt="ESPN logo" width={32} height={32} priority />
        <div>
          <h3 className="text-base font-normal text-[#FFFFF6]">{name}</h3>
          {twoFactorAuth && (
            <small className="text-[12px]/1.125 text-[#9D9D95]">
              {twoFactorAuth}
            </small>
          )}
        </div>
      </div>
      <div>
        {connected ? (
          <ConnectedStatus />
        ) : (
          <ButtonConnect onClick={handleOpenOverlay} />
        )}
      </div>
      {!connected && openOverlay && (
        <OverlayModal open={openOverlay} onClose={handleCloseOverlay} />
      )}
    </div>
  );
};

export default Platform;
