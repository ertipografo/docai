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
      <div className="my-paddingSm bg-bg1 rounded-panel p-paddingSm lg:hidden flex items-center gap-paddingSm text-text1">
        {features.map((f) => {
          const { Icon } = f;
          return (
            <div
              key={f.value}
              onClick={() => setFeature(feature === f.value ? null : f.value)}
              className={`${
                feature === f.value
                  ? "bg-bg1 text-action1"
                  : "bg-bg3/30 text-text2"
              } h-buttonHeight flex-1 px-paddingSm flex rounded-button justify-center cursor-pointer gap-paddingSm items-center`}
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
        className="flex items-center font-semibold gap-paddingSm h-buttonHeight px-paddingSm bg-action2 rounded-button cursor-pointer"
      >
        <span className="hidden sm:block">Formato</span>
        <div className="bg-bg3 text-text1 h-7 rounded text-xs flex items-center px-paddingSm uppercase">
          {formats[1]}
        </div>
        {show ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </div>
      <div
        className={`${
          show
            ? "mt-4 pointer-events-auto opacity-100"
            : "mt-paddingSm pointer-events-none opacity-0"
        } absolute top-full left-0 flex flex-col bg-red-300 rounded-panel transition-all p-2`}
      >
        {formats.map((f, i) => {
          const isPremium = i > 1;
          return (
            <div
              className="flex cursor-pointer p-paddingSm items-center text-xs font-semibold"
              key={f}
            >
              <div
                className={`${
                  isPremium ? "bg-amber-400 text-amber-800" : "bg-actionDark"
                } uppercase flexer h-8 w-8 rounded-sm`}
              >
                {f}
              </div>
              <div className="flex-1 flex px-6">
                {isPremium ? (
                  <div className="px-paddingSm py-1 bg-amber-100 text-amber-800 rounded-button">
                    Premium
                  </div>
                ) : (
                  <div className="px-paddingSm py-1 bg-sky-100 text-sky-800 rounded-button">
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
    <div className="font-semibold min-h-buttonHeight flex items-center mt-paddingSm">
      <div className="h-buttonHeightSm w-buttonHeightSm mr-paddingSm bg-bg3 rounded-button" />
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

      <div className="hidden items-center bg-red-100 mt-paddingSm">
        <div className="flex-1 gap-paddingSm flex items-center justify-start">
          {hasComplementary && (
            <div
              onClick={() => setShowFeatureBar((s) => !s)}
              className="bg-action2 rounded-button cursor-pointer h-buttonHeight aspect-square flexer"
            >
              {showFeatureBar ? <X size={16} /> : <Settings2 size={16} />}
            </div>
          )}
          {currentFeature?.hasFormats && <Format />}
        </div>
        <div className="flex-1 flex items-center justify-center gap-paddingSm font-semibold flex whitespace-nowrap">
          {FeatureIcon && <FeatureIcon size={18} />}
          {featureLabel}
        </div>
        <div className="flex-1 flex items-center justify-end">
          <div className="flexer gap-paddingSm h-buttonHeight px-paddingSm text-xs font-semibold bg-action2 rounded-button cursor-pointer">
            <span className="hidden sm:flex">Download</span>
            <ArrowDownToLine size={16} />
          </div>
        </div>
      </div>
    </>
  );
}
