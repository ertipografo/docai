import {
  FileImage,
  FileAudio,
  FileText,
  ExternalLink,
  ChevronDown,
  FolderGit2,
} from "lucide-react";
import { useState } from "react";

export default function Fonti({ setShowModal }) {
  const [show, setShow] = useState(false);
  const fonti = [
    {
      Icon: FileImage,
      label: "file_immagine_descrizione",
      cl: "text-sky-500",
    },

    {
      Icon: FileAudio,
      label: "registrazione audio 27.3.2025",
      cl: "text-emerald-500",
    },

    {
      Icon: FileText,
      label: "appunti meccanica [maggio 2025]",
      cl: "text-purple-500",
    },
  ];

  return (
    <div className="relative ml-auto">
      <div
        onClick={() => setShow((s) => !s)}
        className={`${
          show ? "bg-bg2" : "bg-bg2"
        } gap-padding-sm h-btn ml-auto font-semibold cursor-pointer px-padding-sm rounded-btn flex items-center`}
      >
        <FolderGit2 size={18} />
        <span>
          Fonti<span className="text-text2"> 4</span>
        </span>

        <ChevronDown size={16} />
      </div>
      {show && (
        <div className="absolute top-full right-0 z-[90]">
          <div className="flex flex-col bg-bg1 p-padding-sm shadow-xl rounded-panel">
            {fonti.map((f) => {
              const { cl, label, Icon } = f;

              return (
                <div
                  onClick={() => setShowModal(true)}
                  key={label}
                  className={`h-btn px-padding-sm hover:bg-bg4 rounded-btn group flex items-center group cursor-pointer gap-padding-sm font-semibold`}
                >
                  <Icon size={16} className={`${cl}`} />
                  <span className="whitespace-nowrap">{label}</span>
                  <div className="ml-auto text-text2 opacity-0 group-hover:opacity-100">
                    <ExternalLink size={16} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
