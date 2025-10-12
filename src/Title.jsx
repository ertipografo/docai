import { Folder, ChevronDown, FileStack, FilePenLine } from "lucide-react";
import { documentTitle } from "./utils";

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
    <div className="flex items-start mt-3">
      <div className="mr-2">Tags:</div>
      <div className="items-center flex-1 flex gap-1.5 flex-wrap">
        {tags.map((tag, i) => {
          return (
            <div key={i} className="rounded bg-bg3 text-xs py-[2px] px-2">
              {tag}
            </div>
          );
        })}
        <div className="bg-bgDark text-textOnDark w-5 rounded flexer">+</div>
      </div>
    </div>
  );
};

export default function Title({ setShowModal }) {
  return (
    <div className="flex flex-col px-5 lg:px-8 pb-5 lg:pb-8 pt-5 lg:pt-0 max-w-documentWidth mx-auto w-full">
      <div className="hidden sm:flex items-center justify-between h-headerHeight">
        <div className="text-2xl h-buttonHeight w-buttonHeight rounded-button">
          🇴🇲
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-lg leading-[1.25] font-bold">
          <span className="inline mr-1 sm:hidden">🇴🇲</span> {documentTitle}
        </h1>
        <p className="max-w-4xl leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adi pisicing elit. Illo velit
          cupiditate, fugit accus amus ipsam temporibus rerum.
        </p>
        <div className="flex mt-2 text-xs items-center gap-3 text-text1 font-semibold lg:-mx-2">
          <div className="flex items-center gap-1.5 h-buttonHeightSm bg-bg3 px-2 rounded-button">
            <Folder size={14} />
            <span>Docsity AI</span>
          </div>
          <div
            onClick={() => setShowModal((s) => !s)}
            className="flex items-center gap-1.5 h-buttonHeightSm hover:bg-bg1 px-2 rounded-button cursor-pointer"
          >
            <FileStack size={14} />
            <span>Fonti</span>
            <div className="flexer h-5 w-5 bg-bg3 rounded">4</div>
          </div>
          <div className="gap-1.5 ml-auto flex items-center text-text2 h-buttonHeightSm hover:bg-bg1 px-2 rounded-button cursor-pointer">
            <FilePenLine size={14} />
            <span>Edit</span>
          </div>
        </div>
        <Tags />
      </div>
    </div>
  );
}
