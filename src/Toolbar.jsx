import { X } from "lucide-react";
import { features } from "./utils";

export default function Toolbar({
  feature,
  showFeatureBar,
  setShowFeatureBar,
}) {
  const currentFeature = features.find((f) => f.value === feature);
  const ComplementaryComponent = currentFeature?.hasComplementary;

  const height = `h-screen lg:h-complementaryHeight`;
  const top = `top-0 lg:top-complementaryTop`;
  const position = "fixed lg:sticky left-0 lg:left-auto";
  const transform = `transition-all lg:translate-x-0 ${
    showFeatureBar ? "translate-x-0" : "-translate-x-full"
  }`;
  const width = `w-complementarySidebarWidth ${
    showFeatureBar ? "lg:w-complementarySidebarWidth" : "lg:w-0"
  }`;

  return ComplementaryComponent ? (
    <div
      className={`${width} ${height} ${top} ${position} ${transform} shadow-lg lg:shadow-none bg-bg1 border-borderColor z-[99999] overflow-hidden`}
    >
      <div className="flex flex-col h-full px-2 pb-2">
        <div className="flex flex-col h-full bg-bg1 lg:bg-bg2 p-2 rounded-button">
          <div className="h-10 flex items-center pr-2 pl-3 justify-between">
            <span className="font-semibold">Complementary</span>
            <div
              onClick={() => setShowFeatureBar((s) => !s)}
              className="h-buttonHeight aspect-square hover:bg-action3 rounded-button cursor-pointer flex items-center justify-center lg:hidden"
            >
              <X size={18} />
            </div>
          </div>
          <div className="flex-1 w-complementarySidebarWidth">
            <ComplementaryComponent />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
