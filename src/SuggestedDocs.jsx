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
    <div className="flex flex-col">
      {show && (
        <>
          <div className="flex justify-between items-center bg-bg1 pt-6 px-6">
            <span className="font-semibold text-text2 capitalize">{`${cur}`}</span>
            <div
              onClick={() => setShow(!show)}
              className="hover:bg-action3 cursor-pointer w-buttonHeight h-buttonHeight rounded-button flexer"
            >
              <ChevronDown size={16} />
            </div>
          </div>

          <div className="overflow-auto bg-bg1">
            <div className="flex flex-col">
              <div className="flex flex-col gap-1 p-3 pt-0">
                {Array.from({ length: 5 }).map((_, index) => {
                  const randomAvailableFeatures = getRandomArbitrary(0, 3);
                  return (
                    <div
                      key={index}
                      className={`cursor-pointer group flex items-center ${
                        index === 3 ? "bg-bg2" : "hover:bg-bg2"
                      } p-3 rounded`}
                    >
                      <div className="flex flex-col gap-2 flex-1">
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
        </>
      )}
      <div className="flexer gap-4 h-headerHeight">
        {categories.map((f) => {
          const { label, Icon } = f;
          return (
            <div
              key={label}
              onClick={() => {
                setCur(label);
                setShow(true);
              }}
              className={`h-buttonHeight w-buttonHeight flexer rounded-button cursor-pointer ${
                show && cur === label
                  ? "bg-bg1"
                  : "text-text2 hover:bg-bg1 hover:text-text1"
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
