import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

export default function Container({ side, main, setIsArchive, setNoteType }) {
  const actions = [
    { label: "arch", action: () => setIsArchive((s) => !s) },
    {
      label: "ntype",
      action: () => setNoteType((s) => (s === "note" ? "doc" : "note")),
    },
  ];

  return (
    <div className="h-screen flex lg:overflow-hidden text-base text-text1 bg-bg2">
      <div className="w-header justify-end bg-bg1 border-r border-border flex flex-col p-padding-sm gap-padding-sm">
        {actions.map(({ label, action }) => (
          <div
            className="h-btn w-btn bg-bg1 flexer rounded-button"
            onClick={action}
            key={label}
          >
            {label}
          </div>
        ))}
      </div>
      <div className="flex flex-col w-full">
        <div className="flex flex-col lg:flex-row flex-1 lg:overflow-auto">
          {side && side}
          <div className="flex-1 flex flex-col lg:overflow-auto">
            <PerfectScrollbar className="overflow-visible! lg:overflow-hidden! flex flex-col flex-1 border-l border-border">
              {main}
            </PerfectScrollbar>
          </div>
        </div>
      </div>
    </div>
  );
}
