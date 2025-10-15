import { MessagesSquare, X } from "lucide-react";
import Rating from "./Rating";
export default function BottomBar({ showChat, setShowChat }) {
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
