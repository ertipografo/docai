import { PanelRightOpen, PanelRightClose } from "lucide-react";
import SidebarFeatures from "./SidebarFeatures";
import Fonti from "./Fonti";
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
          show ? "block" : "block lg:hidden"
        } w-full lg:w-sidebarWidth h-full`}
      >
        <div className="h-full flex flex-col relative px-2 lg:px-6 pb-4 gap-6">
          <Title setShow={setShow} />

          <SidebarFeatures
            setFeature={setFeature}
            feature={feature}
            setShowFeatureBar={setShowFeatureBar}
          />

          <Fonti />
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
