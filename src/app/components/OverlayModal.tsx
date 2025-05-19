"use client";

import { FC, useState } from "react";
import ConnectingPlatformModal from "./ConnectingPlatformModal";
import PlatformDataSyncingModal from "./PlatformDataSyncingModal";

interface OverlayModalProps {
  open: boolean;
  onClose: VoidFunction;
}
const OverlayModal: FC<OverlayModalProps> = ({ open, onClose }) => {
  const [loginToPlatform, setLoginToPlatform] = useState(false);

  const handleLoginToPlatform = () => {
    setLoginToPlatform(true);
  };
  if (open) {
    return (
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
        onClick={onClose}
      >
        <div
          className="fixed inset-0 bg-[#141414]/60 transition-opacity"
          aria-hidden="true"
        ></div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center  text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden bg-black/70 rounded-lg  text-left shadow-xl transition-all ">
              {!loginToPlatform ? (
                <ConnectingPlatformModal
                  onClose={onClose}
                  onLogin={handleLoginToPlatform}
                />
              ) : (
                <PlatformDataSyncingModal />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default OverlayModal;
