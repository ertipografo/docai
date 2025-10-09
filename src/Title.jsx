import { PanelRightOpen } from "lucide-react";
import { documentTitle } from "./utils";

export default function Title({ setShow }) {
  return (
    <div className="flex flex-col px-2 lg:px-0 max-w-xl">
      <div className="flex items-center justify-between h-headerHeight">
        <div className="text-2xl">🇴🇲</div>
        <div
          className="hidden lg:flex hover:bg-bg3 hover:text-text1 cursor-pointer w-buttonHeight h-buttonHeight items-center justify-center rounded text-text3"
          onClick={() => setShow(false)}
        >
          <PanelRightOpen size={18} />
        </div>
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
