import { Star } from "lucide-react";
import { categories, getRandomArbitrary, titles, features } from "./utils";
import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";

export default function SuggestedDocs() {
  const [cur, setCur] = useState(categories[0].label);
  const [show, setShow] = useState(true);

  return (
    <div className="flex-1 hidden lg:flex flex-col overflow-hidden mt-auto max-h-[500px]">
      <div className="flex-1 overflow-auto">
        <PerfectScrollbar>
          <div className="flex flex-col px-padding-md">
            <span className="z-30 bg-bg1 sticky top-0 h-btn flex items-center font-semibold text-xs text-text2">{`Documenti ${cur}`}</span>
            {Array.from({ length: 10 }).map((_, i) => {
              return (
                <div
                  key={i}
                  className="rounded-btn bg-bg2/50 hover:bg-bg2 cursor-pointer p-padding-sm mb-padding-xs text-xs flex flex-col gap-padding-sm"
                >
                  <div>{titles[getRandomArbitrary(0, titles.length - 1)]}</div>
                  <div className="flex items-center gap-padding-sm justify-between">
                    <div className="flex gap-padding-xs items-center">
                      {cur === "preferiti" && (
                        <Star
                          size={14}
                          className="fill-text2/50 text-transparent"
                        />
                      )}
                      <div
                        className={`${
                          i % 3 === 0
                            ? "bg-action-note/10 text-action-note"
                            : "bg-action-primary/10 text-action-primary"
                        } h-btn-sm px-padding-xs rounded flexer`}
                      >
                        {i % 3 === 0 ? "Note" : "Doc"}
                      </div>
                      <div className="flex leading-1 text-text2 items-center gap-padding-sm">
                        23/5/2025
                      </div>
                    </div>
                    <div className="flex items-center gap-padding-sm">
                      {features.map((f, i) => {
                        const { value, Icon } = f;
                        return (
                          <div
                            key={value}
                            className={`${
                              i <= getRandomArbitrary(0, 4)
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
        </PerfectScrollbar>
      </div>
      <div className="h-header flexer gap-padding-sm">
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
                  ? "bg-action-secondary"
                  : "text-text2 hover:text-text1 hover:bg-action-secondary"
              } h-btn w-btn flexer rounded-btn cursor-pointer`}
            >
              <r.Icon size={14} />
            </div>
          );
        })}
      </div>
    </div>
  );

  /*  return (
    <div className="hidden lg:flex flex-col overflow-hidden mt-auto border-t border-border px-padding-lg">
      <div className="flex flex-col">
        {show && (
          <>
            <div className="flex justify-between text-text2 items-center pt-padding-sm">
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
                      <span className="font-semibold group-hover:underline">
                        {titles[index]}
                      </span>
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
                  ? "bg-action-secondary"
                  : "text-text2 hover:text-text1 hover:bg-action-secondary"
              } h-btn w-btn flexer rounded-btn cursor-pointer`}
            >
              <r.Icon size={16} />
            </div>
          );
        })}
      </div>
    </div>
  ); */
}
