import { FileImage, FileAudio, FileText, X } from "lucide-react";

export default function Fonti({ showModal, setShowModal }) {
  const fonti = [
    {
      Icon: FileImage,
      label: "file_immagine_descrizione",
      cl: "text-sky-500",
    },
    {
      Icon: FileAudio,
      label: "registrazione audio 25.3.2025 - rossi",
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
      label: "appunti meccanica maggio 2025 - rossi",
      cl: "text-purple-500",
    },
  ];

  return (
    <div
      className={`${
        showModal
          ? "pointer-events-auto opacity-100"
          : "opacity-0 pointer-events-none"
      } transition-all fixed inset-0 z-[9999999] bg-bgDark/60 flexer`}
    >
      <div className="p-3 bg-bg1 w-full max-w-md rounded-panel">
        <div className="font-semibold flex justify-between items-center pl-3">
          <span>Fonti</span>
          <div
            onClick={() => setShowModal(false)}
            className="flexer w-buttonHeight h-buttonHeight cursor-pointer rounded-button hover:bg-bg2"
          >
            <X size={18} />
          </div>
        </div>
        <div className="flex flex-col">
          {fonti.map((f) => {
            return (
              <div key={f.label} className="flex items-center gap-2 ">
                <div className={`${f.cl} flexer h-buttonHeight w-buttonHeight`}>
                  <f.Icon size={20} />
                </div>
                {f.label}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
