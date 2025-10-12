import Logo from "./Logo";
import { PanelRightOpen, PanelRightClose, FolderUp } from "lucide-react";
export default function Header({ show, setShow }) {
  const PanelIcon = show ? PanelRightOpen : PanelRightClose;
  return (
    <div className="h-headerHeight z-[999] relative lg:fixed w-full left-0 top-0 bg-bg2 text-xs flex items-center z-50">
      <div
        className={`hidden lg:flex ${
          show ? "pl-4 max-w-sidebarWidth" : "max-w-headerHeight"
        } flex-1`}
      >
        <div
          className={`hidden lg:flex items-center justify-center h-headerHeight w-headerHeight`}
          onClick={() => setShow((s) => !s)}
        >
          <div
            className={`${
              !show ? "bg-bg3" : "bg-bg1"
            } h-buttonHeight rounded-button w-buttonHeight flexer cursor-pointer`}
          >
            <PanelIcon size={16} />
          </div>
        </div>
      </div>
      <div className="flex-1 flexer relative h-headerHeight">
        <Logo className="scale-75" />
        <div className="absolute top-0 right-3 h-headerHeight items-center flex">
          <div className="h-buttonHeight min-w-buttonHeight gap-2 flexer font-semibold px-3 rounded-button cursor-pointer bg-action1 text-white">
            <span className="hidden lg:flex">Carica nuovo</span>
            <FolderUp size={16} />
          </div>
        </div>
      </div>
    </div>
  );
}
