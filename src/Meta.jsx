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
              className="rounded flexer border border-border hover:border-border-hover hover:text-text1 cursor-pointer h-btn-sm px-padding-sm"
            >
              {tag}
            </div>
          );
        })}
        <div className="aspect-square border border-border hover:border-border-hover hover:text-text1 cursor-pointer h-btn-sm rounded flexer">
          +
        </div>
      </div>
    </div>
  );
};

export default function Meta({ setShowModal }) {
  const [open, setOpen] = useState(null);
  const metas = [
    //   { label: "Tag", value: 6 },
    { label: "Fonti", value: 4 },
  ];

  return (
    <div className="flex flex-col gap-padding-md">
      <Tags />
      <div className="flex items-center gap-padding-sm items-center text-xs font-semibold">
        {metas.map((m, i) => {
          const isOpen = open === m.label;
          return (
            <div
              className={`border border-border ${
                isOpen
                  ? ""
                  : "text-text2 hover:text-text1 border-border hover:border-border-hover"
              } rounded pl-padding-sm pr-padding-xs h-btn-md cursor-pointer group items-center flex`}
              key={i}
              onClick={() => setOpen(() => (isOpen ? null : m.label))}
            >
              <span>{m.label}</span>
              <div className="mx-2">{m.value}</div>
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
        <div className="border border-border rounded-btn p-padding-xs -mt-padding-sm">
          {open === metas[0].label && <Fonti setShowModal={setShowModal} />}
          {/*  {open === metas[0].label && <Tags />} */}
        </div>
      )}
    </div>
  );
}
