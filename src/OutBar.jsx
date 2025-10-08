import {
  PanelRightOpen,
  Star,
  FileText,
  PanelRightClose,
  FolderUp,
} from "lucide-react";
import Doc from "./Doc";
export default function OutBar({ show, setShow }) {
  const sections = [Star, FileText];

  return (
    <div className="flex flex-col relative p-2 gap-2 h-full">
      <div
        onClick={() => setShow((s) => !s)}
        className={`${
          show ? "bg-bg2" : "bg-bg2"
        } aspect-square items-center justify-center cursor-pointer hidden lg:flex rounded`}
      >
        {show ? <PanelRightOpen size={18} /> : <PanelRightClose size={18} />}
      </div>
      {sections.map((Section, idx) => (
        <div
          key={idx}
          className="relative hover:bg-bg2 rounded group w-full aspect-square flex items-center justify-center cursor-pointer"
        >
          <Section size={18} />
          {/* <div className="pointer-events-none absolute top-0 left-full w-xs bg-bgDarker opacity-0 group-hover:opacity-100 transition-opacity flex flex-col gap-2 p-2 rounded-r">
            {Array.from({ length: 5 }).map((_, index) => (
              <Doc className="bg-transparent" key={index} idx={index} />
            ))}
          </div> */}
        </div>
      ))}
      <div className="aspect-square bg-bgDark text-textOnDark flexer rounded mt-auto">
        <FolderUp size={18} />
      </div>
    </div>
  );
}
