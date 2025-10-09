import { features } from "./utils";
import Toolbar from "./Toolbar";
import FeatureTopBar from "./FeatureTopBar";

export default function Feature({
  feature,
  showFeatureBar,
  setShowFeatureBar,
}) {
  const currentFeature = features.find((f) => f.value === feature);

  const hasFeatureBar = currentFeature?.hasComplementary;
  const isMap = currentFeature?.value === "mappa";
  return (
    <div className="bg-bg3 flex-1 lg:overflow-auto border-l border-borderColor">
      {currentFeature && <FeatureTopBar currentFeature={currentFeature} />}
      <div className="flex relative">
        {hasFeatureBar && (
          <Toolbar
            complementaryComponent={hasFeatureBar}
            showFeatureBar={showFeatureBar}
            setShowFeatureBar={setShowFeatureBar}
          />
        )}
        {isMap ? (
          <div className="bg-bg1 p-10 flex-1">1</div>
        ) : (
          <div className="flex-1 bg-bg2 p-3">
            <div className="max-w-documentWidth mx-auto">
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  className="bg-bg1 h-[1200px] border border-borderColor mb-10 rounded-lg flexer"
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
