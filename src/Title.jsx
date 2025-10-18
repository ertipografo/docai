import { documentTitle } from "./utils";
import Rating from "./Rating";
import Meta from "./Meta";
/* import Fonti from "./Fonti";
import { Folder } from "lucide-react"; */

export default function Title({ noteType }) {
  /*   const folders = [
    "Università telematica eCampus (UNIECAMPUS)",
    "Didattica generale e speciale",
  ];

  const categories = (
    <div className="flex flex-col gap-padding-xs text-text2">
      {folders.map((f, k) => (
        <div key={k} className="flex gap-padding-sm font-semibold items-start">
          <div className="pt-[2.5px]">
            <Folder
              size={14}
              className="fill-action-secondary text-action-secondary"
            />
          </div>
          <span>{f}</span>
        </div>
      ))}
    </div>
  ); */

  /*   const author = (
    <div className="flex items-center gap-padding-sm font-semibold p-padding-sm rounded-btn">
       <div className="bg-bg2 h-btn w-btn rounded-full" />
      <div className="flex flex-col gap-px flex-1">
        <div>Carmela Dangelo 🇰🇲 </div>
        <div className="flex items-center gap-padding-xs text-xs">
          <span className="text-text2">23 Documenti</span>
          <Rating />
        </div>
      </div>
    </div>
  ); */

  return (
    <div className="flex flex-col max-w-document mx-auto w-full">
      <div className="gap-padding-xs flex text-xs items-center">
        <div
          className={`${
            noteType === "note"
              ? "bg-action-note/10 text-action-note"
              : "bg-action-primary/10 text-action-primary"
          } capitalize h-btn-sm px-padding-xs rounded font-semibold flexer`}
        >
          {noteType}
        </div>

        <div className="flexer ml-auto">
          <Rating />
        </div>
      </div>
      <div className="flex flex-col pt-padding-sm">
        <h1 className="text-lg leading-tight font-bold mb-padding-sm">
          {documentTitle}
        </h1>
        <p className="max-w-4xl leading-relaxed r">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus,
          quidem maxime distinctio dicta at nihil suscipit...
        </p>
      </div>
    </div>
  );
}
