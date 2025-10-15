import Title from "./Title";

import Header from "./Header";
import SidebarFeatures from "./SidebarFeatures";

export default function Sidebar({
  feature,
  setFeature,
  noteType,
  setShowModal,
}) {
  return (
    <div className="flex flex-col flex-1 h-full overflow-hidden">
      <Header />
      <Title noteType={noteType} setShowModal={setShowModal} />
      <SidebarFeatures setFeature={setFeature} feature={feature} />
    </div>
  );
}
