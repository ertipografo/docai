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
              <div className="h-20 bg-bg3 flexer text-xs">feature premium</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
