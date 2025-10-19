import { Loader, X } from "lucide-react";

import { useState } from "react";
import { features } from "./utils";

export default function BottomBar() {
  const [show, setShow] = useState(false);
  const [val, setVal] = useState("");

  const resource = val
    ? [{ value: "SM" }, { value: "MD" }, { value: "LG" }, { value: "XL" }]
    : features;
  const msg = `p-padding-sm rounded-btn`;

  return (
    <div className="sticky bottom-padding-sm z-[9999999]">
      <div className="p-padding-sm relative bg-gray-800 max-w-2xl mx-auto rounded-panel flex flex-col gap-padding-sm">
        {val && show && (
          <div className="flex flex-col gap-padding-xs">
            <div className="flex justify-end">
              <div className={`${msg} bg-gray-600 text-white`}>{val}</div>
            </div>
            <div className="flex items-center text-gray-500">
              <div className="animate-spin flexer w-btn h-btn">
                <Loader size={16} />
              </div>
              <div className={`${msg} bg-white text-gray-600`}>
                👍 Ok, sto generando la tua richiesta... Dammi qualche secondo
              </div>
            </div>
          </div>
        )}
        <div className="flex flex-col overflow-hidden bg-gray-700/30 border border-gray-600 rounded-btn">
          <div className="flex items-center">
            <input
              className="h-btn outline-none flex-1 text-gray-100 placeholder:text-gray-500 px-padding-sm"
              value={val}
              onChange={(e) => setVal(e.target.value)}
              placeholder="Ciao come posso aiutarti?"
            />
            {!!val && (
              <div
                className="w-btn h-btn cursor-pointer flexer text-gray-500"
                onClick={() => {
                  setVal("");
                  setShow(false);
                }}
              >
                <X size={16} />
              </div>
            )}
          </div>
          <div className="pr-1 pl-padding-sm h-btn flex items-center justify-between">
            <div className="flex gap-padding-xs items-center">
              {val && (
                <span className="text-gray-400 text-xs font-semibold">
                  Formato:
                </span>
              )}
              {resource.map(({ value }) => {
                return (
                  value !== "originale" && (
                    <div
                      className="hover:bg-gray-300 cursor-pointer hover:text-gray-900 bg-gray-600 text-xs text-gray-300 h-btn-sm flexer rounded-full px-padding-sm"
                      key={value}
                      onClick={() =>
                        setVal(
                          !val ? `Genera ${value}` : val + " formato " + value
                        )
                      }
                    >
                      {`${!val ? "Genera" : ""} ${value}`}
                    </div>
                  )
                );
              })}
            </div>
            <div
              onClick={() => setShow((s) => !s)}
              className={`${
                val
                  ? "bg-violet-500 text-white cursor-pointer"
                  : "bg-gray-700 text-gray-400"
              } h-btn-md text-xs font-semibold rounded px-padding-lg flex items-center`}
            >
              Invia
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
