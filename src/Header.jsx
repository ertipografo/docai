import Logo from "./Logo";
export default function Header() {
  return (
    <div className="h-header flex items-center">
      <div className="pl-padding-lg h-full items-center flex w-sidebar">
        <div className="h-btn py-1.5">
          <Logo />
        </div>
      </div>
    </div>
  );
}
