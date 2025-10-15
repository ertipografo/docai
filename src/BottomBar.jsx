import { MessagesSquare, X } from "lucide-react";
import Rating from "./Rating";
export default function BottomBar({ showChat, setShowChat }) {
  return (
    <div className="sticky bottom-0 z-[99997]">
      <div className="px-paddingSm absolute bottom-paddingSm left-1/2 -translate-x-1/2 w-full max-w-md">
        <div className="flex h-headerHeight items-center px-paddingSm rounded-panel bg-bgDark text-textOnDark">
          <div className="flex-1 items-center flex">
            <div className="flex gap-paddingSm items-center h-buttonHeight px-paddingSm hover:bg-actionDark cursor-pointer rounded-button">
              <Rating />
            </div>
          </div>
          <div className="flex-1 flexer">
            <div className="h-buttonHeight flexer rounded-button bg-actionDark min-w-14 text-xs font-semibold">
              1 / 34
            </div>
          </div>
          <div className="flex-1 flex items-center justify-end relative">
            <div
              onClick={() => setShowChat((s) => !s)}
              className="h-buttonHeight cursor-pointer w-buttonHeight rounded-button bg-action1 flexer"
            >
              {showChat ? <X size={18} /> : <MessagesSquare size={18} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
