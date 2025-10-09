import SidebarFeatures from "./SidebarFeatures";
import Fonti from "./Fonti";
import Title from "./Title";
export default function Sidebar({ feature, setFeature }) {
  return (
    <div className="h-full flex flex-col relative px-paddingUnit pb-4 gap-paddingUnit">
      <Title />

      <SidebarFeatures setFeature={setFeature} feature={feature} />
      <Fonti />
    </div>
  );
}
