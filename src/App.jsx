import { useState } from "react";
import { features } from "./utils";
import Sidebar from "./Sidebar";
import Logo from "./Logo";
import FeatureTop from "./FeatureTop";
import BottomBar from "./BottomBar";

export default function App() {
  const [feature, setFeature] = useState(features[0].value);
  //const [showFeatureBar, setShowFeatureBar] = useState(false);
  const [show, setShow] = useState(true);

  return (
    <div className="lg:h-screen lg:flex flex-col lg:overflow-hidden text-base text-text1">
      <div className="h-headerHeight z-[999] sticky top-0 bg-bgDark text-textOnDark text-xs flexer relative z-50">
        <Logo className="scale-75" />
      </div>
      <div className="lg:flex-1 lg:flex lg:overflow-hidden">
        <div className="lg:flex lg:flex-row flex-1 lg:overflow-auto">
          <div
            className={`${
              !show ? "w-full lg:w-headerHeight" : "lg:w-sidebarWidth"
            } bg-white relative z-50 transition-all`}
          >
            <Sidebar
              feature={feature}
              setFeature={setFeature}
              show={show}
              setShow={setShow}
            />
          </div>
          <div className="bg-bg2 flex-1 flex flex-col lg:overflow-auto px-3">
            <FeatureTop feature={feature} setFeature={setFeature} />
            <div className="flex-1 overflow-visible flex">
              <div className="flex-1">
                <div className="h-[5000px] bg-bg1 rounded-b-lg"></div>
              </div>
            </div>
            <BottomBar />
          </div>
        </div>
      </div>
    </div>
  );
}
