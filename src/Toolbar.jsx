import { X } from "lucide-react";
import { features } from "./utils";

export default function Toolbar({
  feature,
  showFeatureBar,
  setShowFeatureBar,
}) {
  const currentFeature = features.find((f) => f.value === feature);
  const ComplementaryComponent = currentFeature?.hasComplementary;

  const height = `h-screen lg:h-complementary-h`;
  const top = `top-0 lg:top-complementary-t`;
  const position = "fixed lg:sticky left-0 lg:left-auto";
  const transform = `lg:translate-x-0 ${
    showFeatureBar ? "translate-x-0" : "-translate-x-full"
  }`;
  const width = `w-sidebar ${showFeatureBar ? "lg:w-sidebar" : "lg:w-0"}`;

  return ComplementaryComponent ? (
    <div
      className={`${width} ${height} ${top} ${position} ${transform} shadow-lg lg:shadow-none bg-bg1 lg:bg-bg2 z-[90] overflow-hidden`}
    >
      <div className="flex flex-col h-full pr-padding-sm">
        <div className="flex flex-col h-full bg-bg1 p-padding-sm rounded-panel">
          <div className="h-10 flex items-center pr-padding-sm pl-padding-sm justify-between">
            <span className="font-semibold">Complementary</span>
            <div
              onClick={() => setShowFeatureBar((s) => !s)}
              className="h-btn aspect-square hover:bg-action-tertiary rounded-btn cursor-pointer flex items-center justify-center lg:hidden"
            >
              <X size={18} />
            </div>
          </div>
          <div className="flex-1 w-sidebar">
            <ComplementaryComponent />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
