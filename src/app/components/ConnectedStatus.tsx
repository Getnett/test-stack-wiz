import { FC } from "react";

const ConnectedStatus: FC = ({}) => {
  return (
    <div className="bg-[#ffffff1a] h-[28px] w-[28px] rounded-sm py-1.5 px-2">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.83325 10.0625L5.99992 13.5L14.1666 2.5"
          stroke="#B5FF4D"
          strokeWidth="1.5"
          strokeLinecap="square"
        />
      </svg>
    </div>
  );
};

export default ConnectedStatus;
