import { Calendar, Folder, Star } from "lucide-react";
import { documentTitle } from "./utils";

export default function Title() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2 mb-3 justify-between">
        <div className="text-2xl">🇴🇲</div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-xl leading-[1.25] font-bold">{documentTitle}</h1>
        <p className="max-w-4xl leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo velit
          cupiditate, fugit accusamus ipsam temporibus rerum.
        </p>
        {/* <div className="flex mt-4 text-xs items-center gap-8 font-semibold text-text2">
          <div className="flex items-center gap-1.5">
            <Folder size={14} />
            <span>Docsity AI</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar size={14} />
            <span>23/5/2025</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Star size={14} />
            <span>6.5 (456)</span>
          </div>
        </div> */}
      </div>
    </div>
  );
}
