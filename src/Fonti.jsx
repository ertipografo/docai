import { FileImage, FileAudio, FileText, ExternalLink } from "lucide-react";

export default function Fonti({ setShowModal }) {
  const fonti = [
    {
      Icon: FileImage,
      label: "file_immagine_descrizione",
      cl: "text-sky-500",
    },
    {
      Icon: FileAudio,
      label: "registrazione audio 25.3.2025",
      cl: "text-emerald-500",
    },
    {
      Icon: FileAudio,
      label: "registrazione audio 27.3.2025",
      cl: "text-emerald-500",
    },
    {
      Icon: FileText,
      label: "appunti meccanica marzo 2025",
      cl: "text-purple-500",
    },
    {
      Icon: FileText,
      label: "appunti meccanica [maggio 2025]",
      cl: "text-purple-500",
    },
  ];

  return (
    <div className="flex flex-col gap-1 p-3 bg-bg1 rounded-panel ml-5 mr-3">
      {fonti.map((f) => {
        const { cl, label, Icon } = f;

        return (
          <div
            onClick={() => setShowModal(true)}
            key={label}
            className={`flex flex-col flex-1 lg:flex-0`}
          >
            <div
              className={`hover:bg-bg2 rounded-button h-12 group flex items-center px-3 group cursor-pointer gap-3 font-semibold`}
            >
              <Icon size={16} className={`${cl}`} />
              <span>{label}</span>
              <div className="ml-auto text-text2 opacity-0 group-hover:opacity-100">
                <ExternalLink size={16} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
