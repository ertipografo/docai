import { documentTitle } from "./utils";
import Rating from "./Rating";

/* const Tags = () => {
  const tags = [
    "prima",
    "seconda",
    "terza",
    "quarto tag",
    "2025",
    "ultimissima giuro",
  ];
  return (
    <div className="flex items-start mt-padding-sm lg:mt-5">
      <div className="mr-padding-sm font-semibold">Tags:</div>
      <div className="items-center flex-1 flex gap-1.5 flex-wrap">
        {tags.map((tag, i) => {
          return (
            <div
              key={i}
              className="rounded bg-bg3 text-xs py-[2px] px-padding-sm"
            >
              {tag}
            </div>
          );
        })}
        <div className="bg-bg-dark text-text-dark w-5 rounded flexer">+</div>
      </div>
    </div>
  );
};
 */
export default function Title() {
  return (
    <div className="flex flex-col max-w-document mx-auto w-full gap-padding-sm p-padding-lg pt-0">
      <div className="gap-padding-sm flex h-btn text-xs items-center">
        <div className="h-btn-sm bg-action-primary/10 text-action-primary px-padding-sm rounded font-semibold flexer">
          Nota
        </div>
        <div className="bg-bg3 text-text2 px-padding-sm rounded font-semibold h-btn-sm flexer">
          Docsity
        </div>
        <div className="flexer ml-auto">
          <Rating />
        </div>
      </div>
      <h1 className="text-lg leading-tight font-bold">{documentTitle}</h1>
      <p className="max-w-4xl leading-relaxed">
        NUOVO PANIERE 2025 CLIL Ecampus INGLESE 8 Ottobre 2024 didattica
        insegnamento CLIL 2, Esercizi di Didattica generale e speciale
      </p>
      <div className="flex flex-col gap-1 text-action-primary">
        <div>Università telematica eCampus (UNIECAMPUS)</div>
        <div>Didattica generale e speciale</div>
      </div>
    </div>
  );
}
