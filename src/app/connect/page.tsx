import PlatformList from "../components/PlatformList";

// FONT - 20min [IN PROGRESS]
// BORDER- 20min [TODO]
// REVIEW - todos & check - 30min
// REMOVE UNNECESSARY FILES

// Total : 3h 30min
// DEPLOY

export default function Connect() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center m-auto w-[380px] h-screen">
        <h2 className="tactic-sans-med text-3xl/tight tracking-tight text-center">
          Select platforms to <br /> connect to Stacked
        </h2>
        <h3 className="font-tactic-forced text-base text-[#9D9D95] text-center">
          Connect tools to manage your Leagues. <br /> Add at least one now, you
          can always add more later.
        </h3>
        <PlatformList />
      </div>
    </div>
  );
}
