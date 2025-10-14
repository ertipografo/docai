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

  return (
    <>
      <div className="flex flex-col flex-1 h-full justify-between overflow-hidden px-10 pb-3">
        <Title />
        <div className="bg-bgDark h-20 -mx-5 p-5 rounded-panel"></div>
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
