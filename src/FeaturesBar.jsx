import { ChevronDown, ChevronRight, Loader } from "lucide-react";
import { features } from "./utils";

export default function FeaturesBar({
  setFeature,
  feature,
  noteType,
  isLoading,
}) {
  const btn =
    "cursor-pointer flex-1 max-w-[200px] capitalize flex h-btn-lg rounded-btn items-center font-semibold overflow-hidden pr-padding-sm";
  const active = "bg-violet-200 text-violet-900";
  const inactive = "bg-bg2";
  const inner = "flex h-full gap-padding-xs px-padding-sm items-center";

  return (
    <div className="z-[999999] sticky top-0 mx-padding-sm lg:ml-0 flex flex-col overflow-hidden gap-padding-sm bg-bg1 py-padding-sm">
      <div className="gap-padding-sm flex items-center">
        {features.map((f, i) => {
          const isCur = feature === f.value;
          const { Icon } = f;
          return noteType === "note" && i === 0 ? (
            <></>
          ) : (
            <div
              key={i}
              onClick={() => {
                setFeature(f.value);
              }}
              className={`${btn} ${isCur ? active : inactive}`}
            >
              <div className={inner}>
                <Icon size={16} />
                <span className="hidden md:flex">{f.value}</span>
              </div>
              {isCur ? (
                isLoading ? (
                  <Loader size={16} className="ml-auto animate-spin" />
                ) : (
                  <ChevronDown size={16} className="ml-auto" />
                )
              ) : (
                <ChevronRight size={16} className="ml-auto" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
