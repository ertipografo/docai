import { ChevronDown, Star } from "lucide-react";
export default function FeatureTopBar({ currentFeature }) {
  const CurrentFeatureIcon = currentFeature.Icon;
  return (
    <div className="h-headerHeight bg-bg1 flex items-center justify-between pl-5 pr-2 border-b border-borderColor sticky top-0 z-10">
      <div className="flex items-center gap-3">
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
        <div className="bg-actionSecondary font-semibold px-3 rounded h-10 flexer gap-1 text-xs">
          <span>Download</span>
          <ChevronDown size={16} />
        </div>
      </div>
    </div>
  );
}
