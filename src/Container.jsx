import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import OutBar from "./OutBar";
import Header from "./Header";

export default function Container({ side, main, setIsArchive }) {
  return (
    <div className="h-screen flex lg:overflow-hidden text-base text-text1 bg-bg2">
      <OutBar setIsArchive={setIsArchive} />
      <div className="flex flex-col w-full">
        <div className="flex flex-col lg:flex-row flex-1 lg:overflow-auto">
          {side && side}
          <div className="flex-1 flex flex-col lg:overflow-auto">
            <PerfectScrollbar className="overflow-visible! lg:overflow-hidden! flex flex-col flex-1 px-padding-sm">
              {main}
            </PerfectScrollbar>
          </div>
        </div>
      </div>
    </div>
  );
}
