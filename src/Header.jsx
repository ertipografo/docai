import Logo from "./Logo";
export default function Header() {
  return (
    <div className="py-padding-sm flex items-center">
      <div className="pl-padding-lg h-btn-lg items-center flex w-sidebar">
        <Logo />
      </div>
    </div>
  );
}
