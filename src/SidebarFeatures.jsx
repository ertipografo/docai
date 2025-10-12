import { ChevronRight, LoaderCircle } from "lucide-react";
import { features } from "./utils";

export default function SidebarFeatures({
  feature,
  setFeature,
  setShowFeatureBar,
  isLoading,
}) {
  return (
    <div className="hidden lg:flex flex-col gap-1 px-5 pb-6">
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
                isOpen ? "bg-bg1 rounded-button" : "rounded-button hover:bg-bg1"
              } h-12 group flex items-center px-3 group cursor-pointer gap-3 font-semibold`}
            >
              <Icon
                size={16}
                className={`${
                  isOpen ? "text-text1" : "text-text2 group-hover:text-text1"
                }`}
              />
              <span className="hidden lg:flex">{label}</span>
              <div className="ml-auto text-text2">
                {isOpen && isLoading ? (
                  <div className="animate-spin">
                    <LoaderCircle size={16} />
                  </div>
                ) : (
                  <ChevronRight size={16} />
                )}
              </div>
            </div>
            {isOpen && isLoading && (
              <div className="absolute rounded-button overflow-hidden bottom-1 left-2 right-2 h-1 bg-bg3">
                <div className="w-1/3 bg-violet-400 h-full" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
