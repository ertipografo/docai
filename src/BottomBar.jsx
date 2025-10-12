import { Star, MessagesSquare, X } from "lucide-react";

export default function BottomBar({ showChat, setShowChat }) {
  return (
    <div className="sticky bottom-0 z-[99997]">
      <div className="px-3 absolute bottom-3 left-1/2 -translate-x-1/2 w-full max-w-md">
        <div className="flex h-headerHeight items-center px-2 rounded-panel bg-bgDark text-textOnDark">
          <div className="flex-1 items-center flex">
            <div className="flex gap-3 items-center h-buttonHeight px-2 hover:bg-actionDark cursor-pointer rounded-button">
              <div className="flex gap-2 items-center text-xs font-semibold">
                <Star className="text-transparent fill-amber-400" size={16} />
                <span>
                  4.6 <span className="text-text2">(263)</span>
                </span>
              </div>
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
