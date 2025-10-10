import { useState } from "react";
import MobileTitle from "./MobileTitle";
import { features, documentTitle } from "./utils";
import Sidebar from "./Sidebar";
import OutBar from "./OutBar";
import Logo from "./Logo";
import { ChevronUp } from "lucide-react";
import FeatureTop from "./FeatureTop";

export default function App() {
  const [feature, setFeature] = useState(features[0].value);
  const [showFeatureBar, setShowFeatureBar] = useState(false);
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
          <div className="bg-bg2 flex-1 flex flex-col lg:overflow-auto px-3 pb-20">
            <FeatureTop feature={feature} setFeature={setFeature} />

            <div className="flex-1 overflow-visible flex">
              <div className="flex-1">
                <div className="h-[5000px] bg-bg1"></div>
              </div>
            </div>
          </div>
          {/*  <Feature
            feature={feature}
            showFeatureBar={showFeatureBar}
            setShowFeatureBar={setShowFeatureBar}
          /> */}
        </div>
      </div>
    </div>
  );
}
