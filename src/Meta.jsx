import {
  FileImage,
  FileAudio,
  FileText,
  ExternalLink,
  ChevronDown,
  FolderGit2,
  ChevronUp,
} from "lucide-react";
import Fonti from "./Fonti";
import { useState } from "react";
const Tags = () => {
  const tags = [
    "prima",
    "seconda",
    "terza",
    "quarto tag",
    "2025",
    "ultimissima giuro",
  ];
  return (
    <div className="flex items-start text-xs text-text2">
      <div className="items-center flex-1 flex gap-1.5 flex-wrap">
        {tags.map((tag, i) => {
          return (
            <div
              key={i}
              className="rounded-full flexer bg-bg2 h-btn-sm px-padding-sm"
            >
              {tag}
            </div>
          );
        })}
        <div className="bg-bg2 aspect-square cursor-pointer h-btn-sm rounded-full flexer">
          +
        </div>
      </div>
    </div>
  );
};

export default function Meta({ setShowModal }) {
  const [open, setOpen] = useState(null);
  const metas = [
    { label: "Tag", value: 6 },
    { label: "Fonti", value: 4 },
  ];

  return (
    <div className="flex flex-col gap-padding-sm">
      <div className="flex items-center gap-padding-sm">
        {metas.map((m, i) => {
          const isOpen = open === m.label;
          return (
            <div
              className="text-xs cursor-pointer group items-center gap-padding-xs font-semibold flex"
              key={i}
              onClick={() => setOpen(() => (isOpen ? null : m.label))}
            >
              <span className="group-hover:underline">{m.label}</span>
              <div className="rounded-btn h-5 w-5 bg-bg2 flexer">{m.value}</div>
              {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </div>
          );
        })}
      </div>

      {open === metas[1].label && <Fonti setShowModal={setShowModal} />}
      {open === metas[0].label && <Tags />}
    </div>
  );
}
