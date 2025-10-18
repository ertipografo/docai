import { MessageSquareText } from "lucide-react";
import Rating from "./Rating";
import Chat from "./Chat";

export default function BottomBar() {
  return (
    <div className="p-padding-sm sticky bottom-0 z-[999]">
      <div className="h-header max-w-2xl bg-bg1/90 shadow-2xl rounded-panel mx-auto flex px-padding-sm relative">
        <div className="flex-1 flex items-center">
          <div className="h-btn px-padding-sm bg-action-secondary rounded-btn gap-padding-xs flex items-center">
            <Rating />
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="text-xs font-semibold h-btn px-padding-sm border border-border rounded-btn gap-padding-xs flex items-center">
            1 / 143
          </div>
        </div>
        <div className="flex-1 flex items-center justify-end">
          <div className="text-xs font-semibold h-btn px-padding-sm bg-action-note text-white rounded-btn gap-padding-xs flex items-center">
            <MessageSquareText size={16} />
            <span>Chiedi all'AI</span>
          </div>
        </div>
        {/*  <div className="absolute bottom-full left-0 w-full mb-padding-sm">
          <Chat />
        </div> */}
      </div>
    </div>
  );
}
