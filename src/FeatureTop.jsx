import { Menu, X, ArrowDownToLine, ChevronDown, Star } from "lucide-react";
import { features } from "./utils";

export default function FeatureTop({
  feature,
  showFeatureBar,
  setShowFeatureBar,
}) {
  const currentFeature = features.find((f) => f.value === feature);
  const hasComplementary = currentFeature?.hasComplementary;
  const hasFormats = currentFeature?.hasFormats;
  const CurrentFeatureIcon = currentFeature?.Icon;

  const btnClass =
    "bg-bg1 border border-gray-300 rounded-btn cursor-pointer h-btn gap-padding-sm flex items-center justify-center px-padding-sm";

  return (
    <div className="sticky bg-bg1 top-0 z-[999] px-padding-sm lg:pl-0">
      <div
        className={`mt-padding-sm py-padding-sm bg-bg2 border-b border-bg3 rounded-t-panel flex items-center gap-padding-sm px-padding-sm min-w-btn font-semibold`}
      >
        <div className={`flex-1 flex items-center justify-between`}>
          <div className="flex gap-padding-sm items-center">
            <div className="px-padding-sm flex items-center gap-padding-sm">
              <CurrentFeatureIcon size={16} />
              <span>{currentFeature.label}</span>
            </div>
            {hasComplementary && (
              <div
                onClick={() => setShowFeatureBar((s) => !s)}
                className={`${btnClass}`}
              >
                {showFeatureBar ? <X size={16} /> : <Menu size={16} />}
              </div>
            )}
            {hasFormats && (
              <div className={btnClass}>
                <span>Formato</span>
                <div className="-mx-1 rounded text-xs w-btn-sm h-btn-sm flexer bg-action-note/10 text-action-note">
                  XL
                </div>
                <ChevronDown size={14} />
              </div>
            )}
          </div>
          <div className="flex-1 text-text2 text-xs flexer">1 / 36</div>
          <div className="flex items-center gap-padding-sm">
            <div className="text-xs flex gap-px items-center cursor-pointer hover:bg-bg3 rounded-btn p-padding-sm">
              <span className="text-text2 hidden md:flex mr-padding-xs">
                Valuta:
              </span>
              <Star size={14} className="text-transparent fill-text1" />
              <Star size={14} className="text-transparent fill-text1" />
              <Star size={14} className="text-transparent fill-text1" />
              <Star size={14} className="text-transparent fill-text2" />
              <Star size={14} className="text-transparent fill-text2" />
            </div>
            <div className={`${btnClass}`}>
              <span className="hidden sm:flex">Download</span>
              <ArrowDownToLine size={16} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
