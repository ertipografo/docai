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
  setShowFeatureBar,
  show,
  setShowModal,
  showModal,
  isLoading,
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

  const modes = ["output", "fonti"];

  const [mode, setMode] = useState(modes[0]);

  return (
    <div
      className={`${
        !show ? "w-full lg:w-headerHeight" : "lg:w-[25vw] lg:min-w-sidebarWidth"
      } relative z-50`}
    >
      <div className="bg-bg2 flex flex-col flex-1 h-full">
        <div className="relative flex flex-col flex-1 bg-bg1 p-3">
          <Header setShow={setShow} show={show} setIsLoading={setIsLoading} />
          <Title />
          <Outputs />
          {/*   <SidebarFeatures
            setFeature={setFeature}
            feature={feature}
            setShowFeatureBar={setShowFeatureBar}
            isLoading={isLoading}
          /> */}
          <div className="border border-red-400 hidden mx-3 p-3 bg-bgDark2 rounded-panel">
            <div className="font-semibold lg:mb-2 flex gap-2">
              {modes.map((m) => {
                return (
                  <div
                    key={m}
                    onClick={() => setMode((s) => (s === m ? null : m))}
                    className={`${m === modes[0] ? "hidden lg:flex" : "flex"} ${
                      m === mode ? "bg-bgDark" : "hover:bg-bgDark"
                    } h-buttonHeight px-3 rounded-button cursor-pointer items-center justify-center gap-2`}
                  >
                    {m === modes[1] ? (
                      <GitFork size={16} />
                    ) : (
                      <Shuffle size={16} />
                    )}
                    <span className="capitalize">{m}</span>
                    {m === modes[1] && (
                      <div className="w-5 text-bgDark h-5 rounded text-xs flexer bg-textOnDark">
                        5
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            {mode === modes[0] ? (
              <SidebarFeatures
                setFeature={setFeature}
                feature={feature}
                setShowFeatureBar={setShowFeatureBar}
                isLoading={isLoading}
              />
            ) : (
              mode === modes[1] && (
                <Fonti showModal={showModal} setShowModal={setShowModal} />
              )
            )}
          </div>
          {/*  <SuggestedDocs /> */}
        </div>
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
    </div>
  );
}
