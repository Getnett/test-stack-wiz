"use client";
import { FC, MouseEvent } from "react";
interface ButtonYellowProps {
  title: string;
  onClick: VoidFunction;
}

const ButtonYellow: FC<ButtonYellowProps> = ({ title, onClick }) => {
  const handleClick = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.stopPropagation();
    onClick();
  };
  return (
    <button
      onClick={handleClick}
      className=" p-2.5 w-full h-[48px] font-medium text-base/tight text-[#030303] bg-[#B5FF4D] rounded-sm cursor-pointer"
    >
      {title}
    </button>
  );
};

export default ButtonYellow;
