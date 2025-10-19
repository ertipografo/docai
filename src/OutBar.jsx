import { ChevronLeft, PanelRightClose, PanelRightOpen } from "lucide-react";
import UploadCta from "./UploadCta";
const cl = "hover:bg-bg2 cursor-pointer w-btn h-btn flexer rounded-btn";
export default function Outbar({ setIsArchive, setShow, show }) {
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
    <div className="hidden lg:flex w-header bg-bg1 border-r border-border flex-col">
      {actions.map(({ icon, action }, r) => (
        <div
          className={`${
            r === 0 ? "border-b border-border" : ""
          } py-padding-sm w-header flexer`}
          onClick={action}
          key={r}
        >
          {icon}
        </div>
      ))}
      {/*  <div className="flexer aspect-square">
        <UploadCta hideLabel={true} />
      </div> */}
    </div>
  );
}
