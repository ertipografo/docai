import { Settings, X, WandSparkles, ChevronDown } from "lucide-react";

import { useState } from "react";
import { features } from "./utils";
import Chat from "./Chat";

const AdditionalComponent = ({ feature, setOpen, open }) => {
  return open ? (
    <div className="relative min-h-header flex flex-col">
      <div className="flex justify-end pt-padding-sm pr-padding-sm">
        <div
          onClick={() => setOpen(null)}
          className="z-50 relative cursor-pointer h-btn w-btn hover:bg-gray-700 rounded-btn flexer"
        >
          <ChevronDown size={16} />
        </div>
      </div>
      {open === "chat" ? <Chat /> : <div>{feature}</div>}
    </div>
  ) : (
    <></>
  );
};

export default function BottomBar({ setFeature, feature }) {
  const [open, setOpen] = useState(null);
  const btn =
    "cursor-pointer capitalize flex h-btn rounded-btn items-center font-semibold overflow-hidden";
  const active = "bg-violet-200 text-violet-900";
  const activeChat = "bg-gray-100 text-text1";
  const inactive = "bg-gray-600 text-gray-300";
  const inner = "flex h-btn gap-padding-xs px-padding-sm items-center";
  return (
    <div className="sticky bottom-0 z-[99] py-padding-lg px-padding-sm">
      <div className="bg-gray-800 text-white max-w-2xl mx-auto rounded-panel flex flex-col overflow-hidden">
        <AdditionalComponent open={open} feature={feature} setOpen={setOpen} />
        <div className="h-header bg-gray-700 gap-padding-md flex items-center px-padding-sm justify-between">
          <div className="gap-padding-sm flex items-center">
            {features.map((f, i) => {
              const { Icon } = f;
              return (
                <div
                  key={i}
                  className={`${btn} ${
                    feature === f.value ? active : inactive
                  }`}
                >
                  <div
                    className={inner}
                    onClick={() => {
                      setFeature(f.value);
                      setOpen(null);
                    }}
                  >
                    <Icon size={16} />
                    <span className="hidden md:flex">{f.value}</span>
                  </div>
                  <div
                    className="group h-btn mr-padding-sm flex items-center"
                    onClick={() => {
                      setFeature(f.value);
                      setOpen((r) => (r === f.value ? null : f.value));
                    }}
                  >
                    <div className="group-hover:bg-gray-300 group-hover:text-gray-800 w-btn-sm h-btn-sm rounded flexer">
                      <Settings size={16} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* <div className="h-btn-sm w-px bg-gray-500" /> */}
          <div
            className={`${btn} ${open === "chat" ? activeChat : inactive}`}
            onClick={() => setOpen((r) => (r === "chat" ? null : "chat"))}
          >
            <div className={inner}>
              <WandSparkles size={16} />
              <span>Chatta</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
