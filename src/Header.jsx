import Logo from "./Logo";
export default function Header() {
  return (
    <div className="px-padding-lg min-h-header flex items-center">
      <div className="h-btn-sm">
        <Logo />
      </div>
    </div>
  );
}
