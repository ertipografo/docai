import Title from "./Title";
import Header from "./Header";
import SidebarFeatures from "./SidebarFeatures";
import SuggestedDocs from "./SuggestedDocs";
import Chat2 from "./Chat2";
import Meta from "./Meta";

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
      </div>
      <div className="px-padding-lg my-padding-sm py-padding-sm">
        <Meta setShowModal={setShowModal} />
      </div>
      <div className="hidden lg:flex text-xs font-semibold text-text2 flex-1 mb-padding-lg rounded-panel mx-padding-lg bg-bg4 items-center justify-center">
        output?
      </div>
      <SuggestedDocs />
    </div>
  );
}
