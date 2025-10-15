import { ChevronRight } from "lucide-react";

export default function Breacrumbs() {
  const root = ["home", "ai", "documenti", "Titolo del documento"];
  return (
    <div className="text-xs font-semibold flex gap-2 items-center">
      {root.map((r, k) => {
        return (
          <div className="capitalize flex items-center gap-2" key={k}>
            {k !== 0 && <ChevronRight className="text-text2" size={14} />}
            {r}
          </div>
        );
      })}
    </div>
  );
}
