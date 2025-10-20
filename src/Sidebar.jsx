import Title from "./Title";
import Header from "./Header";
import SuggestedDocs from "./SuggestedDocs";
import Meta from "./Meta";
import { PanelRightOpen } from "lucide-react";

export default function Sidebar({ noteType, setShowModal, setShow }) {
  return (
    <div className="flex flex-col flex-1 h-full overflow-hidden">
      <div className="h-header flex justify-between mt-padding-sm pr-padding-lg items-center">
        <Header />
        <div
          onClick={() => setShow((s) => !s)}
          className="h-btn w-btn flexer rounded-btn hover:bg-bg2 cursor-pointer -mr-padding-sm"
        >
          <PanelRightOpen size={16} />
        </div>
      </div>
      <div className="px-padding-sm lg:px-padding-lg gap-padding-sm flex flex-col">
        <Title noteType={noteType} setShowModal={setShowModal} />
      </div>
      <div className="px-padding-sm lg:px-padding-lg mt-padding-md lg:mb-padding-md">
        <Meta setShowModal={setShowModal} noteType={noteType} />
      </div>
      <SuggestedDocs />
    </div>
  );
}
