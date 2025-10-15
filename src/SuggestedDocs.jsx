import { Star, FileText, Calendar, ChevronDown } from "lucide-react";
import { features, getRandomArbitrary, titles } from "./utils";
import { useState } from "react";

const categories = [
  { label: "preferiti", Icon: Star },
  { label: "visti di recente", Icon: Calendar },
  { label: "suggeriti", Icon: FileText },
];

export default function SuggestedDocs() {
  const [cur, setCur] = useState(categories[0].label);
  const [show, setShow] = useState(true);

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <div className="flex flex-col">
        {show && (
          <>
            <div className="flex justify-between text-text2 items-center p-paddingSm ml-1 pb-0">
              <span className="font-semibold capitalize h-buttonHeight flex items-center">
                {cur}
              </span>
              {/* <div
                onClick={() => setShow(!show)}
                className="hover:bg-bg2 cursor-pointer w-buttonHeight h-buttonHeight rounded-button flexer"
              >
                <ChevronDown size={16} />
              </div> */}
            </div>

            <div className="overflow-auto flex flex-col gap-paddingSm">
              {Array.from({ length: 2 }).map((_, index) => {
                const randomAvailableFeatures = getRandomArbitrary(0, 3);
                return (
                  <div
                    key={index}
                    className={`cursor-pointer group flex items-center px-paddingSm rounded-button`}
                  >
                    <div className="flex flex-col gap-paddingSm flex-1">
                      <span className="font-semibold">{titles[index]}</span>
                      <div className="flex items-center gap-paddingSm">
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
          </>
        )}
      </div>
      <div className="mt-auto flexer gap-paddingSm">
        {categories.map((r) => {
          return (
            <div
              key={r.label}
              onClick={() => setCur(r.label)}
              className={`${
                cur === r.label
                  ? "bg-bg2"
                  : "text-text2 hover:text-text1 hover:bg-bg2"
              } h-buttonHeightSm w-buttonHeightSm flexer rounded-button cursor-pointer`}
            >
              <r.Icon size={16} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
