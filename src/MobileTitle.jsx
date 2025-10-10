import { ChevronUp } from "lucide-react";
import { documentTitle } from "./utils";
export default function MobileTitle() {
  return (
    <div className="flex items-center px-3 gap-3 font-bold lg:hidden fixed top-headerHeight left-0 w-full h-headerHeight bg-bg3 z-40">
      <div className="text-2xl">🇴🇲</div>
      <span className="line-clamp-1 break-all">{documentTitle}</span>
      <div className="h-buttonHeight w-buttonHeight bg-actionSecondary flexer rounded ml-auto">
        <ChevronUp size={16} />
      </div>
    </div>
  );
}
