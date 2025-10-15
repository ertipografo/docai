import { ChevronRight, LoaderCircle } from "lucide-react";
import { features } from "./utils";

export default function SidebarFeatures({
  feature,
  setFeature,
  setShowFeatureBar,
  isLoading,
}) {
  return (
    <div className="hidden lg:flex flex-col gap-padding-xs mx-padding-lg">
      <span className="font-semibold text-xs text-text2 ml-padding-sm mb-padding-sm">
        Genera:
      </span>
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
                  ? "text-white bg-action-feature"
                  : "hover:bg-action-tertiary"
              } h-12 rounded-panel group flex items-center px-padding-sm group cursor-pointer gap-padding-sm font-semibold`}
            >
              <Icon
                size={16}
                className={`${isOpen ? "opacity-100" : "opacity-50"}`}
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
              <div className="absolute rounded-button overflow-hidden bottom-1 left-padding-sm right-padding-sm h-1 bg-bg3">
                <div className="w-1/3 bg-violet-400 h-full" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
