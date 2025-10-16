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
      {/* <div className="px-padding-lg">
        <SidebarFeatures setFeature={setFeature} feature={feature} />
      </div>

      <SuggestedDocs /> */}
      {/* <div className="p-padding-sm mt-auto border-t border-border">
        <div className="flex flex-col">
          <div className="h-20 bg-teal-100">qui</div>
          <div className="p-1 flex items-center border border-border rounded-btn overflow-hidden">
            <div className="h-btn flex-1 flex items-center px-2">
              Qui chiedi
            </div>
            <div className="bg-gray-900 text-white rounded font-semibold text-gray-900 h-btn flexer px-padding-sm">
              Chiedi
            </div>
          </div>
        </div>
      </div> */}
      {/*  <Chat2 /> */}
    </div>
  );
}
