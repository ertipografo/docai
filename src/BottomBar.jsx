import { ArrowRight, Loader, Plus, X, Copy } from "lucide-react";

import { useState } from "react";
import { features } from "./utils";

export default function BottomBar(/* { setIsLoading, isLoading } */) {
  const [show, setShow] = useState(false);
  const [sent, setSent] = useState(false);
  const [val, setVal] = useState("");
  const [focus, setFocus] = useState(false);

  const resource = val
    ? [{ value: "SM" }, { value: "MD" }, { value: "LG" }, { value: "XL" }]
    : features;
  const msg = `p-4 rounded-ultra leading-relaxed`;
  const maxW = `transition-all ${focus ? "max-w-lg" : "max-w-xs"}`;

  const sen = "bg-gray-800 text-gray-200";
  const rec = "bg-violet-300/20 text-violet-300";

  return (
    <div className="sticky bottom-0 z-[9999999] py-padding-sm ">
      {sent && (
        <div
          className={`${maxW} absolute bottom-padding-sm rounded-b-[40px] rounded-t-ultra -left-padding-sm -right-padding-sm pointer-events-none bg-gray-900 flex flex-col justify-end pb-header mx-auto`}
        >
          <div
            className={`w-full pointer-events-auto mx-auto px-padding-sm py-padding-sm flex flex-col gap-padding-xs`}
          >
            <div className="h-btn cursor-pointer text-gray-300 pl-padding-xs font-semibold text-xs flex items-center justify-between">
              <span>Chat</span>
              <div
                className="h-btn w-btn hover:bg-gray-800 rounded-btn flexer"
                onClick={() => {
                  setFocus(false);
                  setVal("");
                  setSent("");
                }}
              >
                <X size={16} />
              </div>
            </div>
            <div className="flex justify-end items-center gap-padding-xs">
              <div className={`${msg} ${sen}`}>{sent}</div>
              <div className="h-btn-md w-btn-md bg-gray-500 mr-padding-xs rounded-full flexer text-xs font-semibold">
                AC
              </div>
            </div>
            <div className="flex items-center">
              <div className="h-btn-md w-btn-md bg-purple-500 mr-padding-xs rounded-full" />
              <div className={`${msg} ${rec}`}>
                👍 Sto generando la tua richiesta... Qualche secondo
              </div>
              <div className="w-btn p-padding-sm h-btn text-gray-500 mr-padding-lg flex items-center">
                <Copy size={16} />
              </div>
            </div>
          </div>
        </div>
      )}
      <div className={`${maxW} h-header relative mx-auto`}>
        <div className="bg-gray-900 h-header relative z-30 text-white rounded-full flex items-center px-padding-sm gap-padding-sm">
          <div
            onClick={() => setShow((s) => !s)}
            className="h-btn cursor-pointer w-btn flexer bg-white text-text1 rounded-full flexer"
          >
            {show ? <X size={16} /> : <Plus size={16} />}
          </div>
          <input
            onFocus={() => setFocus(true)}
            value={val}
            className="flex-1 outline-none h-btn"
            onChange={(e) => setVal(e.target.value)}
            placeholder="Come posso aiutarti?"
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                setSent(val);
                setVal("");
              }
            }}
          />
          <div
            onClick={() => {
              setSent(val);
              setVal("");
            }}
            className={`${
              val ? "bg-violet-600 cursor-pointer" : "text-gray-400"
            } h-btn w-btn flexer rounded-full flexer`}
          >
            {sent ? (
              <div className="animate-spin flexer w-btn h-btn">
                <Loader size={16} />
              </div>
            ) : (
              <ArrowRight size={16} />
            )}
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

                        setFocus(true);
                        val && setShow(false);
                      }}
                      key={value}
                      className="flex items-center text-gray-300 hover:text-white hover:bg-gray-700 rounded-btn cursor-pointer whitespace-nowrap h-btn px-padding-sm gap-padding-sm"
                    >
                      {!!Icon && <Icon size={16} />}
                      <span>
                        {label ? `Genera ${label}` : `Formato ${value}`}
                      </span>
                    </div>
                  )
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
