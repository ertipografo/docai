import { Folder, ChevronDown, FileStack, FilePenLine } from "lucide-react";
import { documentTitle } from "./utils";

export default function Title() {
  return (
    <div className="flex flex-col max-w-xl px-5 lg:px-8 pb-5 lg:pb-8">
      <div className="flex items-center justify-between h-headerHeight my-0 lg:mt-3">
        <div className="text-2xl">🇴🇲</div>
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
        <div className="flex mt-2 text-xs items-center gap-5 text-text1 font-semibold">
          <div className="flex items-center gap-1.5">
            <Folder size={14} />
            <span>Docsity AI</span>
          </div>
          <div className="flex items-center gap-1.5">
            <FileStack size={14} />
            <span>Fonti</span>
            <div className="flexer h-5 w-5 bg-bg2 rounded">4</div>
            <ChevronDown size={14} />
          </div>
          <div className="text-text2 ml-auto">
            <div className="px-2 gap-2 h-6 flexer bg-bg2 rounded">
              <FilePenLine size={14} />
              <span>Edit</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
