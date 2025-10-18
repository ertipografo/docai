import { Plus } from "lucide-react";

export default function UploadCta({ hideLabel }) {
  return (
    <div className="text-white text-xs font-semibold bg-action-primary h-btn flexer px-padding-sm gap-padding-xs rounded-btn cursor-pointer">
      <Plus size={16} />
      {!hideLabel && <span>Carica Nuovo</span>}
    </div>
  );
}
