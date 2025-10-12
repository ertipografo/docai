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

export default function Feature({ feature }) {
  return feature === "mappa" ? (
    <div className="bg-bg1 mb-3 rounded-b-panel flex-1 p-8 polka">Mappa</div>
  ) : (
    <div className="py-3 flex flex-col gap-10 rounded-b-panel flex-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Page key={i} />
      ))}
      <Page />
    </div>
  );
}
