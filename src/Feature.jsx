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
    <>
      {hasFeatureBar && (
        <Toolbar
          complementaryComponent={hasFeatureBar}
          showFeatureBar={showFeatureBar}
          setShowFeatureBar={setShowFeatureBar}
        />
      )}
      <div className="flex-1 lg:overflow-auto bg-bg3 flex flex-col">
        {currentFeature && (
          <FeatureTopBar
            setShowFeatureBar={setShowFeatureBar}
            currentFeature={currentFeature}
            showFeatureBar={showFeatureBar}
          />
        )}
        <div className="flex relative flex-col flex-1 p-3 pt-0">
          {isMap ? (
            <div className="bg-bg1 p-10 flex-1 rounded-lg">1</div>
          ) : (
            <div className="flex-1">
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
    </>
  );
}
