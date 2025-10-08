import { Calendar, ChevronDown } from "lucide-react";
import { useState } from "react";
import { documentTitle } from "./utils";
import Fonti from "./Fonti";

export default function Title() {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col pb-paddingUnit">
      <div className="h-headerHeight flex items-center text-2xl">🇴🇲</div>
      <div className="flex flex-col gap-4">
        <h1 className="text-lg leading-snug font-bold">{documentTitle}</h1>
        <p className="max-w-4xl leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo velit
          cupiditate, fugit accusamus ipsam temporibus rerum nisi.
        </p>
        <div className="flex justify-between items-center text-xs mt-2">
          <div className="flex gap-2 items-center font-semibold text-text2">
            <Calendar size={16} />
            <span>Modificato:</span>
            <span className="font-semibold">23.5.2025</span>
          </div>
          <div
            onClick={() => setShow((s) => !s)}
            className="flex gap-2 items-center bg-bg2 cursor-pointer p-2 rounded-md"
          >
            <ChevronDown size={16} className="-mr-1.5" />
            <span>Fonti</span>
            <span className="h-5 flex items-center bg-bg1 aspect-square justify-center rounded">
              4
            </span>
          </div>
        </div>
        {show && <Fonti />}
      </div>
    </div>
  );
}
