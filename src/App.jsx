import { useState } from "react";
import Feature from "./Feature";
import { features, documentTitle } from "./utils";
import Sidebar from "./Sidebar";
import OutBar from "./OutBar";
import Logo from "./Logo";
import { ChevronUp } from "lucide-react";

export default function App() {
  const [feature, setFeature] = useState(features[0].value);
  const [showFeatureBar, setShowFeatureBar] = useState(false);
  const [show, setShow] = useState(true);

  return (
    <div className="lg:h-screen lg:flex flex-col lg:overflow-hidden text-base text-text1">
      <div className="h-headerHeight bg-bgDark text-textOnDark text-xs flexer relative z-50">
        <Logo className="scale-75" />
      </div>
      <div className="lg:flex-1 lg:flex lg:overflow-hidden">
        <div className="w-headerHeight hidden lg:block bg-bg3 relative z-50">
          <OutBar show={show} setShow={setShow} />
        </div>
        <div className="lg:flex lg:flex-row flex-1 lg:overflow-auto">
          <div
            className={`${
              !show ? "w-full lg:w-headerHeight" : "lg:w-sidebarWidth"
            } bg-white relative z-50`}
          >
            <Sidebar
              feature={feature}
              setFeature={setFeature}
              setShowFeatureBar={setShowFeatureBar}
              show={show}
              setShow={setShow}
            />
          </div>
          <div className="flex items-center pl-4 pr-2 gap-3 font-bold lg:hidden fixed top-0 left-0 w-full h-headerHeight bg-bg1 border-b border-borderColor z-40">
            <div className="text-2xl">🇴🇲</div>
            <span className="line-clamp-1 break-all">{documentTitle}</span>
            <div className="h-buttonHeight w-buttonHeight bg-actionSecondary flexer rounded ml-auto">
              <ChevronUp size={16} />
            </div>
          </div>
          <Feature
            feature={feature}
            showFeatureBar={showFeatureBar}
            setShowFeatureBar={setShowFeatureBar}
          />
        </div>
      </div>
    </div>
  );
}
