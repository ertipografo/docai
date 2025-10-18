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
  const width = `w-complementary ${
    showFeatureBar ? "lg:w-complementary" : "lg:w-0"
  }`;

  return ComplementaryComponent ? (
    <div
      className={`${width} ${height} ${top} ${position} ${transform} shadow-lg lg:shadow-none lg:z-[90] z-[9999] overflow-hidden`}
    >
      <div className="flex flex-col h-full bg-bg2">
        <div className="flex flex-col h-full p-padding-sm rounded-panel">
          <div
            onClick={() => setShowFeatureBar((s) => !s)}
            className="z-50 hover:bg-bg1 h-btn w-btn hover:bg-action-secondary rounded-btn cursor-pointer flex lg:hidden items-center justify-center absolute top-padding-sm right-padding-sm"
          >
            <X size={18} />
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
