import Logo from "./Logo";
import { PanelRightOpen, PanelRightClose, FolderUp } from "lucide-react";
export default function Header({ show, setShow }) {
  const PanelIcon = show ? PanelRightOpen : PanelRightClose;
  return (
    <div className="h-headerHeight z-[999] fixed w-full left-0 top-0 bg-bgDark text-textOnDark text-xs flex items-center z-50">
      <div className="flex-1">
        <div
          className="hidden lg:flex items-center justify-center h-headerHeight w-headerHeight"
          onClick={() => setShow((s) => !s)}
        >
          <div className="h-buttonHeight w-buttonHeight flexer rounded cursor-pointer">
            <PanelIcon size={16} />
          </div>
        </div>
      </div>
      <div className="flex-1 flexer">
        <Logo className="scale-75" />
      </div>
      <div className="flex-1 justify-end flex pr-2">
        <div className="h-buttonHeight min-w-buttonHeight gap-2 flexer font-semibold px-3 rounded cursor-pointer bg-action1 text-white">
          <span className="hidden lg:flex">Carica nuovo</span>
          <FolderUp size={16} />
        </div>
      </div>
    </div>
  );
}
