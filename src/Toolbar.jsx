import { Menu, X } from "lucide-react";

export default function Toolbar({
  showFeatureBar,
  setShowFeatureBar,
  complementaryComponent,
}) {
  const Compo = complementaryComponent;

  const position = `fixed lg:sticky left-0 top-0 lg:left-auto lg:top-headerHeight`;
  const width = `w-1/2 min-w-complementarySidebarWidth ${
    showFeatureBar
      ? "lg:w-complementarySidebarWidth"
      : "lg:min-w-0 lg:w-headerHeight"
  }`;
  const margin = `lg:translate-x-0 ${
    showFeatureBar ? "translate-x-0" : "-translate-x-full"
  }`;

  const height = `h-screen lg:h-complementarySidebarMaxHeight lg:border-r border-borderColor`;

  return (
    <>
      <div
        className={`z-[998] shadow-xl lg:shadow-none overflow-hidden transition-all ${position} ${width} ${margin} ${height} bg-bg1 flex flex-col `}
      >
        <div className="hidden lg:flex min-h-headerHeight items-center justify-between">
          {showFeatureBar && (
            <span className="minititle ml-3">Complementary</span>
          )}
          <div className="w-headerHeight h-headerHeight flexer">
            <div
              onClick={() => setShowFeatureBar((s) => !s)}
              className="h-buttonHeight w-buttonHeight hover:bg-bg3 flexer rounded cursor-pointer"
            >
              {showFeatureBar ? <X size={16} /> : <Menu size={16} />}
            </div>
          </div>
        </div>

        {showFeatureBar && (
          <div className="w-full lg:w-complementarySidebarWidth flex-1 overflow-auto">
            <Compo />
          </div>
        )}
      </div>
      <div
        onClick={() => setShowFeatureBar((s) => !s)}
        className="fixed lg:hidden flex items-center justify-center cursor-pointer bottom-5 right-5 bg-bgDark text-textOnDark z-[999] h-buttonHeight w-buttonHeight rounded-lg"
      >
        {showFeatureBar ? <X size={16} /> : <Menu size={16} />}
      </div>
    </>
  );
}
