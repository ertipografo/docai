import { ChevronRight, LoaderCircle } from "lucide-react";
import { features } from "./utils";

export default function SidebarFeatures({
  feature,
  setFeature,
  setShowFeatureBar,
  isLoading,
}) {
  return (
    <div className="hidden lg:flex flex-col gap-1 mx-6 p-3 bg-bg1 rounded-panel">
      {features.map((f) => {
        const { value, label, Icon } = f;
        const isOriginal = value === "originale";
        const isOpen = feature === value;
        return (
          <div key={value} className="relative flex flex-col flex-1 lg:flex-0">
            <div
              onClick={() => {
                setFeature(feature === value ? null : value);
                if (isOriginal) {
                  setShowFeatureBar(true);
                }
              }}
              className={`${
                isOpen
                  ? "bg-bg2 rounded-button text-action1"
                  : "rounded-button hover:bg-bg2"
              } h-12 group flex items-center px-3 group cursor-pointer gap-3 font-semibold`}
            >
              <Icon
                size={16}
                className={`${isOpen ? "text-action1" : "text-text2"}`}
              />
              <span className="hidden lg:flex">{label}</span>
              <div className="ml-auto text-text2">
                {isOpen && isLoading ? (
                  <div className="animate-spin">
                    <LoaderCircle size={16} />
                  </div>
                ) : (
                  isOpen && <ChevronRight size={16} />
                )}
              </div>
            </div>
            {isOpen && isLoading && (
              <div className="absolute rounded-button overflow-hidden bottom-1 left-3 right-3 h-1 bg-bg3">
                <div className="w-1/3 bg-violet-400 h-full" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
