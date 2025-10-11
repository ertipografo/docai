import { useState } from "react";
import { features } from "./utils";
import Sidebar from "./Sidebar";

import FeatureTop from "./FeatureTop";
import BottomBar from "./BottomBar";
import Toolbar from "./Toolbar";

import Header from "./Header";

export default function App() {
  const [feature, setFeature] = useState(features[0].value);
  const [showFeatureBar, setShowFeatureBar] = useState(false);
  const [show, setShow] = useState(true);

  return (
    <div className="h-screen pt-headerHeight flex flex-col lg:overflow-hidden text-base text-text1">
      <Header show={show} setShow={setShow} />
      <div className="flex-1 flex-col lg:flex-row flex lg:overflow-hidden">
        <div className="lg:flex flex-col lg:flex-row flex-1 lg:overflow-auto">
          <div
            className={`${
              !show ? "w-full lg:w-headerHeight lg:-mr-3" : "lg:w-sidebarWidth"
            } bg-bg2 relative z-50 transition-all`}
          >
            <Sidebar
              feature={feature}
              setFeature={setFeature}
              show={show}
              setShow={setShow}
            />
          </div>
          <div className="bg-bg2 flex-1 flex flex-col lg:overflow-auto px-3 h-full">
            <FeatureTop
              feature={feature}
              setFeature={setFeature}
              showFeatureBar={showFeatureBar}
              setShowFeatureBar={setShowFeatureBar}
            />
            <div className="flex-1 overflow-visible flex">
              <Toolbar
                feature={feature}
                showFeatureBar={showFeatureBar}
                setShowFeatureBar={setShowFeatureBar}
              />
              {feature === "mappa" ? (
                <div className="bg-bg1 flex-1 p-8 rounded-b-lg">Mappa</div>
              ) : (
                <div className="min-h-[5000px] bg-bg1 rounded-b-lg flex-1 p-8">
                  Doc
                </div>
              )}
            </div>
            <BottomBar />
            {feature !== "mappa" && (
              <div className="bg-violet-200 rounded-lg min-h-[300px] mb-3 p-8">
                footer contents
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
