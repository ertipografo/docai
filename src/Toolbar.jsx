import { Menu, X } from "lucide-react";
import Chat from "./Chat";

export default function Toolbar({
  showSidebar,
  setShowSidebar,
  complementaryComponent,
}) {
  const Compo = complementaryComponent;

  const position = `fixed lg:sticky left-0 top-0 lg:left-auto lg:top-headerHeight`;
  const width = `${
    showSidebar
      ? "w-complementarySidebarWidth"
      : "w-complementarySidebarWidth lg:w-headerHeight"
  }`;
  const margin = `lg:ml-0 ${
    showSidebar ? "ml-0" : "-ml-complementarySidebarWidth"
  }`;

  const height = `h-screen lg:h-complementarySidebarMaxHeight lg:border-r border-borderColor`;

  return (
    <>
      <div
        className={`z-[998] shadow-xl lg:shadow-none overflow-hidden transition-all ${position} ${width} ${margin} ${height} bg-bg1 flex flex-col `}
      >
        <div className="hidden lg:flex min-h-headerHeight items-center justify-between px-2">
          {showSidebar && <span className="minititle">Complementary</span>}
          <div
            onClick={() => setShowSidebar((s) => !s)}
            className="h-buttonHeight w-buttonHeight hover:bg-bg3 flexer rounded cursor-pointer"
          >
            {showSidebar ? <X size={16} /> : <Menu size={16} />}
          </div>
        </div>

        {showSidebar && (
          <div className="w-complementarySidebarWidth flex-1 overflow-auto">
            <Compo />
          </div>
        )}
      </div>
      <div
        onClick={() => setShowSidebar((s) => !s)}
        className="fixed lg:hidden flex items-center justify-center cursor-pointer bottom-5 right-5 bg-bgDark text-textOnDark z-[999] h-buttonHeight w-buttonHeight rounded-lg"
      >
        {showSidebar ? <X size={16} /> : <Menu size={16} />}
      </div>
    </>
  );
}
