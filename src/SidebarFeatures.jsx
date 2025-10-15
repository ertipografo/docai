import { ChevronRight, LoaderCircle } from "lucide-react";
import { features } from "./utils";

export default function SidebarFeatures({
  feature,
  setFeature,
  setShowFeatureBar,
  isLoading,
}) {
  return (
    <div className="flex flex-col rounded-panel gap-padding-sm -mx-padding-md p-padding-sm">
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
                isOpen ? "bg-dark text-text-dark" : ""
              } h-btn rounded-panel group flex items-center px-padding-sm group cursor-pointer gap-padding-sm font-semibold`}
            >
              <Icon
                size={16}
                className={`${isOpen ? "opacity-100" : "opacity-30"}`}
              />
              <span className="hidden lg:flex">{label}</span>
              <div className="ml-auto text-text2">
                {isOpen && isLoading ? (
                  <div className="animate-spin">
                    <LoaderCircle size={16} />
                  </div>
                ) : (
                  <ChevronRight
                    className={`${
                      isOpen
                        ? "opacity-100"
                        : "group-hover:opacity-100 opacity-0"
                    }`}
                    size={16}
                  />
                )}
              </div>
            </div>
            {isOpen && isLoading && (
              <div className="absolute rounded-btn overflow-hidden bottom-1 left-padding-sm right-padding-sm h-1 bg-bg3">
                <div className="w-1/3 bg-violet-400 h-full" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
