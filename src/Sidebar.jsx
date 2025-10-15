import Title from "./Title";
import Header from "./Header";
import SidebarFeatures from "./SidebarFeatures";
import SuggestedDocs from "./SuggestedDocs";

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

        <SidebarFeatures setFeature={setFeature} feature={feature} />
      </div>
      <SuggestedDocs />
    </div>
  );
}
