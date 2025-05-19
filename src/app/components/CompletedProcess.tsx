"use client";
import { FC, useEffect, useState } from "react";
import ConnectedPlatform from "./ConnectedStatus";
interface CompeletedProcessProps {
  name: string;
  additionalInfo?: string;
}

type Status = "idle" | "completed";
const CompeletedProcess: FC<CompeletedProcessProps> = ({
  name,
  additionalInfo,
}) => {
  const [showAdditionalInfo, setShowAdditionalInfo] = useState<Status>("idle");

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowAdditionalInfo("completed");
    }, 500);

    return () => {
      clearTimeout(timer1);
    };
  }, []);
  return (
    <div className="flex justify-between  h-[80px] p-6 w-full bg-[#141414] rounded-md   ">
      <div className="flex items-center gap-4">
        <div>
          <h3 className="p-0 m-0 text-base font-normal text-[#B5FF4D]">
            {name}
          </h3>
          {additionalInfo && showAdditionalInfo === "completed" && (
            <p className=" text-sm/1.125 text-[#9D9D95] animate-steppedFadeIn">
              {additionalInfo}
            </p>
          )}
        </div>
      </div>
      <ConnectedPlatform />
    </div>
  );
};

export default CompeletedProcess;
