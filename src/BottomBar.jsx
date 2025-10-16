import { MessagesSquare, X, WandSparkles } from "lucide-react";
import Rating from "./Rating";
import { useState } from "react";
import { features } from "./utils";

export default function BottomBar({
  showChat,
  setShowChat,
  setFeature,
  feature,
}) {
  const [val, setVal] = useState("");
  const btn =
    "bg-violet-200 text-violet-900 flex h-btn rounded-btn text-text1 items-center font-semibold px-padding-md gap-padding-xs";
  return (
    <div className="sticky bottom-0 z-40 py-padding-lg">
      <div className="bg-gray-800 text-white max-w-2xl mx-auto rounded-panel flex flex-col overflow-hidden">
        <input
          value={val}
          placeholder="Chiedi al documento..."
          onChange={(e) => setVal(e.target.value)}
          className="placeholder:text-text-dark/30 outline-none h-header flex items-center px-padding-sm"
        />
        <div className="h-header bg-gray-700 gap-padding-xs flex items-center px-padding-sm justify-end">
          {features.map((f, i) => {
            const { Icon } = f;
            return (
              <div key={i} className={btn} onClick={() => setFeature(f.value)}>
                <Icon size={16} />
                <span>{f.value}</span>
              </div>
            );
          })}
          <div className={btn}>
            <WandSparkles size={16} />
            <span>Chiedi</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* export default function BottomBar({ showChat, setShowChat }) {
  return (
    <div className="sticky bottom-0 z-40">
      <div className="px-padding-sm absolute bottom-padding-sm left-1/2 -translate-x-1/2 w-full max-w-md">
        <div className="flex h-header items-center px-padding-sm rounded-panel bg-dark text-text-dark">
          <div className="flex-1 items-center flex">
            <div className="flex gap-padding-sm items-center h-btn px-padding-sm hover:bg-action-dark cursor-pointer rounded-btn">
              <Rating />
            </div>
          </div>
          <div className="flex-1 flexer">
            <div className="h-btn flexer rounded-btn bg-action-dark min-w-14 text-xs font-semibold">
              1 / 34
            </div>
          </div>
          <div className="flex-1 flex items-center justify-end relative">
            <div
              onClick={() => setShowChat((s) => !s)}
              className="h-btn cursor-pointer w-btn rounded-btn bg-action-primary flexer"
            >
              {showChat ? <X size={18} /> : <MessagesSquare size={18} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 */
