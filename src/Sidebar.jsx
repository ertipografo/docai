import { PanelRightOpen, PanelRightClose } from "lucide-react";
import SidebarFeatures from "./SidebarFeatures";
import SuggestedDocs from "./SuggestedDocs";
import Title from "./Title";
import { features } from "./utils";

export default function Sidebar({
  feature,
  setFeature,
  setShowFeatureBar,
  show,
  setShow,
}) {
  const collapsedItems = () => {
    const cl = `aspect-square flexer cursor-pointer w-buttonHeight rounded`;
    const PanelIcon = show ? PanelRightOpen : PanelRightClose;
    const items = [
      <div className={`${cl} hover:bg-bg3`} onClick={() => setShow((s) => !s)}>
        <PanelIcon size={18} />
      </div>,
      <div className={`${cl} text-2xl`}>🇴🇲</div>,
      ...features.map(({ Icon, value }) => (
        <div
          className={`${cl} ${feature === value ? "bg-bg3" : ""}`}
          onClick={() => setFeature(value)}
        >
          <Icon size={18} />
        </div>
      )),
    ];
    return items;
  };

  return (
    <>
      <div
        className={`${
          show ? "flex" : "flex lg:hidden"
        } w-full lg:w-sidebarWidth flex-col h-full`}
      >
        <div className="relative flex flex-col">
          <Title setShow={setShow} />
          <SidebarFeatures
            setFeature={setFeature}
            feature={feature}
            setShowFeatureBar={setShowFeatureBar}
          />
        </div>
        <div className="mt-auto bg-bg3 rounded-lg overflow-hidden m-3 hidden lg:flex">
          <SuggestedDocs />
        </div>
      </div>

      <div className={`${show ? "hidden" : "hidden lg:flex"} flex-col`}>
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
