export default function Feature({ feature }) {
  return feature === "mappa" ? (
    <div className="bg-bg1 flex-1 p-8 rounded-b-lg">Mappa</div>
  ) : (
    <div className="min-h-[5000px] bg-bg1 rounded-b-lg flex-1 p-8">Doc</div>
  );
}
