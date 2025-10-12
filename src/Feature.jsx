export default function Feature({ feature }) {
  return feature === "mappa" ? (
    <div className="bg-bg1 mb-3 rounded-b-panel flex-1 p-8 polka">Mappa</div>
  ) : (
    <div className="min-h-[5000px] bg-bg1 rounded-b-panel flex-1 p-8">Doc</div>
  );
}
