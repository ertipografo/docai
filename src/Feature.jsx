import { LoaderCircle } from "lucide-react";
const Page = () => {
  return (
    <div className="bg-bg1 p-10 pb-24 flex flex-col gap-1 rounded-panel">
      <span className="text-2xl font-bold mb-3">Titolo pagina</span>
      <span className="text-lg font-semibold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </span>
      <p className="text-[14px] leading-[1.8] opacity-80">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
        cupiditate aperiam? Quibusdam dolor atque dignissimos minus, aspernatur,
        accusamus itaque tempora molestiae nam iusto, amet nostrum fuga
        consequuntur placeat beatae. Impedit? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Iste, cupiditate aperiam? Quibusdam dolor
        atque dignissimos minus, aspernatur, accusamus itaque tempora molestiae
        nam iusto, amet nostrum fuga consequuntur placeat beatae ipsum dolor sit
        amet consectetur adipisicing elit. Iste, cupiditate aperiam? Quibusdam
        dolor atque dignissimos minus, aspernatur, accusamus itaque tempora
        molestiae nam iusto, amet nostrum fuga consequuntur placeat beatae.
        Impedit?
      </p>
      <div className="rounded-button bg-bg2 h-40 my-6" />
      <span className="text-lg font-semibold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </span>
      <p className="text-[14px] leading-[1.8] opacity-80">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
        cupiditate aperiam? Quibusdam dolor atque dignissimos minus, aspernatur,
        accusamus itaque tempora molestiae nam iusto, amet nostrum fuga
        consequuntur placeat beatae. Impedit? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Iste, cupiditate aperiam? Quibusdam dolor
        atque dignissimos minus, aspernatur, accusamus itaque tempora molestiae
        nam iusto, amet nostrum fuga consequuntur placeat beatae ipsum dolor sit
        amet consectetur adipisicing elit. Iste, cupiditate aperiam? Quibusdam
        dolor atque dignissimos minus, aspernatur, accusamus itaque tempora
        molestiae nam iusto, amet nostrum fuga consequuntur placeat beatae.
        Impedit?
      </p>
      <div className="flex my-6 gap-6">
        <div className="flex-1">
          <p className="text-[14px] leading-[1.8] opacity-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
            cupiditate aperiam? Quibusdam dolor atque dignissimos minus,
            aspernatur, accusamus itaque tempora molestiae nam iusto, amet
            nostrum fuga consequuntur placeat beatae. Impedit? Lorem ipsum dolor
            sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex-1">
          <p className="text-[14px] leading-[1.8] opacity-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
            cupiditate aperiam? Quibusdam dolor atque dignissimos minus,
            aspernatur, accusamus itaque tempora molestiae nam iusto, amet
            nostrum fuga consequuntur placeat beatae. Impedit? Lorem ipsum dolor
            sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="rounded-button bg-bg2 h-60 my-6" />
      <p className="text-[14px] leading-[1.8] opacity-80">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
        cupiditate aperiam? Quibusdam dolor atque dignissimos minus, aspernatur,
        accusamus itaque tempora molestiae nam iusto, amet nostrum fuga
        consequuntur placeat beatae.
      </p>
    </div>
  );
};

export default function Feature({ feature, isLoading }) {
  const loadingContents = (
    <div className="w-sm rounded-panel gap-3 flex flex-col bg-bg1 p-3 items-center">
      <div className="animate-spin w-buttonHeight h-buttonHeight flexer">
        <LoaderCircle size={16} />
      </div>
      <div className="font-semibold text-center">
        Stiamo preparando la tua feature, torna fra na quarantacinquina di
        minuti
      </div>
      <div className="rounded-button overflow-hidden h-2 w-full bg-bg3">
        <div className="w-1/3 bg-violet-400 h-full" />
      </div>
    </div>
  );
  const isMap = feature === "mappa";

  return isLoading ? (
    <div className="bg-bg1 flexer rounded-t-panel mb-3 rounded-b-panel flex-1 p-8">
      {loadingContents}
    </div>
  ) : isMap ? (
    <div className="bg-bg1 polka mb-3 rounded-b-panel flex-1 p-8">
      {isMap ? <div>{feature}</div> : loadingContents}
    </div>
  ) : (
    <div className="py-3 flex flex-col gap-10 rounded-b-panel flex-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Page key={i} />
      ))}
      <Page />
    </div>
  );
}
