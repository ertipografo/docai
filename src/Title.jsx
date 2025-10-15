import { documentTitle } from "./utils";
import Rating from "./Rating";
/* import Fonti from "./Fonti";
import { Folder } from "lucide-react"; */

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
              className="rounded-full flexer bg-bg2 h-btn-sm px-padding-sm"
            >
              {tag}
            </div>
          );
        })}
        <div className="bg-bg2 px-padding-sm h-btn-sm rounded-full flexer">
          +
        </div>
      </div>
    </div>
  );
};

export default function Title({ noteType, setShowModal }) {
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
    <div className="flex items-center gap-padding-sm font-semibold bg-bg4 p-padding-sm rounded-btn">
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
        {/*   <div className="bg-action-tertiary text-text2 px-padding-sm rounded-full font-semibold h-btn-sm flexer">
              Docsity
            </div> */}
        <div className="flexer ml-auto">
          <Rating />
        </div>
      </div>
      <div className="flex flex-col pt-padding-sm">
        <h1 className="text-lg leading-tight font-bold mb-padding-sm">
          {documentTitle}
        </h1>
        <p className="max-w-4xl leading-relaxed">
          NUOVO PANIERE 2025 CLIL Ecampus INGLESE 8 Ottobre 2024 didattica
          insegnamento CLIL 2, Esercizi di Didattica generale e speciale
        </p>
        <div className="flex flex-col gap-padding-sm mt-padding-sm">
          <Tags />
        </div>
      </div>
    </div>
  );
}
