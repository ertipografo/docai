import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { ChevronLeft, Menu, PanelRightOpen } from "lucide-react";

export default function Container({
  side,
  main,
  setIsArchive,
  setNoteType,
  show,
  setShow,
}) {
  const cl = "hover:bg-bg2 cursor-pointer w-btn h-btn flexer rounded-btn";
  const actions = [
    {
      icon: (
        <div className={cl + " bg-bg2"}>
          <ChevronLeft size={16} />
        </div>
      ),
      action: () => setIsArchive((s) => !s),
    },
    {
      icon: (
        <div className={cl}>
          <PanelRightOpen size={16} />
        </div>
      ),
      action: () => setShow((s) => !s),
    },
    {
      icon: (
        <div className={cl}>
          <Menu size={16} />
        </div>
      ),
      action: () => setNoteType((s) => (s === "note" ? "doc" : "note")),
    },
  ];

  return (
    <div className="h-screen flex text-base text-text1 bg-bg1">
      <div className="flex-1 flex lg:overflow-hidden">
        <div className="hidden lg:flex w-header bg-bg1 border-r border-border flex-col">
          {actions.map(({ icon, action }, r) => (
            <div
              className={`${
                r === 0 ? "border-b border-border" : ""
              } h-header w-header flexer`}
              onClick={action}
              key={r}
            >
              {icon}
            </div>
          ))}
        </div>
        <div className="flex flex-col w-full">
          <div className="flex flex-col lg:flex-row flex-1 lg:overflow-auto">
            {show && side && side}
            <div
              className={`${
                !show ? "pl-padding-sm" : ""
              } flex-1 flex flex-col lg:overflow-auto`}
            >
              <PerfectScrollbar className="overflow-visible! lg:overflow-hidden! flex flex-col flex-1">
                {main}
              </PerfectScrollbar>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
