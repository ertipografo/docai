import { ChevronLeft, PanelRightClose, PanelRightOpen } from "lucide-react";
import { categories } from "./utils";
const cl = "hover:bg-bg2 cursor-pointer w-btn h-btn flexer rounded-btn";
export default function Outbar({ setIsArchive, setShow, show, isArchive }) {
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
          {show ? <PanelRightOpen size={16} /> : <PanelRightClose size={16} />}
        </div>
      ),
      action: () => setShow((s) => !s),
    },
  ];
  return (
    <div
      className={`${
        isArchive ? "w-xs" : "w-0 overflow-hidden"
      } hidden lg:flex border-r border-border flex-col bg-bg1`}
    >
      {isArchive ? (
        <div onClick={() => setIsArchive(false)}>
          {categories.map((f, i) => {
            const { label, Icon } = f;
            return (
              <div key={i} className="flex flex-col">
                <div className="font-semibold text-xs flex items-center">
                  <div className="flexer h-btn w-btn">
                    <Icon size={16} />
                  </div>
                  <span>{`Documenti ${label}`}</span>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        actions.map(({ icon, action }, r) => (
          <div
            className={`${
              r === 0 ? "border-b border-border" : ""
            } py-padding-sm w-header flexer`}
            onClick={action}
            key={r}
          >
            {icon}
          </div>
        ))
      )}
    </div>
  );
}
