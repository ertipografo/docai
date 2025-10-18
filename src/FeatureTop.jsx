import { Menu, X, ArrowDownToLine } from "lucide-react";
import { features } from "./utils";
import Logo from "./Logo";

export default function FeatureTop({
  feature,
  showFeatureBar,
  setShowFeatureBar,
  show,
}) {
  const currentFeature = features.find((f) => f.value === feature);
  const hasComplementary = currentFeature?.hasComplementary;

  return (
    <div className="sticky top-padding-sm z-50 pb-padding-sm">
      <div
        className={`${
          feature === "mappa" ? "" : "max-w-document mx-auto"
        } h-header bg-orange-200 flex items-center gap-padding-sm px-padding-sm`}
      >
        <div className="justify-between mx-auto w-full flex items-center">
          <div>{!show && <Logo />}</div>
          <div className="flex items-center gap-padding-sm">
            {hasComplementary && (
              <div
                onClick={() => setShowFeatureBar((s) => !s)}
                className="bg-action-secondary rounded-btn cursor-pointer h-btn aspect-square flexer"
              >
                {showFeatureBar ? <X size={16} /> : <Menu size={16} />}
              </div>
            )}
            <div className="flexer gap-padding-sm h-btn px-padding-sm text-xs font-semibold bg-action-secondary text-text1 rounded-btn cursor-pointer">
              <span className="hidden sm:flex">Download</span>
              <ArrowDownToLine size={16} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
