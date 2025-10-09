import { Image, FileText, FileAudio, Files } from "lucide-react";
import { useState } from "react";

export default function Fonti() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-auto flex flex-col pt-4 border-t border-borderColor">
      <div
        className={`${
          open ? "rounded-t bg-bg3" : "rounded hover:bg-bg3"
        } h-10 flex items-center justify-between gap-3 px-3 cursor-pointer font-semibold`}
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-3">
          <Files size={18} />
          <span className="font-semibold">Fonti</span>
        </div>
        <div className="bg-bg1 flexer h-6 w-6 text-xs border border-borderColor rounded-lg">
          4
        </div>
      </div>
      {open && (
        <div className="bg-bg3 p-3 pt-0 h-20 flexer text-text2 text-xs">
          Qui fonti
        </div>
      )}
    </div>
  );
}
