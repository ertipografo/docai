import { ChevronRight } from "lucide-react";
import { features } from "./utils";

export default function SidebarFeatures({
  feature,
  setFeature,
  setShowFeatureBar,
}) {
  return (
    <div className="hidden lg:flex flex-col gap-1 px-6 pb-6">
      {features.map((f) => {
        const { value, label, Icon } = f;
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
                isOpen ? "bg-bg1 rounded" : "rounded hover:bg-bg1 rounded"
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
