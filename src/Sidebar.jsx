import { useState } from "react";
import SidebarFeatures from "./SidebarFeatures";
import SuggestedDocs from "./SuggestedDocs";
import Title from "./Title";
import Fonti from "./Fonti";
import { features } from "./utils";
import { Shuffle, GitFork } from "lucide-react";

export default function Sidebar({
  feature,
  setFeature,
  setShowFeatureBar,
  show,
  setShowModal,
  showModal,
  isLoading,
}) {
  const collapsedItems = () => {
    const cl = `h-buttonHeight flexer cursor-pointer w-buttonHeight rounded`;

    const items = [
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
    <>
      <div
        className={`${
          show ? "flex" : "flex lg:hidden"
        } w-full lg:w-sidebarWidth flex-col h-full`}
      >
        <div className="relative flex flex-col">
          <Title />
          <div className="font-semibold mb-3 mx-3 lg:mx-5 flex gap-2">
            {modes.map((m) => {
              return (
                <div
                  key={m}
                  onClick={() => setMode((s) => (s === m ? null : m))}
                  className={`${m === modes[0] ? "hidden lg:flex" : "flex"} ${
                    m === mode ? "bg-bg1" : "hover:bg-bg1"
                  } h-buttonHeight px-3 rounded-button cursor-pointer items-center justify-center gap-2`}
                >
                  {m === modes[1] ? (
                    <GitFork size={16} />
                  ) : (
                    <Shuffle size={16} />
                  )}
                  <span className="capitalize">{m}</span>
                  {m === modes[1] && (
                    <div className="w-5 h-5 rounded text-xs flexer bg-bg3">
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

        <SuggestedDocs />
      </div>

      <div
        className={`${
          show ? "hidden" : "hidden lg:flex"
        } flex-col w-headerHeight`}
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
