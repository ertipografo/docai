import { Menu, X, ArrowDownToLine, ChevronDown, ThumbsUp } from "lucide-react";
import { features } from "./utils";
import Rating from "./Rating";

export default function FeatureTop({
  feature,
  showFeatureBar,
  setShowFeatureBar,
}) {
  const currentFeature = features.find((f) => f.value === feature);
  const hasComplementary = currentFeature?.hasComplementary;
  const hasFormats = currentFeature?.hasFormats;

  const btnClass =
    "bg-bg1 rounded cursor-pointer h-btn gap-padding-sm flex items-center justify-center px-padding-sm";

  return (
    <div className="sticky bg-bg1 top-feature-topbar-top z-[999] px-padding-sm lg:pl-0">
      <div
        className={`py-padding-sm bg-bg2 rounded-t-panel flex items-center gap-padding-sm px-padding-sm min-w-btn text-xs font-semibold`}
      >
        <div
          className={`${
            feature === "mappa" ? "" : "max-w-document mx-auto"
          } flex-1 flex items-center justify-between`}
        >
          <div className="flex gap-padding-sm items-center">
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
                <div className="-mx-1 rounded w-btn-sm h-btn-sm flexer bg-action-note/10 text-action-note">
                  XL
                </div>
                <ChevronDown size={14} />
              </div>
            )}
          </div>
          <div className="flex items-center gap-padding-sm">
            <Rating />
            <div className={`${btnClass} bg-transparent! hover:bg-bg1!`}>
              <ThumbsUp size={16} />
            </div>
            <div className={`${btnClass}`}>
              <span className="hidden sm:flex">Download</span>
              <ArrowDownToLine size={16} />
            </div>
          </div>
        </div>
        {/*  <div className="justify-between mx-auto w-full flex items-center">
          <div>
            {hasComplementary && (
              <div
                onClick={() => setShowFeatureBar((s) => !s)}
                className={`${btnClass}`}
              >
                {showFeatureBar ? <X size={16} /> : <Menu size={16} />}
              </div>
            )}
          </div>
          <div className="flex items-center gap-padding-sm">
            <div className={`${btnClass}`}>
              <span className="hidden sm:flex">Download</span>
              <ArrowDownToLine size={16} />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
