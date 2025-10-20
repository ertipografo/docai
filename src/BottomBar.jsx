import { ArrowRight, Loader, Plus, X } from "lucide-react";

import { useState } from "react";
import { features } from "./utils";

export default function BottomBar({ setIsLoading }) {
  const [show, setShow] = useState(false);
  const [sent, setSent] = useState(false);
  const [val, setVal] = useState("");

  const resource = val
    ? [{ value: "SM" }, { value: "MD" }, { value: "LG" }, { value: "XL" }]
    : features;
  const msg = `p-padding-sm rounded-btn`;

  return (
    <div className="sticky bottom-padding-sm z-[9999999]">
      <div className="h-header relative max-w-2xl mx-auto">
        <div className="bg-gray-900 h-header relative z-30 text-white rounded-full flex items-center px-padding-sm gap-padding-sm">
          <div
            onClick={() => setShow((s) => !s)}
            className="h-btn cursor-pointer w-btn flexer bg-white text-text1 rounded-full flexer"
          >
            {show ? <X size={16} /> : <Plus size={16} />}
          </div>
          <input
            value={val}
            className="flex-1 outline-none h-btn"
            onChange={(e) => setVal(e.target.value)}
            placeholder="Come posso aiutarti?"
          />
          <div
            onClick={() => {
              setSent((s) => !s);
              setIsLoading((s) => !s);
            }}
            className={`${
              val ? "bg-violet-600 cursor-pointer" : "text-gray-400"
            } h-btn w-btn flexer rounded-full flexer`}
          >
            <ArrowRight size={16} />
          </div>
          {show && (
            <div className="absolute bottom-full left-0 mb-padding-xs bg-gray-900 p-padding-sm rounded-panel flex flex-col gap-padding-xs">
              {resource.map((f) => {
                const { value, label } = f;
                const Icon = f.Icon || null;
                return (
                  value !== "originale" && (
                    <div
                      onClick={() => {
                        setVal(
                          !val ? `Genera ${label}` : `${val} formato ${value}`
                        );
                        setShow(false);
                      }}
                      key={value}
                      className="flex items-center text-gray-300 hover:text-white hover:bg-gray-700 rounded-btn cursor-pointer whitespace-nowrap h-btn px-padding-sm gap-padding-sm"
                    >
                      {!!Icon && <Icon size={16} />}
                      <span>{label || value}</span>
                    </div>
                  )
                );
              })}
            </div>
          )}
        </div>
        {val && sent && (
          <div className="z-20 absolute -bottom-padding-xs -left-padding-xs -right-padding-xs pb-header bg-white shadow-xl rounded-t-panel overflow-hidden rounded-b-[31px]">
            <div className="p-padding-sm mb-padding-xs bg-white">
              <div className="flex flex-col gap-padding-xs">
                <div className="flex justify-end">
                  <div className={`${msg} bg-gray-100`}>{val}</div>
                </div>
                <div className="flex items-center text-gray-500">
                  <div className="animate-spin flexer w-btn h-btn">
                    <Loader size={16} />
                  </div>
                  <div className={`${msg} bg-violet-100 text-violet-900`}>
                    👍 Ok, sto generando la tua richiesta... Dammi qualche
                    secondo
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  /* return (
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
              onClick={() => {
                setShow((s) => !s);
                setIsLoading((s) => !s);
              }}
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
  ); */
}
