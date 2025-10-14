import { Star, FileText, MoveRight, ChevronDown } from "lucide-react";
import { features } from "./utils";

const FeatureCreator = () => {
  const exampleFeature = features[1];
  return (
    <div className="bg-gray-800 text-gray-100 rounded-button flex-1 overflow-hidden p-3 flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <div className="flex-1 h-buttonHeight gap-2 px-2 rounded-button bg-gray-700/50 border border-gray-600 flex items-center">
          <exampleFeature.Icon size={16} />
          <span className="capitalize">{exampleFeature.value}</span>
          <ChevronDown size={16} className="opacity-50 ml-auto" />
        </div>
        <div className="max-w-buttonHeight flex-1 h-buttonHeight px-2 rounded-button bg-gray-700/50 border border-gray-600 flex items-center">
          MD
        </div>
        <div className="h-buttonHeight px-3 rounded-button bg-action1 text-white flexer">
          <MoveRight size={16} />
        </div>
      </div>
    </div>
  );
};
export default function Outputs() {
  const outputs = [
    { f: features[1], size: "Riassunto Argomento primo" },
    { f: features[2], size: "Mappa concettuale olè" },
    { f: features[3], size: "Seconda guerra mondiale" },
    { f: features[2], size: "La situazione spagnola" },
    { f: features[2], size: "Mappa primo argomento" },
  ];

  return (
    <div className="mt-auto bg-bgDark rounded-panel p-2">
      <div className="overflow-hidden flex flex-col bg-bgDark2 rounded-button">
        <div className="text-text2 h-10 flex items-center pl-3">
          Chiedi al documento...
        </div>
        <div className="flex items-center justify-end p-2">
          <div className="text-xs h-7 px-2 rounded text-white flexer bg-action1">
            Chiedi
          </div>
        </div>
      </div>
    </div>
  );

  /* return (
    <div className="mt-auto flex flex-col">
      <div className="rounded-panel p-2 border border-borderColor gap-2 flex flex-col">
        <div className="relative">
          <div className="flex flex-col max-h-[200px] overflow-auto pb-10 relative">
            {outputs.map(({ f, size }, k) => {
              return (
                <div
                  key={k}
                  className="flex items-center gap-5 px-3 py-2 hover:bg-bg2 rounded-button"
                >
                  <f.Icon size={16} />
                  <div className="flex flex-col">
                    <span className="text-text2 capitalize text-xs">
                      {f.value}
                    </span>
                    <div className="font-semibold">{size}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="pointer-events-none absolute bottom-0 bg-gradient-to-t from-bg1 h-10 w-full z-50" />
        </div>
        <FeatureCreator />
      </div>
    </div>
  ); */
}
