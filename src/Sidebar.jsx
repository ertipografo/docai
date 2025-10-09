import SidebarFeatures from "./SidebarFeatures";
import Fonti from "./Fonti";
import Title from "./Title";
export default function Sidebar({ feature, setFeature }) {
  return (
    <div className="h-full flex flex-col relative px-2 lg:px-6 pb-4 gap-6">
      <Title />

      <SidebarFeatures setFeature={setFeature} feature={feature} />
      <Fonti />
    </div>
  );
}
