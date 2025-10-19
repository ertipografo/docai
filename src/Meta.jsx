import { SquarePen, ChevronDown, ChevronUp, Folder } from "lucide-react";
import Fonti from "./Fonti";
import Rating from "./Rating";
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

function NoteMeta({ setShowModal }) {
  const [open, setOpen] = useState(null);
  const metas = [{ label: "Fonti", value: 4 }];

  return (
    <div className="flex flex-col gap-padding-md">
      <Tags />
      <div className="flex items-center gap-padding-sm items-center text-xs font-semibold">
        {metas.map((m, i) => {
          const isOpen = open === m.label;
          return (
            <div
              className={`bg-action-secondary ${
                isOpen ? "" : "text-text2 hover:text-text1"
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
        <div className="h-btn-md hover:bg-action-secondary px-padding-sm cursor-pointer rounded gap-padding-xs ml-auto flexer text-text2 hover:text-text1">
          <SquarePen size={14} />
          <span>Modifica</span>
        </div>
      </div>
      {open && (
        <div className="border border-border rounded-btn p-padding-xs -mt-padding-sm">
          {open === metas[0].label && <Fonti setShowModal={setShowModal} />}
        </div>
      )}
    </div>
  );
}

const Author = () => {
  return (
    <div className="flex items-center gap-padding-sm font-semibold mt-padding-sm">
      <div className="bg-bg2 h-btn w-btn rounded" />
      <div className="flex flex-col gap-px flex-1">
        <div>Carmela Dangelo 🇰🇲 </div>
        <div className="flex items-center gap-padding-xs text-xs">
          <span className="text-text2">23 Documenti</span>
          <Rating />
        </div>
      </div>
    </div>
  );
};

const Categories = () => {
  const folders = [
    "2024 / 2025",
    "Università telematica eCampus (UNIECAMPUS)",
    "Didattica generale e speciale",
  ];

  return (
    <div className="flex flex-col gap-padding-xs text-xs text-action-primary">
      {folders.map((f, k) => (
        <div key={k} className="flex gap-padding-sm font-semibold items-start">
          <div>
            <Folder
              size={14}
              className="fill-action-primary text-transparent"
            />
          </div>
          <span>{f}</span>
        </div>
      ))}
    </div>
  );
};

export default function Meta({ setShowModal, noteType }) {
  return noteType === "note" ? (
    <NoteMeta setShowModal={setShowModal} />
  ) : (
    <div className="flex flex-col gap-padding-md">
      <Categories />
      <Author />
    </div>
  );
}

const DocDetails = () => {
  return <div>ciao</div>;
};
