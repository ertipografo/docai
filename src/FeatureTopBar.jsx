import {
  ChevronDown,
  ChevronRight,
  Star,
  PanelRightClose,
  PanelRightOpen,
} from "lucide-react";
export default function FeatureTopBar({
  currentFeature,
  setShowFeatureBar,
  showFeatureBar,
}) {
  const CurrentFeatureIcon = currentFeature.Icon;
  return (
    <div className="sticky top-headerHeight lg:top-0 z-10">
      <div className="mx-auto py-3 px-6 max-w-documentWidth w-full">
        <div className="h-headerHeight flex justify-between bg-bg3 rounded-lg px-2 items-center">
          <div className="flex items-center gap-3">
            <div
              className="w-buttonHeight aspect-square cursor-pointer rounded hover:bg-actionSecondary flexer"
              onClick={() => setShowFeatureBar((s) => !s)}
            >
              {showFeatureBar ? (
                <PanelRightOpen size={18} />
              ) : (
                <PanelRightClose size={18} />
              )}
            </div>
            <ChevronRight size={16} />
            <CurrentFeatureIcon size={16} />
            <span className="font-semibold">{currentFeature.label}</span>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <Star size={16} className="text-transparent fill-yellow-400" />
              <span className="text-xs font-semibold">
                5.4 <span className="text-text2">(456)</span>
              </span>
            </div>
            <div className="bg-actionSecondary font-semibold px-3 rounded h-buttonHeight flexer gap-1 text-xs">
              <span>Download</span>
              <ChevronDown size={16} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
