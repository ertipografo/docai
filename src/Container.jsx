import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

import Chat from "./Chat";
import Outbar from "./OutBar";
export default function Container({
  side,
  main,
  setIsArchive,
  setIsLoading,
  setNoteType,
  setFeature,
  show,
  setShow,
  feature,
  showChat,
  setShowChat,
  isLoading,
}) {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <div className="min-h-header bg-sky-950 flex items-center">
        <div
          className="text-xs text-sky-800 px-10"
          onClick={() => setNoteType((t) => (t === "note" ? "doc" : "note"))}
        >
          note
        </div>
        <div
          className="text-xs text-sky-800 px-10"
          onClick={() => setIsLoading((t) => !t)}
        >
          load
        </div>
      </div>
      <div className="flex flex-1 text-base text-text1 bg-bg1 overflow-auto">
        <div className="flex-1 flex lg:overflow-hidden">
          <Outbar
            setIsArchive={setIsArchive}
            setShow={setShow}
            setNoteType={setNoteType}
            setFeature={setFeature}
            feature={feature}
            show={show}
            isLoading={isLoading}
          />
          <div className="flex flex-col w-full">
            <div className="flex flex-col lg:flex-row flex-1 lg:overflow-auto">
              {show && side && side}
              <div
                className={`${
                  !show ? "pl-padding-sm" : ""
                } flex-1 flex flex-col lg:overflow-auto`}
              >
                <PerfectScrollbar className="overflow-visible! lg:overflow-hidden! flex flex-col flex-1">
                  {main}
                </PerfectScrollbar>
              </div>
              {showChat && (
                <Chat showChat={showChat} setShowChat={setShowChat} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
