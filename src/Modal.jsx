import { X, FileImage } from "lucide-react";
export default function Modal({ showModal, setShowModal }) {
  return (
    <div
      className={`${
        showModal
          ? "pointer-events-auto opacity-100"
          : "opacity-0 pointer-events-none"
      } transition-all fixed inset-0 z-[90] bg-bg-dark/95 flex flex-col items-center h-screen`}
    >
      <div className="max-w-3xl p-padding-lg w-full text-text-dark flex-1 flex flex-col justify-center">
        <div className="h-header flexer gap-padding-sm relative">
          <FileImage size={18} />
          <span>file_immagine_descrizione</span>
          <div
            onClick={() => setShowModal(false)}
            className="absolute opacity-50 hover:opacity-100 h-header flexer aspect-square top-0 right-0 cursor-pointer"
          >
            <X size={18} />
          </div>
        </div>
        <div className="flex-1 bg-white max-h-[900px] rounded-panel">dasda</div>
        <div className="h-header flexer gap-padding-sm">1 / 4</div>
      </div>
    </div>
  );
}
