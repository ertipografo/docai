import {
  ChevronDown,
  ChevronUp,
  Settings2,
  X,
  ArrowDownToLine,
} from "lucide-react";
import { features } from "./utils";
import { useState } from "react";
const MobileFeatures = ({ feature, setFeature }) => {
  return (
    <div className="mb-3 h-headerHeight lg:hidden flex items-center gap-2 text-text1">
      {features.map((f) => {
        const { Icon } = f;
        return (
          <div
            key={f.value}
            onClick={() => setFeature(feature === f.value ? null : f.value)}
            className={`${
              feature === f.value ? "bg-bg1" : "bg-bg3/30 text-text2"
            } flex-1 px-2 flex rounded-button justify-center cursor-pointer gap-2 items-center h-full`}
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
        className="flex items-center font-semibold gap-2 h-buttonHeight px-2 bg-actionDark rounded-button cursor-pointer"
      >
        <span className="hidden sm:block">Formato</span>
        <div className="bg-bg3 text-text1 h-7 rounded text-xs flex items-center px-2 uppercase">
          {formats[1]}
        </div>
        {show ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </div>
      <div
        className={`${
          show
            ? "mt-4 pointer-events-auto opacity-100"
            : "mt-2 pointer-events-none opacity-0"
        } absolute top-full left-0 flex flex-col bg-bgDark rounded-panel transition-all p-2`}
      >
        {formats.map((f, i) => {
          const isPremium = i > 1;
          return (
            <div
              className="flex cursor-pointer p-2 items-center text-xs font-semibold"
              key={f}
            >
              <div
                className={`${
                  isPremium ? "bg-amber-400 text-amber-800" : "bg-actionDark"
                } uppercase flexer h-8 w-8 rounded-sm`}
              >
                {f}
              </div>
              <div className="flex-1 flex px-6">
                {isPremium ? (
                  <div className="px-2 py-1 bg-amber-100 text-amber-800 rounded-button">
                    Premium
                  </div>
                ) : (
                  <div className="px-2 py-1 bg-sky-100 text-sky-800 rounded-button">
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

export default function FeatureTop({
  feature,
  setFeature,
  showFeatureBar,
  setShowFeatureBar,
}) {
  const currentFeature = features.find((f) => f.value === feature);

  const featureLabel = currentFeature?.label ?? "niente";
  const FeatureIcon = currentFeature?.Icon;
  const hasComplementary = currentFeature?.hasComplementary;
  return (
    <div className="sticky bg-bg2 top-headerHeight lg:top-0 z-50 text-textOnDark">
      <MobileFeatures feature={feature} setFeature={setFeature} />
      <div className="bg-bgDark rounded-panel flex items-center px-2 h-headerHeight">
        <div className="flex-1 gap-2 flex items-center justify-start">
          {hasComplementary && (
            <div
              onClick={() => setShowFeatureBar((s) => !s)}
              className="bg-actionDark rounded-button cursor-pointer h-buttonHeight aspect-square flexer"
            >
              {showFeatureBar ? <X size={16} /> : <Settings2 size={16} />}
            </div>
          )}
          {currentFeature?.hasFormats && <Format />}
        </div>
        <div className="flex-1 flex items-center justify-center gap-2 font-semibold flex">
          {FeatureIcon && <FeatureIcon size={18} />}
          {featureLabel}
        </div>
        <div className="flex-1 flex items-center justify-end">
          <div className="flexer gap-2 h-buttonHeight px-3 text-xs font-semibold bg-actionDark rounded-button cursor-pointer">
            <span className="hidden sm:flex">Download</span>
            <ArrowDownToLine size={16} />
          </div>
        </div>
      </div>
    </div>
  );
}
