import { Star } from "lucide-react";

export default function BottomBar() {
  return (
    <div className="sticky bottom-0 z-[9999999] h-0 bg-red-300">
      <div className="h-headerHeight flex absolute bottom-3 left-0 w-full px-3">
        <div className="flex-1 items-center flex">
          <div className="flex gap-3 items-center h-buttonHeight px-3 bg-bg1 rounded bg-bg2">
            <div className="flex gap-2 items-center text-xs font-semibold">
              <Star className="text-transparent fill-amber-400" size={16} />
              <span>
                4.6 <span className="text-text2">(263)</span>
              </span>
            </div>
          </div>
        </div>
        <div className="flex-1 flexer">
          <div className="h-buttonHeight flexer rounded bg-bg2 bg-bg1 min-w-14 text-xs font-semibold">
            1 / 34
          </div>
        </div>
        <div className="flex-1 flex items-center justify-end relative"></div>
      </div>
    </div>
  );
}
