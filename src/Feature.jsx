import { useState } from "react";
import { features } from "./utils";
import Toolbar from "./Toolbar";
import FeatureTopBar from "./FeatureTopBar";

export default function Feature({ feature }) {
  const [showSidebar, setShowSidebar] = useState(false);
  const currentFeature = features.find((f) => f.value === feature);

  const hasSidebar = currentFeature?.hasComplementary;
  const isMap = currentFeature?.value === "mappa";
  return (
    <div className="bg-bg3 flex-1 overflow-auto border-l border-borderColor">
      {currentFeature && <FeatureTopBar currentFeature={currentFeature} />}
      <div className="flex relative">
        {hasSidebar && (
          <Toolbar
            complementaryComponent={hasSidebar}
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
          />
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
