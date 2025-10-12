import {
  Folder,
  ChevronDown,
  FileStack,
  SquarePen,
  ChevronRight,
} from "lucide-react";
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

export default function Title() {
  return (
    <div className="flex flex-col px-5 lg:px-8 pb-5 lg:pb-8 max-w-documentWidth mx-auto w-full">
      {/*  <div className="hidden sm:flex items-center justify-between h-headerHeight">
        <div className="text-2xl h-buttonHeight w-buttonHeight rounded-button">
          🇴🇲
        </div>
      </div> */}

      <div className="flex flex-col gap-2 mt-3">
        <div>
          <div className="float-left h-[28px] flex items-center">
            <div className="bg-bg3 px-3 rounded-button font-semibold h-full flexer">
              Nota
            </div>
            <div className="h-full px-1 flexer">
              <ChevronRight size={16} />
            </div>
          </div>
          <h1 className="text-[20px] leading-[28px] font-bold">
            {documentTitle}
          </h1>
        </div>
        <p className="max-w-4xl leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adi pisicing elit. Illo velit
          cupiditate, fugit accus amus ipsam temporibus rerum.
        </p>
        {/* <div className="flex mt-2 text-xs items-center gap-3 text-text1 font-semibold lg:-mx-2">
       
          <div className="gap-1.5 ml-auto flex items-center text-text2 h-buttonHeightSm hover:bg-bg1 px-2 rounded-button cursor-pointer">
            <SquarePen size={14} />
          </div>
        </div> */}
        <Tags />
      </div>
    </div>
  );
}
