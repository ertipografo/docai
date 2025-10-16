import { Menu, X, ArrowDownToLine } from "lucide-react";
import { features } from "./utils";

export default function FeatureTop({
  feature,
  showFeatureBar,
  setShowFeatureBar,
}) {
  const currentFeature = features.find((f) => f.value === feature);
  const hasComplementary = currentFeature?.hasComplementary;

  return (
    <div className={`w-full max-w-document mx-auto`}>
      <div className="flex items-center h-header">
        <div className="flex-1 flex items-center justify-end gap-padding-sm">
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
