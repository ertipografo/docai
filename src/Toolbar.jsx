import { Menu, X } from "lucide-react";
import Chat from "./Chat";

export default function Toolbar({
  showSidebar,
  setShowSidebar,
  complementaryComponent,
}) {
  const Compo = complementaryComponent;
  return (
    <div
      className={`${
        showSidebar ? "w-complementarySidebarWidth" : "w-headerHeight"
      } bg-bg1 border-r transition-all border-borderColor h-complementarySidebarMaxHeight top-headerHeight sticky flex flex-col overflow-hidden`}
    >
      <div
        className={`${
          showSidebar ? "flex pl-3 pr-2" : "flexer"
        } h-headerHeight justify-between items-center`}
      >
        {showSidebar && <span className="minititle">Complementary</span>}
        <div
          onClick={() => setShowSidebar((s) => !s)}
          className="w-10 h-10 hover:bg-bg3 flexer rounded cursor-pointer"
        >
          {showSidebar ? <X size={16} /> : <Menu size={16} />}
        </div>
      </div>

      <div
        className={`flex-1 w-complementarySidebarWidth transition-all ${
          showSidebar ? "opacity-100" : "opacity-0"
        }`}
      >
        <Compo />
      </div>
    </div>
  );
}
