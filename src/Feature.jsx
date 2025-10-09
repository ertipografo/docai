import { useState } from "react";
import { features } from "./utils";
import { ChevronRight } from "lucide-react";
import Toolbar from "./Toolbar";

export default function Feature({ feature }) {
  const [showSidebar, setShowSidebar] = useState(true);
  const currentFeature = features.find((f) => f.value === feature);
  const CurrentFeatureIcon = feature && currentFeature.Icon;
  const hasSidebar = currentFeature?.hasComplementary;
  const isMap = currentFeature?.value === "mappa";
  return (
    <div className="bg-bg3 flex-1 overflow-auto border-l border-borderColor">
      {currentFeature && (
        <div className="h-14 bg-bg1 flex items-center px-3 border-b border-borderColor">
          <div className="flex items-center gap-2">
            <CurrentFeatureIcon size={16} />
            <ChevronRight size={16} />
            <span className="font-semibold">{currentFeature.label}</span>
          </div>
        </div>
      )}
      <div className="flex">
        {hasSidebar && (
          <Toolbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        )}
        {isMap ? (
          <div className="bg-bg1 p-10 flex-1">1</div>
        ) : (
          <div className="flex-1 bg-bg2 p-3">
            <div className="max-w-documentWidth mx-auto">
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  className="bg-bg1 h-[1200px] mb-10 rounded-lg flexer"
                  key={index}
                >
                  {index}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
