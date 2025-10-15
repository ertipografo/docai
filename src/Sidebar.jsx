import { useState } from "react";
import SidebarFeatures from "./SidebarFeatures";
import SuggestedDocs from "./SuggestedDocs";
import Title from "./Title";
import Fonti from "./Fonti";
import { features } from "./utils";
import { Shuffle, GitFork, PanelRightClose } from "lucide-react";
import Header from "./Header";
import Outputs from "./Outputs";

export default function Sidebar({
  feature,
  setFeature,
  show,
  setIsLoading,
  setShow,
}) {
  const collapsedItems = () => {
    const cl = `h-buttonHeight flexer cursor-pointer w-buttonHeight rounded`;

    const items = [
      <div className="cursor-pointer" onClick={() => setShow((s) => !s)}>
        <PanelRightClose size={18} />
      </div>,
      <div className={`${cl} text-2xl`}>🇴🇲</div>,

      ...features.map((f) => (
        <div
          className={`${cl} ${feature === f.value ? "bg-bg1" : "hover:bg-bg1"}`}
          onClick={() => setFeature(f.value)}
        >
          <f.Icon size={18} />
        </div>
      )),
    ];
    return items;
  };

  const questions = [
    "Riassunto compatto",
    "Mappa concettuale compatta",
    "Famme na frittata",
    "Un quiz piu esteso",
  ];

  return (
    <>
      <div className="flex flex-col flex-1 h-full justify-between overflow-hidden">
        <Title />
        {/* <SidebarFeatures setFeature={setFeature} feature={feature} /> */}
        {/* <div className="flex flex-col gap-paddingSm bg-bg3 -mx-5 p-paddingSm rounded-panel">
          <div className="bg-bg1 border border-gray-300 text-gray-400 p-paddingSm rounded-button">
            <div className="mb-paddingSm"> Chiedi al documento...</div>
            <div className="flex flex-wrap justify-end gap-1">
              {questions.map((w, i) => {
                return (
                  <div
                    className="bg-bg3/50 text-violet-500 px-paddingSm py-1 text-xs font-semibold rounded-button"
                    key={i}
                  >
                    {w}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="bg-action1 text-white font-semibold text-xs ml-auto rounded-button h-buttonHeightSm flexer px-paddingSm">
            Chiedi
          </div>
        </div> */}
      </div>

      <div
        className={`${
          show ? "hidden" : "hidden lg:flex"
        } flex-col w-headerHeight mt-3`}
      >
        {collapsedItems().map((el, k) => {
          return (
            <div key={k} className="overflow-hidden aspect-square flexer">
              {el}
            </div>
          );
        })}
      </div>
    </>
  );
}
