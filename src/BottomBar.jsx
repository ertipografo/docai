import { ArrowRight, Loader, Plus, X } from "lucide-react";

import { useState } from "react";
import { features } from "./utils";

export default function BottomBar(/* { setIsLoading, isLoading } */) {
  const [show, setShow] = useState(false);
  const [sent, setSent] = useState(false);
  const [val, setVal] = useState("");

  const resource = val
    ? [{ value: "SM" }, { value: "MD" }, { value: "LG" }, { value: "XL" }]
    : features;
  const msg = `p-4 rounded-ultra leading-relaxed`;

  return (
    <div className="sticky bottom-0 z-[9999999] py-padding-sm ">
      {sent && (
        <div className="absolute bottom-0 -left-padding-sm -right-padding-sm h-[90vh] bg-gradient-to-t from-bg1/90 flex flex-col justify-end pb-header">
          <div className="w-full max-w-2xl mx-auto px-padding-lg py-padding-sm mb-padding-sm flex flex-col gap-padding-xs">
            <div className="flex justify-end">
              <div className={`${msg} bg-gray-100`}>
                Ma di cosa parla il documento?
              </div>
            </div>
            <div className="flex items-center pr-20">
              <div className={`${msg} bg-violet-300 text-violet-950`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium alias eveniet hic repellat impedit magnam minima
                voluptatem suscipit modi, eligendi optio atque totam distinctio
                debitis nihil odit excepturi tenetur aspernatur!
              </div>
            </div>
            <div className="flex justify-end">
              <div className={`${msg} bg-gray-100`}>{sent}</div>
            </div>
            <div className="flex items-center pr-20">
              <div className={`${msg} bg-violet-300 text-violet-950`}>
                👍 Ok, sto generando la tua richiesta... Dammi qualche secondo
              </div>
            </div>
          </div>
        </div>
      )}
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
      </div>
    </div>
  );
}
