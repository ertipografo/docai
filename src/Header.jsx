import Logo from "./Logo";
import { PanelRightOpen, PanelRightClose, Plus } from "lucide-react";
export default function Header({ show, setShow, setIsLoading }) {
  const PanelIcon = show ? PanelRightOpen : PanelRightClose;
  return (
    <div className="w-full left-0 top-0 text-xs flex items-center pl-5 pr-2">
      {/* <div
        className={`hidden lg:flex ${
          show ? "pl-6 max-w-sidebarWidth" : "max-w-headerHeight"
        } flex-1`}
      >
        <div
          className={`hidden lg:flex items-center justify-center h-headerHeight w-headerHeight`}
          onClick={() => setShow((s) => !s)}
        >
          <div className="bg-bg1 h-buttonHeight rounded-button w-buttonHeight flexer cursor-pointer">
            <PanelIcon size={18} />
          </div>
        </div>
      </div> */}
      <div className="flex-1 items-center justify-between flex relative h-buttonHeight">
        <div onClick={() => setIsLoading((s) => !s)}>
          <Logo className="w-20" />
        </div>
        <div
          onClick={() => setShow((s) => !s)}
          className="hidden lg:flex items-center justify-center hover:bg-action3 h-buttonHeight rounded-button w-buttonHeight cursor-pointer"
        >
          <PanelIcon size={18} />
        </div>
        {/*  <div className="absolute top-0 right-3 h-headerHeight items-center flex gap-2">
          <div
            onClick={() => setIsLoading((s) => !s)}
            className="h-buttonHeight min-w-buttonHeight gap-2 flexer font-semibold px-3 rounded-button cursor-pointer bg-action1 text-white"
          >
            <span className="hidden sm:flex">Carica nuovo</span>
            <Plus size={18} />
          </div>
        </div> */}
      </div>
    </div>
  );
}
