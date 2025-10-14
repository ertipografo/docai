import Logo from "./Logo";
export default function Header() {
  return (
    <div className="px-3 min-h-headerHeight flex items-center justify-center">
      <Logo className="w-24" />
    </div>
  );
}
