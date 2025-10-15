import Logo from "./Logo";
export default function Header() {
  return (
    <div className="px-paddingSm min-h-headerHeight flex items-center justify-center">
      <div className="h-buttonHeight">
        <Logo className="scale-75" />
      </div>
    </div>
  );
}
