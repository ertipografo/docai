import { PanelRightOpen } from "lucide-react";
import { documentTitle } from "./utils";

export default function Title({ setShow }) {
  return (
    <div className="flex flex-col max-w-xl px-3 lg:px-8 pb-3 lg:pb-8">
      <div className="flex items-center justify-between h-headerHeight my-0 lg:mt-3">
        <div className="text-2xl">🇴🇲</div>
        <div
          className="hidden text-text3 lg:flex hover:text-text2 hover:bg-action3 cursor-pointer w-buttonHeight h-buttonHeight items-center justify-center rounded"
          onClick={() => setShow(false)}
        >
          <PanelRightOpen size={18} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-lg leading-[1.25] font-bold">{documentTitle}</h1>
        <p className="max-w-4xl leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adi pisicing elit. Illo velit
          cupiditate, fugit accus amus ipsam temporibus rerum.
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
