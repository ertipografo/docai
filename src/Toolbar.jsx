import { Menu, X } from "lucide-react";

export default function Toolbar({ showSidebar, setShowSidebar }) {
  return (
    <div
      className={`${
        showSidebar ? "w-complementarySidebarWidth" : "w-14"
      } bg-bg1 border-r transition-all border-borderColor h-sidebarMaxHeight top-0 sticky`}
    >
      <div
        className={`${
          showSidebar ? "flex pl-3 pr-2" : "flexer"
        } h-14 justify-between items-center`}
      >
        {showSidebar && <span className="minititle">Complementary</span>}
        <div
          onClick={() => setShowSidebar((s) => !s)}
          className="w-10 h-10 hover:bg-bg3 flexer rounded cursor-pointer"
        >
          {showSidebar ? <X size={16} /> : <Menu size={16} />}
        </div>
      </div>
      {showSidebar && <div className="bg-yellow-100 flexer h-20">Toolbar</div>}
    </div>
  );
}
