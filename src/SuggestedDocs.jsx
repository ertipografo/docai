import { ChevronRight, Star, FileText, Calendar } from "lucide-react";
import { features, getRandomArbitrary, titles } from "./utils";
import { useState } from "react";

const categories = [
  { label: "preferiti", Icon: Star },
  { label: "visti di recente", Icon: Calendar },
  { label: "suggerigi", Icon: FileText },
];

export default function SuggestedDocs() {
  const [cur, setCur] = useState("preferiti");
  return (
    <div className="flex flex-col justify-between">
      <div className="overflow-auto bg-bg1">
        <div className="flex flex-col">
          <div className="flex flex-col gap-1 p-3">
            {Array.from({ length: 5 }).map((_, index) => {
              const randomAvailableFeatures = getRandomArbitrary(0, 3);
              return (
                <div
                  key={index}
                  className={`cursor-pointer group flex items-center ${
                    index === 3 ? "bg-bg2" : "hover:bg-bg2"
                  } p-3 rounded`}
                >
                  <div className="flex flex-col gap-2 flex-1 text-xs">
                    <span className="font-semibold">{titles[index]}</span>
                    <div className="flex items-center gap-3">
                      {features.map((f, i) => {
                        const { value, Icon } = f;
                        return (
                          <div
                            key={value}
                            className={`${
                              i <= randomAvailableFeatures
                                ? "opacity-60"
                                : "opacity-20"
                            }`}
                          >
                            <Icon size={14} />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flexer gap-4 h-headerHeight">
        {categories.map((f) => {
          const { label, Icon } = f;
          return (
            <div
              key={label}
              onClick={() => setCur(label)}
              className={`h-buttonHeight w-buttonHeight flexer rounded-md cursor-pointer ${
                cur === label ? "bg-bg1" : "text-text2 hover:text-text1"
              }`}
            >
              <Icon size={16} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
