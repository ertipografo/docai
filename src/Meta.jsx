import { SquarePen, ChevronDown, BookUp2 } from "lucide-react";
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
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col gap-padding-sm">
      {/*   <div className="flex flex-col gap-padding-sm">
        <div className="flex items-center justify-between">
          <div
            onClick={() => setShow((s) => !s)}
            className="font-semibold bg-bg4 rounded-btn overflow-hidden flex items-center h-btn cursor-pointer gap-padding-xs px-padding-sm"
          >
            <BookUp2 size={16} />
            <span className="ml-padding-xs">Fonti</span>
            <div className="h-6 w-6 text-text2 flexer bg-bg1 rounded-btn">
              4
            </div>
            <ChevronDown size={14} className="ml-auto" />
          </div>
          <div className="text-xs font-semibold h-btn-md cursor-pointer rounded-btn gap-padding-xs ml-auto flexer text-text2 hover:text-text1">
            <SquarePen size={14} />
            <span>Edit</span>
          </div>
        </div>
        {show && <Fonti setShowModal={setShowModal} />}
      </div> */}
      <Tags />
    </div>
  );
}
