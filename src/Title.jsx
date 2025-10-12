import { Folder, ChevronDown, FileStack, FilePenLine } from "lucide-react";
import { documentTitle } from "./utils";

export default function Title({ setShowModal }) {
  return (
    <div className="flex flex-col px-5 lg:px-8 pb-5 lg:pb-8 max-w-documentWidth mx-auto w-full">
      <div className="flex items-center justify-between h-headerHeight">
        <div className="text-2xl h-buttonHeight w-buttonHeight rounded-button">
          🇴🇲
        </div>
        {/* <div className="flex items-center gap-1.5 text-xs text-text2">
          <Calendar size={14} />
          <span>23.5.2025</span>
        </div> */}
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-lg leading-[1.25] font-bold">{documentTitle}</h1>
        <p className="max-w-4xl leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adi pisicing elit. Illo velit
          cupiditate, fugit accus amus ipsam temporibus rerum.
        </p>
        <div className="flex mt-2 text-xs items-center gap-3 text-text1 font-semibold -mx-2 cursor-pointer">
          <div className="flex items-center gap-1.5 h-buttonHeightSm hover:bg-action3 px-2 rounded-button">
            <Folder size={14} />
            <span>Docsity AI</span>
          </div>
          <div
            onClick={() => setShowModal((s) => !s)}
            className="flex items-center gap-1.5 h-buttonHeightSm hover:bg-action3 px-2 rounded-button"
          >
            <FileStack size={14} />
            <span>Fonti</span>
            <div className="flexer h-5 w-5 bg-bg2 rounded">4</div>
            <ChevronDown size={14} />
          </div>
          <div className="gap-1.5 ml-auto flex items-center text-text2 h-buttonHeightSm hover:bg-action3 px-2 rounded-button">
            <FilePenLine size={14} />
            <span>Edit</span>
          </div>
        </div>
      </div>
    </div>
  );
}
