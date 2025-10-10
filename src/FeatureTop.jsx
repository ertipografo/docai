import { ChevronDown, Settings, Settings2 } from "lucide-react";
import { features } from "./utils";
import { useState } from "react";
const MobileFeatures = ({ feature, setFeature }) => {
  return (
    <div className="mb-3 h-headerHeight lg:hidden flex items-center gap-2">
      {features.map((f) => {
        const { Icon } = f;
        return (
          <div
            key={f.value}
            onClick={() => setFeature(feature === f.value ? null : f.value)}
            className={`${
              feature === f.value ? "bg-bg1" : "bg-bg3 text-text2"
            } flex-1 px-2 flex rounded justify-center cursor-pointer gap-2 items-center h-full`}
          >
            <Icon size={18} />
            <span className="font-semibold capitalize hidden sm:flex">
              {f.value}
            </span>
          </div>
        );
      })}
    </div>
  );
};

const Format = () => {
  const formats = ["sm", "md", "lg", "xl"];
  const [show, setShow] = useState(false);
  return (
    <div className="relative">
      <div
        onClick={() => setShow((s) => !s)}
        className="flex items-center font-semibold gap-2 h-buttonHeight pl-3 pr-2 border border-borderColor rounded cursor-pointer"
      >
        <span>Formato</span>
        <div className="bg-bgDark text-textOnDark h-7 rounded text-xs flex items-center px-2 uppercase">
          XL
        </div>
        <ChevronDown size={16} />
      </div>
      <div
        className={`${
          show
            ? "mt-2 pointer-events-auto opacity-100"
            : "mt-0 pointer-events-none opacity-0"
        } absolute top-full left-0 flex divide-y divide-bg2 flex-col bg-bg1 rounded-md border transition-all border-borderColor shadow-lg shadow-gray-800/10`}
      >
        {formats.map((f, i) => {
          return (
            <div
              className="flex cursor-pointer hover:bg-bg2/50 p-1 items-center text-xs font-semibold"
              key={f}
            >
              <div className="uppercase flexer h-8 w-8 rounded bg-bgDark text-textOnDark">
                {f}
              </div>
              <div className="flex-1 flex justify-center px-6">
                {i > 1 ? (
                  <div className="px-2 py-[2px] bg-amber-100 text-amber-700/50 rounded-full">
                    Premium
                  </div>
                ) : (
                  <div className="px-2 py-[2px] bg-bg2 text-text2 rounded-full">
                    Gratis
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function FeatureTop({ feature, setFeature }) {
  const currentFeature = features.find((f) => f.value === feature);

  const featureLabel = currentFeature?.label ?? "niente";
  const FeatureIcon = currentFeature?.Icon;
  const hasComplementary = currentFeature?.hasComplementary;
  return (
    <div className="sticky bg-bg2 top-headerHeight lg:top-0 pt-3 top-headerHeight">
      <MobileFeatures feature={feature} setFeature={setFeature} />
      <div className="bg-bg1 rounded-t-lg flex items-center px-2 h-headerHeight">
        <div className="flex-1 gap-2 flex items-center justify-start">
          {hasComplementary && (
            <div className="bg-action3 hover:bg-action2 rounded cursor-pointer h-buttonHeight aspect-square flexer">
              <Settings2 size={16} />
            </div>
          )}
          {currentFeature?.hasFormats && <Format />}
        </div>
        <div className="flex-1 flex items-center justify-center gap-2 font-semibold hidden sm:flex">
          {FeatureIcon && <FeatureIcon size={18} />}
          {featureLabel}
        </div>
        <div className="flex-1 flex items-center justify-end">
          <div className="flexer gap-2 h-buttonHeight px-3 text-xs font-semibold bg-action3 hover:bg-action2 rounded cursor-pointer">
            <span>Download</span>
            <ChevronDown size={16} />
          </div>
        </div>
      </div>
    </div>
  );
}
