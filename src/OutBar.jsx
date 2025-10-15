export default function OutBar({ setIsArchive }) {
  return (
    <div
      onClick={() => setIsArchive((s) => !s)}
      className="w-header bg-bg3 flex flex-col p-padding-sm"
    ></div>
  );
}
