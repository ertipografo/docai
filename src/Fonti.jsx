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
    <div className="flex flex-col gap-1">
      {fonti.map((f) => {
        const { cl, label, Icon } = f;

        return (
          <div
            onClick={() => setShowModal(true)}
            key={label}
            className={`flex flex-col flex-1 lg:flex-0`}
          >
            <div
              className={`hover:bg-bg2 rounded-button h-12 group flex items-center px-paddingSm group cursor-pointer gap-paddingSm font-semibold`}
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
