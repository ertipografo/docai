import SidebarFeatures from "./SidebarFeatures";
import SuggestedDocs from "./SuggestedDocs";
import Title from "./Title";
import { features } from "./utils";

export default function Sidebar({
  feature,
  setFeature,
  setShowFeatureBar,
  show,
  setShowModal,
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

  return (
    <>
      <div
        className={`${
          show ? "flex" : "flex lg:hidden"
        } w-full lg:w-sidebarWidth flex-col h-full`}
      >
        <div className="relative flex flex-col">
          <Title setShowModal={setShowModal} />
          <SidebarFeatures
            setFeature={setFeature}
            feature={feature}
            setShowFeatureBar={setShowFeatureBar}
          />
        </div>
        <div className="mt-auto bg-bg3 rounded-panel overflow-hidden m-3 hidden lg:flex">
          <SuggestedDocs />
        </div>
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
