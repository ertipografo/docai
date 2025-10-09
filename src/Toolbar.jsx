import { X } from "lucide-react";

export default function Toolbar({
  showFeatureBar,
  setShowFeatureBar,
  complementaryComponent,
}) {
  const height = `h-screen lg:h-sidebarMaxHeight`;
  const top = `top-0 lg:top-0`;
  const position = "fixed lg:sticky left-0 lg:left-auto";
  const border = `border-borderColor ${showFeatureBar ? "border-x" : ""}`;
  const transform = `transition-all lg:translate-x-0 ${
    showFeatureBar ? "translate-x-0" : "-translate-x-full"
  }`;
  const width = `w-complementarySidebarWidth ${
    showFeatureBar ? "lg:w-complementarySidebarWidth" : "lg:w-0"
  }`;

  const Compo = complementaryComponent;
  return (
    <div
      className={`${top} ${position} ${transform} ${height} ${width} ${border} bg-bg1 z-[999] overflow-hidden flex flex-col`}
    >
      <div className="h-headerHeight flex items-center pr-2 pl-3 justify-between">
        <span className="font-semibold">Complementary</span>
        <div
          onClick={() => setShowFeatureBar((s) => !s)}
          className="h-buttonHeight aspect-square hover:bg-actionSecondary rounded cursor-pointer flexer"
        >
          <X size={18} />
        </div>
      </div>
      <div className="flex-1 w-complementarySidebarWidth">
        <Compo />
      </div>
    </div>
  );
}
