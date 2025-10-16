import {
  ChevronLeft,
  PanelRightClose,
  PanelRightOpen,
  Menu,
} from "lucide-react";
import { features } from "./utils";
const cl = "hover:bg-bg2 cursor-pointer w-btn h-btn flexer rounded-btn";
export default function Outbar({
  setIsArchive,
  setShow,
  setNoteType,
  setFeature,
  feature,
  show,
}) {
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
      {!show &&
        features.map((k, r) => (
          <div
            className={`h-header w-header flexer`}
            onClick={() => setFeature(k.value)}
            key={r}
          >
            <div className={`${cl} ${feature === k.value ? "bg-bg2" : ""}`}>
              <k.Icon size={16} />
            </div>
          </div>
        ))}
    </div>
  );
}
