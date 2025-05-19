"use client";
import { FC, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import CompeletedProcess from "./CompletedProcess";
import LoadingProcess from "./LoadingProcess";
import SubProgress from "./SubProgress";

type StepStatus = "idle" | "loading" | "completed";

interface SubStack {
  name: string;
  status: "idle" | "loading" | "completed";
}

const PlatformDataSyncingModal: FC = () => {
  const router = useRouter();
  const [step1, setStep1] = useState<StepStatus>("idle");
  const [step2, setStep2] = useState<StepStatus>("idle");
  const [subtasks, setSubtasks] = useState<SubStack[]>([
    { name: "League Delta", status: "idle" },
    { name: "League Alpha", status: "idle" },
    { name: "League Gamma", status: "idle" },
    { name: "League Beta", status: "idle" },
  ]);

  useEffect(() => {
    if (step1 === "idle") {
      startStep1();
    }
  }, []);

  useEffect(() => {
    if (step1 === "completed") {
      setStep2("loading");
    }
  }, [step1]);

  useEffect(() => {
    if (step2 === "completed") {
      const timer = setTimeout(() => {
        router.replace("/");
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [step2]);

  // Automatically start Step 2 subtasks when it enters 'loading'
  useEffect(() => {
    if (step2 === "loading") {
      const timer = setTimeout(() => {
        startSubtask(0);
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [step2]);

  const startStep1 = () => {
    setStep1("loading");
    setTimeout(() => {
      setStep1("completed");
    }, 3000);
  };

  function startSubtask(index: number) {
    if (index >= subtasks.length) {
      setStep2("completed");
      return;
    }

    setSubtasks((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], status: "loading" };
      return updated;
    });

    setTimeout(() => {
      setSubtasks((prev) => {
        const updated = [...prev];
        updated[index] = { ...updated[index], status: "completed" };
        return updated;
      });

      startSubtask(index + 1);
    }, 3000);
  }
  return (
    <>
      <div className="flex flex-col p-8 gap-8  w-[480px] bg-[#030303] rounded-md animate-steppedFadeIn">
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/espn.svg"
              alt="ESPN logo"
              width={32}
              height={32}
              priority
            />
            Downloading data
          </div>

          <button title="close" className="bg-transparent cursor-pointer">
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
          <CompeletedProcess name="Connecting to platform" />
          {step1 === "loading" && (
            <LoadingProcess title="Finding Active Slates" />
          )}
          {step1 === "completed" && (
            <CompeletedProcess
              name="Finding active slates"
              additionalInfo="4 leagues found"
            />
          )}

          {step2 === "loading" &&
            subtasks.every((subtask) => subtask.status === "idle") && (
              <LoadingProcess title="Loading legues" />
            )}
          {step2 === "loading" &&
            subtasks.some((subtask) => subtask.status !== "idle") && (
              <LoadingProcess title="Loading legues" height={250}>
                {subtasks.map(({ name, status }) => (
                  <div key={name} className="flex flex-col gap-3">
                    <SubProgress name={name} status={status} />
                  </div>
                ))}
              </LoadingProcess>
            )}
          {step2 === "completed" &&
            subtasks.map(({ name, status }) => (
              <div key={name} className="flex flex-col gap-3 ">
                <SubProgress name={name} status={status} />
              </div>
            ))}
        </div>
        <div className="flex justify-center">
          <p className="text-base/1.125 text-[#9D9D95]">
            {step2 !== "completed" ? (
              <span>We’ll redirect you once done.</span>
            ) : (
              <span className="text-[#B5FF4D]">
                Successfully connected...Redirecting
              </span>
            )}
          </p>
        </div>
      </div>
    </>
  );
};
export default PlatformDataSyncingModal;
