import {
  ChevronDown,
  ChevronUp,
  Settings2,
  X,
  ArrowDownToLine,
  ChevronRight,
} from "lucide-react";
import { features } from "./utils";
import { useState } from "react";
const MobileFeatures = ({ feature, setFeature }) => {
  return (
    <div className="sticky bg-bg2 top-0 z-50">
      <div className="my-padding-sm bg-bg1 rounded-panel p-padding-sm lg:hidden flex items-center gap-padding-sm text-text1">
        {features.map((f) => {
          const { Icon } = f;
          return (
            <div
              key={f.value}
              onClick={() => setFeature(feature === f.value ? null : f.value)}
              className={`${
                feature === f.value
                  ? "bg-bg1 text-action-primary"
                  : "bg-bg3/30 text-text2"
              } h-btn flex-1 px-padding-sm flex rounded-button justify-center cursor-pointer gap-padding-sm items-center`}
            >
              <Icon size={18} />
              <span className="font-semibold capitalize hidden md:flex">
                {f.value}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Format = () => {
  const formats = ["sm", "md", "lg", "xl"];
  const [show, setShow] = useState(false);
  return (
    <div className="relative">
      <div
        onClick={() => setShow((s) => !s)}
        className="flex items-center font-semibold gap-padding-sm h-btn px-padding-sm bg-action-secondary rounded-button cursor-pointer"
      >
        <span className="hidden sm:block">Formato</span>
        <div className="bg-bg3 text-text1 h-7 rounded text-xs flex items-center px-padding-sm uppercase">
          {formats[1]}
        </div>
        {show ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </div>
      <div
        className={`${
          show
            ? "mt-4 pointer-events-auto opacity-100"
            : "mt-padding-sm pointer-events-none opacity-0"
        } absolute top-full left-0 flex flex-col bg-red-300 rounded-panel transition-all p-2`}
      >
        {formats.map((f, i) => {
          const isPremium = i > 1;
          return (
            <div
              className="flex cursor-pointer p-padding-sm items-center text-xs font-semibold"
              key={f}
            >
              <div
                className={`${
                  isPremium ? "bg-amber-400 text-amber-800" : "bg-action-dark"
                } uppercase flexer h-8 w-8 rounded-sm`}
              >
                {f}
              </div>
              <div className="flex-1 flex px-6">
                {isPremium ? (
                  <div className="px-padding-sm py-1 bg-amber-100 text-amber-800 rounded-button">
                    Premium
                  </div>
                ) : (
                  <div className="px-padding-sm py-1 bg-sky-100 text-sky-800 rounded-button">
                    Gratis
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
/* 
const Breadcrumbs = () => {
  const items = [
    "Store",
    "Esercizi",
    "Psicologia e Sociologia",
    "Didattica generale e speciale",
  ];

  return (
    <div className="font-semibold min-h-btn flex items-center mt-padding-sm">
      <div className="h-btn-sm w-btn-sm mr-padding-sm bg-bg3 rounded-button" />
      {items.map((t, i) => (
        <div key={t} className="flex items-center">
          {i > 0 && <ChevronRight size={14} className="mx-1" />}
          <span>{t}</span>
        </div>
      ))}
    </div>
  );
}; */

export default function FeatureTop({
  feature,
  setFeature,
  showFeatureBar,
  setShowFeatureBar,
}) {
  const currentFeature = features.find((f) => f.value === feature);

  const featureLabel = currentFeature?.label ?? "niente";
  const FeatureIcon = currentFeature?.Icon;
  const hasComplementary = currentFeature?.hasComplementary;
  return (
    <>
      <MobileFeatures feature={feature} setFeature={setFeature} />

      <div className="sticky max-w-document mx-auto px-padding-sm top-0 z-50 min-h-header flex items-center bg-bg1 border-b border-border">
        <div className="flex-1 gap-padding-sm flex items-center justify-start">
          {hasComplementary && (
            <div
              onClick={() => setShowFeatureBar((s) => !s)}
              className="bg-action-secondary rounded-button cursor-pointer h-btn aspect-square flexer"
            >
              {showFeatureBar ? <X size={16} /> : <Settings2 size={16} />}
            </div>
          )}
          {currentFeature?.hasFormats && <Format />}
        </div>
        <div className="flex-1 flex items-center justify-center gap-padding-sm font-semibold flex whitespace-nowrap">
          {FeatureIcon && <FeatureIcon size={18} />}
          {featureLabel}
        </div>
        <div className="flex-1 flex items-center justify-end">
          <div className="flexer gap-padding-sm h-btn px-padding-sm text-xs font-semibold bg-action-secondary rounded-button cursor-pointer">
            <span className="hidden sm:flex">Download</span>
            <ArrowDownToLine size={16} />
          </div>
        </div>
      </div>
    </>
  );
}
