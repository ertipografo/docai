import SuggestedDocs from "./SuggestedDocs";
import SidebarFeatures from "./SidebarFeatures";
import Title from "./Title";
export default function Sidebar({ feature, setFeature }) {
  return (
    <div className="h-full flex flex-col relative p-paddingUnit">
      <Title />

      {/*   <SidebarFeatures setFeature={setFeature} feature={feature} /> */}

      {/* <SuggestedDocs /> */}
    </div>
  );
}
