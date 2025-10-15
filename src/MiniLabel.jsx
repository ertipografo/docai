import { Star } from "lucide-react";
export default function MiniLabel({ iconClassName = "", Icon, children }) {
  return (
    <div className="flex gap-padding-xs items-center text-xs font-semibold">
      <Icon className={iconClassName} size={16} />
      {children}
    </div>
  );
}
