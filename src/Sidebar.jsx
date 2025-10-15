import Title from "./Title";
import Fonti from "./Fonti";
import Header from "./Header";
import SidebarFeatures from "./SidebarFeatures";

const SideBlock = ({ title, children }) => {
  const cl = "flex flex-col -mx-padding-sm rounded-panel gap-padding-xs";
  return (
    <div className="flex flex-col">
      <div className={cl}>
        {title && (
          <div className="font-semibold pl-padding-sm text-xs text-text2">
            {title}
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default function Sidebar({
  feature,
  setFeature,
  noteType,
  setShowModal,
}) {
  return (
    <div className="flex flex-col flex-1 h-full overflow-hidden">
      <Header />
      <div className="px-padding-lg gap-padding-sm flex flex-col">
        <Title noteType={noteType} setShowModal={setShowModal} />

        <SideBlock title="Genera:">
          <SidebarFeatures setFeature={setFeature} feature={feature} />
        </SideBlock>
      </div>
      <Fonti setShowModal={setShowModal} />
    </div>
  );
}
