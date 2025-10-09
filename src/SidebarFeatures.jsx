import { ChevronDown, ChevronRight } from "lucide-react";
import { features } from "./utils";

export default function SidebarFeatures({ feature, setFeature }) {
  return (
    <div className="flex flex-row lg:flex-col gap-2">
      {features.map(({ value, label, Icon }) => {
        const isOriginal = value === "originale";
        const isOpen = feature === value;
        return (
          <div
            key={value}
            className={`flex flex-col flex-1 lg:flex-0`}
            onClick={() => setFeature(feature === value ? null : value)}
          >
            <div
              className={`${
                isOpen ? "bg-bg3 rounded-t" : "rounded hover:bg-bg3 rounded"
              } h-10 flex items-center px-3 group cursor-pointer gap-3 font-semibold`}
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
              <div className="h-20 bg-bg3 rounded-b"></div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* 
export default function SidebarFeatures({ feature, setFeature }) {
  return (
    <div className="flex flex-row lg:flex-col gap-1">
      {features.map(({ value, label, Icon }) => {
        return (
          <div
            key={value}
            className={`${
              value === feature ? "bg-bg3 text-violet-500" : "hover:bg-bg3"
            } rounded gap-3 font-semibold min-h-10 px-3 flex items-center cursor-pointer flex-1 lg:flex-0`}
            onClick={() => setFeature(feature === value ? null : value)}
          >
            <div>
              <Icon size={16} />
            </div>
            <span className="hidden lg:flex">{label}</span>
            <div className="ml-auto">
              <ChevronRight size={16} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
 */
