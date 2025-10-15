import { Star } from "lucide-react";
import MiniLabel from "./Minilabel";
export default function Rating() {
  return (
    <MiniLabel iconClassName="text-transparent fill-amber-400" Icon={Star}>
      <span>
        4.6 <span className="text-text2">(263)</span>
      </span>
    </MiniLabel>
  );
}
