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
    <div className="bg-bg1 flex flex-col justify-between">
      <div className="p-3 overflow-auto">
        <div className="flex flex-col gap-4">
          <span className="minititle">{`Lista ${cur}`}</span>
          <div className="flex flex-col gap-4">
            {Array.from({ length: 5 }).map((_, index) => {
              const randomAvailableFeatures = getRandomArbitrary(0, 3);
              return (
                <div
                  key={index}
                  className="cursor-pointer group flex items-center"
                >
                  <div className="flex flex-col gap-1 flex-1 text-xs">
                    <span className="font-semibold">{titles[index]}</span>
                    <div className="flex items-center gap-1">
                      {features.map(({ value, Icon }, i) => {
                        return (
                          <div
                            key={value}
                            className={`p-[2px] ${
                              i <= randomAvailableFeatures
                                ? "text-current"
                                : "text-text2"
                            }`}
                          >
                            <Icon size={14} />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="w-8 h-8 opacity-0 transition-opacity group-hover:opacity-100 flexer">
                    <ChevronRight size={16} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="border-t border-borderColor flexer gap-4 h-12">
        {categories.map(({ label, Icon }) => {
          return (
            <div
              key={label}
              onClick={() => setCur(label)}
              className={`p-2 rounded-md cursor-pointer ${
                cur === label ? "bg-bg2" : "text-text2 hover:text-text1"
              }`}
            >
              <Icon size={14} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
