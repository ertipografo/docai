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
    <div className="min-h-header flex items-center gap-padding-sm ml-padding-sm lg:ml-0 mr-padding-sm">
      <div className="max-w-document justify-between mx-auto w-full flex items-center">
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
  );
}
