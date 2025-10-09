import { ChevronDown, ChevronRight } from "lucide-react";
import { features } from "./utils";
import { useState } from "react";

export default function SidebarFeatures({ feature, setFeature }) {
  const [open, setOpen] = useState(false);
  const featureModes = ["Sm", "Md", "Lg", "Xl"];

  const cur = featureModes[1];

  return (
    <div className="flex flex-row lg:flex-col gap-1">
      {features.map(({ value, label, Icon }) => {
        const isOriginal = value === "originale";
        const isOpen = feature === value;
        return (
          <div key={value} className={`flex flex-col flex-1 lg:flex-0`}>
            <div
              onClick={() => setFeature(feature === value ? null : value)}
              className={`${
                isOpen ? "bg-bg3 rounded-t" : "rounded hover:bg-bg3 rounded"
              } h-12 flex items-center px-3 group cursor-pointer gap-3 font-semibold`}
            >
              <Icon size={16} />
              <span className="hidden lg:flex">{label}</span>
              <div className="ml-auto text-text2">
                {isOpen && !isOriginal ? (
                  <ChevronDown size={16} />
                ) : (
                  <ChevronRight size={16} />
                )}
              </div>
            </div>
            {isOpen && !isOriginal && (
              <div className="gap-1 p-2 pt-0 bg-bg3 border-t border-bg1 pt-2 rounded-b flex justify-end items-center gap-2">
                <label>Scegli formato:</label>
                <div className="relative flex">
                  <div className="w-14 bg-bg1 flex items-center pl-2 rounded-l font-semibold">
                    {cur}
                  </div>
                  <div
                    className="h-10 w-8 flexer bg-bg1 border-l border-borderColor rounded-r"
                    onClick={() => setOpen((s) => !s)}
                  >
                    <ChevronDown size={16} />
                  </div>
                  {open && (
                    <div className="p-2 bg-bg1 absolute top-full right-0 rounded-lg shadow-xl flex flex-col gap-1 mt-1">
                      {featureModes.map((mode) => (
                        <div
                          className={`${
                            mode === cur ? "bg-blue-50" : ""
                          } justify-end gap-2 flex items-center p-1 rounded-md`}
                          key={mode}
                        >
                          {mode === cur ? (
                            <div className="flex-1 flexer text-blue-900">
                              Free
                            </div>
                          ) : (
                            <div className="bg-amber-100 text-amber-900 whitespace-nowrap text-xs px-2 py-1 rounded">
                              Premium AI
                            </div>
                          )}

                          <div
                            className={`${
                              cur === mode
                                ? "bg-blue-500 text-white"
                                : "bg-bg3 text-text2"
                            } py-2 flexer min-w-12 rounded text-xs`}
                          >
                            {mode}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
