import Logo from "./Logo";

const Section = ({ title, children }) => {
  return (
    <div className="flex flex-col">
      <div className="bg-bg4 z-50 sticky top-0 h-btn flex items-center text-md font-bold">
        {title}
      </div>
      <div className="flex flex-col sm:flex-row flex-wrap sm:gap-padding-lg">
        {children}
      </div>
    </div>
  );
};

const Doc = ({ isMulti, isPremium }) => {
  return (
    <div className="active:top-px relative flex flex-col w-full sm:w-[220px] hover:bg-bg2 rounded-panel cursor-pointer sm:-ml-padding-sm p-padding-sm">
      <div className="relative w-full h-[120px]">
        <div className="absolute h-btn-sm flex bottom-padding-sm right-padding-sm z-40 text-xs items-center font-semibold flex gap-padding-xs">
          {isPremium && (
            <div className="border-amber-400 border h-btn-sm w-btn-sm bg-bg1 rounded-btn"></div>
          )}
          {isMulti && (
            <div className="border-border w-btn-sm h-btn-sm flexer border bg-bg1 rounded-btn">
              3
            </div>
          )}
        </div>
        <div className="border border-border w-full rounded-btn bg-bg1 h-full absolute inset-0 z-30" />
        {isMulti && (
          <>
            <div className="border border-border rounded-btn bg-bg1 h-full absolute inset-1 z-20" />
            <div className="border border-border rounded-btn bg-bg1 h-full absolute inset-2 z-10" />
          </>
        )}
      </div>
      <div className="flex flex-col p-padding-sm gap-1">
        <span className="font-semibold">
          Documento incompleto: Processo termico e fluidodinamica
        </span>
        <span className="text-text2">
          Università degli Studi di Roma Tor Vergata
        </span>
      </div>
    </div>
  );
};

export default function Archive() {
  return (
    <div className="flex flex-col flex-1 px-padding-lg bg-bg4">
      <div className="h-header flex items-center">
        <Logo />
      </div>
      <div className="flex-1 flex flex-col">
        <Section title="Preferiti">
          {Array.from({ length: 10 }).map((_, i) => (
            <Doc idx={i} isPremium={[1, 7, 9].includes(i)} />
          ))}
        </Section>
        <Section title="Suggeriti">
          {Array.from({ length: 10 }).map((_, i) => (
            <Doc isMulti={true} isPremium={[3, 5, 12].includes(i)} idx={i} />
          ))}
        </Section>
        <Section title="Bananas">
          {Array.from({ length: 10 }).map((_, i) => (
            <Doc isMulti={true} isPremium={[2, 4, 10].includes(i)} idx={i} />
          ))}
        </Section>
        <Section title="Quello che te pare">
          {Array.from({ length: 10 }).map((_, i) => (
            <Doc isMulti={true} idx={i} />
          ))}
        </Section>
      </div>
    </div>
  );
}
