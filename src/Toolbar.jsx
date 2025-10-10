import { X } from "lucide-react";

export default function Toolbar({
  showFeatureBar,
  setShowFeatureBar,
  complementaryComponent,
}) {
  const height = `h-screen lg:h-sidebarMaxHeight`;
  const top = `top-0`;
  const position = "fixed lg:sticky left-0 lg:left-auto";
  const border = `lg:border-r-0 border-borderColor border-r`;
  const transform = `transition-all lg:translate-x-0 ${
    showFeatureBar ? "translate-x-0" : "-translate-x-full"
  }`;
  const width = `w-complementarySidebarWidth ${
    showFeatureBar ? "lg:w-complementarySidebarWidth" : "lg:w-0"
  }`;

  const Compo = complementaryComponent;
  return (
    <div
      className={`${top} ${position} ${transform} ${height} ${width} ${border} z-[999] overflow-hidden py-0 lg:py-3 bg-bg1 lg:bg-bg3`}
    >
      <div className="flex flex-col h-full">
        <div className="h-headerHeight bg-bg1 lg:ml-3 rounded-t-lg flex items-center pr-2 pl-3 justify-between">
          <span className="font-semibold">Complementary</span>
          <div
            onClick={() => setShowFeatureBar((s) => !s)}
            className="h-buttonHeight aspect-square hover:bg-action2 rounded cursor-pointer flexer"
          >
            <X size={18} />
          </div>
        </div>
        <div className="flex-1 w-complementarySidebarWidth lg:pl-3">
          <div className="bg-bg1 h-full rounded-b-lg">
            <Compo />
          </div>
        </div>
      </div>
    </div>
  );
}
