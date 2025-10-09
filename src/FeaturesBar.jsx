import { PanelRightOpen, PanelRightClose } from "lucide-react";
import { features } from "./utils";
export default function FeaturesBar({ show, setShow, feature, setFeature }) {
  const cl = "cursor-pointer aspect-square flexer";
  return (
    <div className="h-sidebarHeight w-headerHeight bg-bg1 sticky top-headerHeight flex flex-col border-r border-borderColor">
      <div className={cl} onClick={() => setShow(!show)}>
        {show ? <PanelRightOpen size={18} /> : <PanelRightClose size={18} />}
      </div>
      {features.map(({ value, Icon }) => {
        return (
          <div
            key={value}
            className={`${cl} ${
              feature === value
                ? "bg-bg1"
                : "hover:bg-white hover:text-text1 text-text2"
            }`}
            onClick={() => setFeature(value)}
          >
            <Icon className="opacity-75" size={18} />
          </div>
        );
      })}
    </div>
  );
}
