import { useState } from "react";
import MobileTitle from "./MobileTitle";
import { features, documentTitle } from "./utils";
import Sidebar from "./Sidebar";
import OutBar from "./OutBar";
import Logo from "./Logo";
import { ChevronUp } from "lucide-react";
import MobileFeatures from "./MobileFeatures";

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
        {/* <div className="w-headerHeight hidden lg:block bg-bg3 relative z-50">
          <OutBar show={show} setShow={setShow} />
        </div> */}
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
          <MobileTitle />
          <div className="bg-bg3 flex-1 flex flex-col lg:overflow-auto px-3 pb-20">
            <MobileFeatures />

            <div className="sticky top-headerHeight top-headerHeight3 lg:top-0 z-50 bg-bg3  pt-0 lg:pt-3">
              <div className="max-w-documentWidth mx-auto">
                <div className="pt-3 lg:pt-0">
                  <div className="p-4 bg-bg1 h-headerHeight rounded-t flex-1">
                    13
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-visible flex">
              <div className="bg-red-300 flex-1 max-w-documentWidth mx-auto">
                <div className="h-[5000px] bg-rose-100"></div>
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
