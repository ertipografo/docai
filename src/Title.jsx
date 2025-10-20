import { documentTitle } from "./utils";
import Rating from "./Rating";

export default function Title({ noteType }) {
  const tag = "capitalize h-btn-sm px-padding-xs rounded font-semibold flexer";

  return (
    <div className="flex flex-col max-w-document mx-auto w-full">
      <div className="gap-padding-xs flex text-xs items-center">
        <div
          className={`${
            noteType === "note"
              ? "bg-action-note/10 text-action-note"
              : "bg-action-primary/10 text-action-primary"
          } ${tag}`}
        >
          {noteType}
        </div>
        {noteType !== "note" && (
          <>
            <div className={`bg-amber-50 text-amber-900/70 ${tag}`}>Store</div>

            <div className="flexer ml-auto">
              <Rating />
            </div>
          </>
        )}
      </div>
      <div className="flex flex-col pt-padding-sm">
        <h1 className="text-lg leading-tight font-bold mb-padding-sm">
          {documentTitle}
        </h1>
        <p className="max-w-4xl leading-relaxed">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus,
          quidem maxime distinctio dicta at nihil suscipit...
        </p>
      </div>
    </div>
  );
}
