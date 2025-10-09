import { Image, FileText, FileAudio, Files, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Fonti() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-auto flex flex-col">
      <div
        className={`${
          open ? "rounded-t" : "rounded hover:bg-bg2"
        } h-buttonHeight flex border border-borderColor items-center justify-between gap-3 px-2 cursor-pointer font-semibold`}
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-3">
          <Files size={18} />
          <span className="font-semibold">Fonti</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-bg3 flexer h-6 w-6 text-xs border border-borderColor rounded">
            4
          </div>
          <ChevronDown size={18} />
        </div>
      </div>
      {open && (
        <div className="border border-borderColor border-t-0 p-3 pt-0 h-20 flexer text-text2 text-xs rounded-b">
          Qui fonti
        </div>
      )}
    </div>
  );
}
