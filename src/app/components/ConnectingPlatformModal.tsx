import { FC } from "react";
import ButtonYellow from "./ButtonYellow";
import Image from "next/image";

interface ConnectingPlatformModalProps {
  onClose: VoidFunction;
  onLogin: VoidFunction;
}

const ConnectingPlatformModal: FC<ConnectingPlatformModalProps> = ({
  onClose,
  onLogin,
}) => {
  return (
    <div>
      <form className="flex flex-col p-8 gap-8  w-[480px] bg-[#030303] rounded-md animate-steppedFadeIn  ">
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/espn.svg"
              alt="ESPN logo"
              width={32}
              height={32}
              priority
            />
            Connecting ESPN
          </div>

          <button
            onClick={onClose}
            title="close"
            className="bg-transparent cursor-pointer"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.1665 3.16675L12.8332 12.8334M12.8332 3.16675L3.1665 12.8334"
                stroke="#9D9D95"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <label
            htmlFor="email"
            className="mb-2 text-sm font-medium text-gray-900 sr-only "
          >
            Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.14916 3.33325L9.99984 9.75654L17.8505 3.33325H2.14916Z"
                  fill="#9D9D95"
                />
                <path
                  d="M1.6665 5.09179V16.6666H18.3332V5.09179L9.99984 11.91L1.6665 5.09179Z"
                  fill="#9D9D95"
                />
              </svg>
            </div>
            <input
              type="email"
              id="email"
              className="block p-2.5 pl-10 w-full h-[40px] text-base text-[#9D9D95] border-none bg-[#FFFFFF1A] rounded-sm"
              placeholder="Email address"
            />
          </div>

          <label
            htmlFor="password"
            className="mb-2 text-sm font-medium text-gray-900 sr-only "
          >
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.0002 1.66675C7.69898 1.66675 5.8335 3.53223 5.8335 5.83342V7.50008H3.3335V18.3334H16.6668V7.50008H14.1668V5.83342C14.1668 3.53223 12.3013 1.66675 10.0002 1.66675ZM12.5002 7.50008V5.83342C12.5002 4.4527 11.3809 3.33341 10.0002 3.33341C8.61945 3.33341 7.50016 4.4527 7.50016 5.83342V7.50008H12.5002ZM10.8335 10.8334V15.0001H9.16683V10.8334H10.8335Z"
                  fill="#9D9D95"
                />
              </svg>
            </div>
            <input
              type="password"
              id="password"
              className="block p-2.5 pl-10 w-full h-[40px] text-base text-[#9D9D95] border-none bg-[#FFFFFF1A] rounded-sm"
              placeholder="Password"
            />
          </div>
        </div>
        <ButtonYellow title="Sign in" onClick={onLogin} />
      </form>
    </div>
  );
};

export default ConnectingPlatformModal;
