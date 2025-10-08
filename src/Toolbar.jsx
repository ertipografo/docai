import { Settings2, X, ChevronDown, ChevronRight } from "lucide-react";
import { features } from "./utils";

export default function Toolbar({ feature, setOpen, open }) {
  const currentFeature = features.find((f) => f.value === feature);
  const ComplementaryComponent = feature && currentFeature.hasComplementary;
  const CurrentFeatureIcon = currentFeature.Icon;
  return (
    <div className="h-headerHeight gap-2 px-2 bg-bg1 border-b border-borderColor flex items-center sticky top-0 lg:top-0 justify-between">
      <div className="flex items-center gap-2 justify-center">
        {!!ComplementaryComponent && (
          <div
            onClick={() => setOpen((o) => !o)}
            className={`${
              open ? "bg-bg2" : "bg-bgDark text-textOnDark"
            } h-6 w-6 rounded cursor-pointer  flexer`}
          >
            {open ? <X size={14} /> : <Settings2 size={14} />}
          </div>
        )}
        <ChevronRight size={14} />
        <CurrentFeatureIcon size={14} />
        <span className="font-semibold">{currentFeature.label}</span>
      </div>

      <div className="h-8 px-3 gap-2 font-semibold rounded cursor-pointer border border-borderColor flexer">
        <span className="hidden lg:block text-xs">Download</span>
        <ChevronDown size={14} />
      </div>
    </div>
  );
}
