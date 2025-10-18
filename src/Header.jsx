import Logo from "./Logo";
import UploadCta from "./UploadCta";
export default function Header() {
  return (
    <div className="px-padding-sm lg:px-padding-lg py-padding-sm flex items-center justify-between">
      <div className="h-btn-lg items-center flex">
        <Logo />
      </div>
      <div className="flex lg:hidden">
        <UploadCta />
      </div>
    </div>
  );
}
