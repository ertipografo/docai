import {
  ChevronDown,
  ChevronRight,
  Loader,
  PanelRightClose,
} from "lucide-react";
import { features } from "./utils";

export default function FeaturesBar({
  setFeature,
  feature,
  noteType,
  isLoading,
  show,
  setShow,
}) {
  const btn =
    "cursor-pointer flex-1 max-w-[200px] capitalize flex h-btn-lg rounded-t-btn items-center font-semibold overflow-hidden pr-padding-sm";
  const active = "bg-bg3";
  const inactive = "bg-bg2 opacity-70 hover:opacity-100";
  const inner = "flex h-full gap-padding-xs px-padding-sm items-center";

  return (
    <div className="z-[999999] bg-bg1 sticky top-0 mx-padding-sm lg:ml-0 flex flex-col overflow-hidden gap-padding-sm pt-padding-sm">
      <div className="gap-padding-xs flex items-center">
        {!show && (
          <div
            className="h-btn w-btn flexer cursor-pointer rounded-btn bg-bg1 hover:bg-bg3"
            onClick={() => setShow((s) => !s)}
          >
            <PanelRightClose size={16} />
          </div>
        )}
        {features.map((f, i) => {
          const isCur = feature === f.value;
          const { Icon } = f;
          const condition = noteType === "note" && i === 0;
          return (
            !condition && (
              <div
                key={i}
                onClick={() => {
                  setFeature(f.value);
                }}
                className={`${btn} ${isCur ? active : inactive}`}
              >
                <div className={inner}>
                  <Icon className="hidden sm:flex" size={16} />
                  <span>{f.value}</span>
                </div>
                {isCur ? (
                  isLoading ? (
                    <Loader size={16} className="ml-auto animate-spin" />
                  ) : (
                    <ChevronDown size={16} className="hidden sm:flex ml-auto" />
                  )
                ) : (
                  <ChevronRight size={16} className="hidden sm:flex ml-auto" />
                )}
              </div>
            )
          );
        })}
      </div>
    </div>
  );
}
