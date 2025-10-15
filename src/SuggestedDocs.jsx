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
    <div className="hidden lg:flex flex-col overflow-hidden mt-auto px-padding-lg">
      <div className="flex flex-col">
        {show && (
          <>
            <div className="flex justify-between text-text2 items-center">
              <span className="font-semibold capitalize h-btn flex items-center">
                {cur}
              </span>
              <div
                onClick={() => setShow(!show)}
                className="hover:bg-bg2 cursor-pointer w-btn h-btn rounded-btn flexer"
              >
                <ChevronDown size={16} />
              </div>
            </div>

            <div className="overflow-auto flex flex-col gap-padding-sm py-padding-sm">
              {Array.from({ length: 5 }).map((_, index) => {
                const randomAvailableFeatures = getRandomArbitrary(0, 3);
                return (
                  <div
                    key={index}
                    className={`cursor-pointer group flex items-center`}
                  >
                    <div className="flex flex-col gap-padding-xs flex-1">
                      <span className="font-semibold">{titles[index]}</span>
                      <div className="flex items-center gap-padding-sm">
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
      <div className="flexer h-header gap-padding-sm">
        {categories.map((r) => {
          return (
            <div
              key={r.label}
              onClick={() => {
                setCur(r.label);
                setShow(true);
              }}
              className={`${
                show && cur === r.label
                  ? "bg-bg2"
                  : "text-text2 hover:text-text1 hover:bg-bg2"
              } h-btn w-btn flexer rounded-btn cursor-pointer`}
            >
              <r.Icon size={16} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
