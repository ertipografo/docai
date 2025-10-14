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
  const [show, setShow] = useState(false);

  return (
    <div className="mt-auto h-headerHeight px-10 flex items-center justify-between">
      <div className="flex gap-2">
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
                  ? "bg-bgDark2"
                  : "text-text2 hover:bg-bgDark2"
              }`}
            >
              <Icon size={16} />
            </div>
          );
        })}
      </div>
      <div className="w-buttonHeight h-buttonHeight bg-bgDark2 rounded-button flexer">
        C
      </div>
    </div>
  );
  return (
    <div className="mt-auto text-textOnDark rounded-panel overflow-hidden m-3 hidden lg:block">
      <div className="flex flex-col">
        {show && (
          <>
            <div className="flex justify-between text-text2 items-center p-2 ml-1 pb-0">
              <span className="font-semibold capitalize ">{`${cur}`}</span>
              <div
                onClick={() => setShow(!show)}
                className="hover:bg-bgDark2 cursor-pointer w-buttonHeight h-buttonHeight rounded-button flexer"
              >
                <ChevronDown size={16} />
              </div>
            </div>

            <div className="overflow-auto flex flex-col py-1 gap-1">
              {Array.from({ length: 3 }).map((_, index) => {
                const randomAvailableFeatures = getRandomArbitrary(0, 3);
                return (
                  <div
                    key={index}
                    className={`cursor-pointer group flex items-center ${
                      index === 1 ? "bg-bgDark2" : "hover:bg-bgDark2"
                    } p-3 rounded-button`}
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
          </>
        )}
        <div className="flexer gap-4 h-buttonHeight rounded-panel"></div>
      </div>
    </div>
  );
}
