import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

import Chat from "./Chat";
import Outbar from "./OutBar";
export default function Container({
  side,
  main,
  setIsArchive,
  setNoteType,
  setFeature,
  show,
  setShow,
  feature,
  showChat,
  setShowChat,
}) {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <div className="min-h-header bg-gray-800" />
      <div className="flex flex-1 text-base text-text1 bg-bg1 overflow-auto">
        <div className="flex-1 flex lg:overflow-hidden">
          <Outbar
            setIsArchive={setIsArchive}
            setShow={setShow}
            setNoteType={setNoteType}
            setFeature={setFeature}
            feature={feature}
            show={show}
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
