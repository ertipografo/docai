import { Menu, X, ArrowDownToLine } from "lucide-react";
import { features } from "./utils";

export default function FeatureTop({
  feature,
  showFeatureBar,
  setShowFeatureBar,
}) {
  const currentFeature = features.find((f) => f.value === feature);
  const hasComplementary = currentFeature?.hasComplementary;

  const btnClass =
    "bg-bg1 rounded-btn cursor-pointer h-btn gap-padding-sm flex items-center justify-center px-padding-sm";

  return (
    <div className="sticky bg-bg1 top-0 z-50 -m-padding-sm mb-padding-sm pt-padding-sm">
      <div
        className={`h-header bg-bg3 rounded-t-panel flex items-center gap-padding-sm px-padding-sm min-w-btn text-xs font-semibold`}
      >
        <div className="justify-between mx-auto w-full flex items-center">
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
        </div>
      </div>
    </div>
  );
}
