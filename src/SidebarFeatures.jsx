import { ChevronRight } from "lucide-react";
import { features } from "./utils";

export default function SidebarFeatures({ feature, setFeature }) {
  return (
    <div className="flex flex-row lg:flex-col lg:py-paddingUnit gap-1 border-t border-borderColor">
      <span className="hidden lg:flex minititle mb-2">Features:</span>
      {features.map(({ value, label, Icon }) => {
        return (
          <div
            key={value}
            className={`${
              value === feature ? "bg-bgDark text-textOnDark" : "hover:bg-bg2"
            } rounded-lg gap-3 font-semibold min-h-10 px-3 flex items-center cursor-pointer flex-1 lg:flex-0`}
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
