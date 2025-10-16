import Logo from "./Logo";

export default function Archive() {
  return (
    <div className="flex flex-col flex-1 px-padding-lg">
      <div className="h-header flex items-center">
        <Logo />
      </div>
      <div className="flex-1 bg-yellow-100">1</div>
    </div>
  );
}
