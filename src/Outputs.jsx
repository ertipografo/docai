import { Star, FileText, FolderUp, ChevronDown } from "lucide-react";
import { features } from "./utils";
export default function Outputs() {
  const sections = [Star, FileText];
  const exampleFeature = features[1];

  const outputs = [
    { f: features[1], size: "Riassunto Argomento primo" },
    { f: features[2], size: "Mappa primo argomento" },
  ];

  return (
    <div className="flex flex-col gap-1.5">
      <div className="rounded-panel p-2 border border-borderColor gap-2 flex flex-col">
        {outputs.map(({ f, size }, k) => {
          return (
            <div key={k}>
              <div className="flex items-center gap-5 px-3 py-1 hover:bg-bg2 rounded-button">
                <f.Icon size={16} />
                <div className="flex flex-col">
                  <span className="text-text2 capitalize text-xs">
                    {f.value}
                  </span>
                  <div className="font-semibold">{size}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="bg-gray-800 text-gray-100 rounded-panel p-3">
        <div className="flex items-center gap-3">
          <div className="flex-1 h-buttonHeight gap-2 px-2 rounded-button bg-gray-700/50 border border-gray-600 flex items-center">
            <exampleFeature.Icon size={16} />
            <span className="capitalize">{exampleFeature.value}</span>
            <ChevronDown size={16} className="opacity-50 ml-auto" />
          </div>
          <div className="max-w-32 flex-1 h-buttonHeight px-2 rounded-button bg-gray-700/50 border border-gray-600 flex items-center">
            Qui uno
          </div>
        </div>
      </div>
    </div>
  );
}
