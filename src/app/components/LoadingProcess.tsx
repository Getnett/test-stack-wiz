"use client";
import { FC, ReactNode } from "react";
import FlickeringGrid from "../../registry/magicui/FlickeringGrid.";

interface LoadingProcessProps {
  title: string;
  height?: number;
  children?: ReactNode;
}
const LoadingProcess: FC<LoadingProcessProps> = ({
  title,
  height,
  children,
}) => {
  return (
    <div
      className="relative w-[420px] h-[80px] rounded-lg  overflow-hidden"
      style={{ height: height ? height : "80px" }}
    >
      <FlickeringGrid
        className="absolute inset-0 z-0"
        squareSize={3}
        gridGap={4}
        color="#6B7280"
        maxOpacity={0.4}
        flickerChance={0.1}
      />

      <div className="absolute inset-0 z-10 flex flex-col py-1.5 px-2 justify-center">
        <h3 className="text-base  bg-gradient-to-r from-[#fafafa99] via-[#fafafa] to-[#fafafa99] bg-clip-text text-transparent">
          {title}
        </h3>
        {children && <div className="mt-4 px-6 pb-6">{children}</div>}
      </div>
    </div>
  );
};
export default LoadingProcess;
