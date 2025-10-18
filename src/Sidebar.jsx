import Title from "./Title";
import Header from "./Header";
import SuggestedDocs from "./SuggestedDocs";
import Meta from "./Meta";

export default function Sidebar({ noteType, setShowModal }) {
  return (
    <div className="flex flex-col flex-1 h-full overflow-hidden">
      <Header />
      <div className="px-padding-sm lg:px-padding-lg gap-padding-sm flex flex-col">
        <Title noteType={noteType} setShowModal={setShowModal} />
      </div>
      <div className="px-padding-sm lg:px-padding-lg mt-padding-md">
        <Meta setShowModal={setShowModal} noteType={noteType} />
      </div>
      {/* <div className="hidden lg:flex text-xs font-semibold text-text2 flex-1 mb-padding-lg rounded-btn mx-padding-lg border border-border items-center justify-center">
        output?
      </div> */}
      <SuggestedDocs />
    </div>
  );
}
