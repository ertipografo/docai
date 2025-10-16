import {
  FileImage,
  FileAudio,
  FileText,
  ExternalLink,
  ChevronDown,
  FolderGit2,
} from "lucide-react";

export default function Fonti({ setShowModal }) {
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
    <div className="flex flex-col border rounded-btn border-border">
      {fonti.map((f) => {
        const { cl, label, Icon } = f;

        return (
          <div
            onClick={() => setShowModal(true)}
            key={label}
            className={`h-btn px-padding-sm rounded group flex items-center group cursor-pointer gap-padding-sm font-semibold`}
          >
            <Icon size={16} className={`${cl}`} />
            <span className="whitespace-nowrap">{label}</span>
            <div className="ml-auto text-text2 opacity-0 group-hover:opacity-100">
              <ExternalLink size={14} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
