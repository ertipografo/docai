import { MessageSquareText, X } from "lucide-react";
import Chat from "./Chat";
import { useState } from "react";

export default function BottomBar() {
  const [show, setShow] = useState(false);
  return (
    <div className="sticky bottom-padding-sm z-[9999999]">
      <div className="h-header flex px-padding-sm relative">
        <div className="flex-1 flex items-center">
          {/*   <div className="h-btn px-padding-sm bg-action-secondary rounded-btn gap-padding-xs flex items-center">
            <Rating />
          </div> */}
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="text-xs bg-bg1 font-semibold h-btn px-padding-sm border border-border rounded-btn gap-padding-xs flex items-center">
            1 / 143
          </div>
        </div>
        <div className="flex-1 flex items-center justify-end relative">
          <div className="relative">
            <div
              onClick={() => setShow((s) => !s)}
              className="text-xs cursor-pointer font-semibold h-btn px-padding-sm bg-action-note text-white rounded-btn gap-padding-xs flex items-center"
            >
              {show ? (
                <X size={16} />
              ) : (
                <>
                  <MessageSquareText size={16} />
                  <span>Chiedi all'AI</span>
                </>
              )}
            </div>
            {show && (
              <div className="absolute bottom-full right-0 w-xs mb-padding-xs">
                <Chat />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
