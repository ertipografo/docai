import { ChevronDown, Settings, Settings2 } from "lucide-react";
import { features } from "./utils";
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
              feature === f.value ? "bg-violet-500 text-textOnDark" : "bg-bg1"
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

export default function FeatureTop({ feature, setFeature }) {
  const currentFeature = features.find((f) => f.value === feature);

  const featureLabel = currentFeature?.label ?? "niente";
  const FeatureIcon = currentFeature?.Icon;
  const hasComplementary = currentFeature?.hasComplementary;
  return (
    <div className="sticky bg-bg3 top-headerHeight lg:top-0 pt-3 top-headerHeight">
      <MobileFeatures feature={feature} setFeature={setFeature} />
      <div className="bg-bg2 rounded-t flex items-center px-2 h-headerHeight">
        <div className="flex-1 flex items-center justify-start">
          {hasComplementary && (
            <div className="bg-actionSecondary rounded cursor-pointer h-buttonHeight aspect-square flexer">
              <Settings2 size={16} />
            </div>
          )}
        </div>
        <div className="flex-1 flex items-center justify-center gap-2 font-semibold hidden sm:flex">
          {FeatureIcon && <FeatureIcon size={18} />}
          {featureLabel}
        </div>
        <div className="flex-1 flex items-center justify-end">
          <div className="flexer gap-2 h-buttonHeight px-3 text-xs font-semibold bg-actionSecondary rounded cursor-pointer">
            <span>Download</span>
            <ChevronDown size={16} />
          </div>
        </div>
      </div>
    </div>
  );
}
