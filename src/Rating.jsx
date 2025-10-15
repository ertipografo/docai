import { Star } from "lucide-react";
export default function Rating() {
  return (
    <div className="flex gap-padding-sm items-center text-xs font-semibold">
      <Star className="text-transparent fill-amber-400" size={16} />
      <span>
        4.6 <span className="text-text2">(263)</span>
      </span>
    </div>
  );
}
