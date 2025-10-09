import { Star, FileText, FolderUp } from "lucide-react";
export default function OutBar() {
  const sections = [Star, FileText];

  return (
    <div className="flex flex-col relative h-full pb-2">
      {sections.map((Section, idx) => (
        <div key={idx} className="aspect-square flexer">
          <div className="hover:bg-bg1 w-buttonHeight aspect-square flexer cursor-pointer rounded">
            <Section size={18} />
          </div>
        </div>
      ))}
      <div className="aspect-square flexer mt-auto">
        <div className="bg-actionPrimary w-buttonHeight aspect-square text-textOnDark flexer rounded">
          <FolderUp size={18} />
        </div>
      </div>
    </div>
  );
}
