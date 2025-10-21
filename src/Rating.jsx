import { Star } from "lucide-react";
function MiniLabel({ Icon, iconClassName = "", children }) {
  return (
    <div className="flex gap-padding-xs items-center text-xs font-semibold">
      <Icon className={iconClassName} size={16} />
      {children}
    </div>
  );
}
export default function Rating() {
  return (
    <MiniLabel iconClassName="text-transparent fill-amber-400" Icon={Star}>
      <span>
        4.6 <span className="text-text2">(263)</span>
      </span>
    </MiniLabel>
  );
}
