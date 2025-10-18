import { ChevronRight } from "lucide-react";
import { features } from "./utils";

const AdditionalComponent = () => {
  const formats = ["xl", "lg", "md", "sm"];
  return (
    <div className="h-header rounded-btn bg-violet-50 text-violet-900 flex items-center px-padding-sm gap-padding-sm">
      <span className="hidden sm:flex text-xs font-semibold">
        Scegli formato:
      </span>
      <div className="flex items-center gap-padding-sm">
        {formats.map((f, i) => {
          const isCur = i === 1;
          return (
            <div
              key={f}
              className={`${
                isCur ? "bg-violet-200" : "hover:bg-violet-100"
              } px-padding-sm gap-2 h-btn flex items-center cursor-pointer rounded-btn`}
            >
              <div
                className={`${
                  isCur ? "bg-current" : ""
                } h-2 w-2 ring-2 ring-violet-200 rounded-full`}
              />
              <span className="uppercase text-xs font-semibold">{f}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function FeaturesBar({ setFeature, feature }) {
  const btn =
    "cursor-pointer flex-1 max-w-[200px] capitalize flex h-btn-lg rounded-btn items-center font-semibold overflow-hidden pr-padding-sm";
  const active = "bg-violet-200 text-violet-900";
  const inactive = "bg-bg2";
  const inner = "flex h-full gap-padding-xs px-padding-sm items-center";
  const currentFeature = features.find((f) => f.value === feature);
  const hasFormats = currentFeature?.hasFormats;
  return (
    <div className="lg:mt-padding-sm mx-padding-sm lg:ml-0 flex flex-col overflow-hidden gap-padding-sm">
      <div className="gap-padding-sm flex items-center">
        {features.map((f, i) => {
          const { Icon } = f;
          return (
            <div
              key={i}
              onClick={() => {
                setFeature(f.value);
              }}
              className={`${btn} ${feature === f.value ? active : inactive}`}
            >
              <div className={inner}>
                <Icon size={16} className="hidden md:flex" />
                <span>{f.value}</span>
              </div>
              <ChevronRight size={16} className="ml-auto" />
            </div>
          );
        })}
      </div>

      {hasFormats && <AdditionalComponent />}
    </div>
  );
}
