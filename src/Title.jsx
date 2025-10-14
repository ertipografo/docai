import { ChevronRight } from "lucide-react";
import { documentTitle } from "./utils";
import Rating from "./Rating";

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
    <div className="flex items-start mt-2 lg:mt-5">
      <div className="mr-2 font-semibold">Tags:</div>
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
    <div className="flex flex-col max-w-documentWidth mx-auto w-full gap-2 px-5">
      <div className="gap-2 flex h-buttonHeight text-xs items-center">
        <div className="h-6 bg-violet-100 text-violet-400 px-2 rounded font-semibold flexer">
          Nota
        </div>
        <div className="bg-bg3 text-text2 px-2 rounded font-semibold h-6 flexer">
          Docsity
        </div>
        <div className="flexer ml-auto">
          <Rating />
        </div>
      </div>
      <h1 className="text-lg leading-[1.4] font-bold">{documentTitle}</h1>
      <p className="max-w-4xl leading-relaxed">
        NUOVO PANIERE 2025 CLIL Ecampus INGLESE 8 Ottobre 2024 didattica
        insegnamento CLIL 2, Esercizi di Didattica generale e speciale
      </p>
      <div className="flex flex-col gap-1 text-action1">
        <div>Università telematica eCampus (UNIECAMPUS)</div>
        <div>Didattica generale e speciale</div>
      </div>
    </div>
  );
}
