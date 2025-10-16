import { titles } from "./utils";
import PerfectScrollbar from "react-perfect-scrollbar";
const Bubble = ({ idx }) => {
  const isAnswer = idx % 2 === 0;
  return (
    <div className={`${isAnswer ? "flex-row" : "flex-row-reverse"} flex`}>
      <div
        className={`p-3 rounded-btn ${
          isAnswer ? "bg-bg1" : "bg-violet-100 text-violet-900"
        } flex-1`}
      >
        {titles[idx]}
      </div>
      <div className="w-12"></div>
    </div>
  );
};
/* 
export default function Chat() {
  return (
    <div className="flex-1 m-padding-sm rounded-panel bg-bg2 relative mt-auto overflow-auto max-h-[400px]">
      <PerfectScrollbar>
        <div className="flex flex-col gap-2 p-2">
          {Array.from({ length: titles.length }).map((_, i) => (
            <Bubble key={i} idx={i} />
          ))}
        </div>
        <div className="sticky bottom-0 left-0 w-full p-padding-sm">
          <div className="bg-white h-10">zip</div>
        </div>
      </PerfectScrollbar>
    </div>
  );
}
 */

export default function Chat() {
  return (
    <div className="flex-1 flex flex-col m-padding-sm rounded-panel bg-bg2 relative mt-auto overflow-auto max-h-[500px]">
      <div className="flex-1 overflow-auto pt-padding-sm">
        <PerfectScrollbar className="flex flex-col px-padding-sm gap-padding-sm">
          {Array.from({ length: titles.length }).map((_, i) => (
            <Bubble key={i} idx={i} />
          ))}
        </PerfectScrollbar>
      </div>
      <div className="h-header sticky bottom-0 left-0 w-full p-padding-sm">
        <div className="bg-bg1 h-btn rounded-btn"></div>
      </div>
    </div>
  );
}
