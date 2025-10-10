import { ChevronDown, ChevronRight } from "lucide-react";
import { features } from "./utils";
import { useState } from "react";

export default function SidebarFeatures({
  feature,
  setFeature,
  setShowFeatureBar,
}) {
  const [open, setOpen] = useState(false);
  const featureModes = ["Sm", "Md", "Lg", "Xl"];

  const cur = featureModes[1];

  return (
    <div className="hidden lg:flex flex-col gap-1 px-8 pb-8">
      {features.map(({ value, label, Icon }) => {
        const isOriginal = value === "originale";
        const isOpen = feature === value;
        return (
          <div key={value} className={`flex flex-col flex-1 lg:flex-0`}>
            <div
              onClick={() => {
                setFeature(feature === value ? null : value);
                if (isOriginal) {
                  setShowFeatureBar(true);
                }
              }}
              className={`${
                isOpen ? "bg-bg3 rounded" : "rounded hover:bg-bg3 rounded"
              } h-12 flex items-center px-3 group cursor-pointer gap-3 font-semibold`}
            >
              <Icon size={16} />
              <span className="hidden lg:flex">{label}</span>
              <div className="ml-auto text-text2">
                <ChevronRight size={16} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
