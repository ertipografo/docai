import { SquarePen, ChevronDown, ChevronUp } from "lucide-react";
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
              className="rounded flexer bg-bg2 hover:bg-bg3 hover:text-text1 cursor-pointer h-btn-sm px-padding-sm"
            >
              {tag}
            </div>
          );
        })}
        <div className="bg-bg2 aspect-square hover:bg-bg3 hover:text-text1 cursor-pointer h-btn-sm rounded flexer">
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
    <div className="relative">
      <div className="flex items-center gap-padding-sm items-center text-xs font-semibold">
        {metas.map((m, i) => {
          const isOpen = open === m.label;
          return (
            <div
              className={`border ${
                isOpen
                  ? "bg-bg4 border-border-hover"
                  : "border-border hover:border-border-hover"
              } rounded-btn pl-padding-sm pr-padding-xs h-btn-md cursor-pointer group items-center flex`}
              key={i}
              onClick={() => setOpen(() => (isOpen ? null : m.label))}
            >
              <span>{m.label}</span>
              <div className="mx-2 text-text2">{m.value}</div>
              {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </div>
          );
        })}
        <div className="h-btn-md cursor-pointer rounded-btn gap-padding-xs ml-auto flexer text-text2 hover:text-text1">
          <SquarePen size={14} />
          <span>Edit</span>
        </div>
      </div>
      {open && (
        <div className="z-50 bg-bg1 border border-border rounded-btn p-padding-xs mt-padding-xs absolute top-full left-0 w-full">
          {open === metas[1].label && <Fonti setShowModal={setShowModal} />}
          {open === metas[0].label && <Tags />}
        </div>
      )}
    </div>
  );
}
