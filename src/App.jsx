import { useState } from "react";
import { features } from "./utils";
import Sidebar from "./Sidebar";

import FeatureTop from "./FeatureTop";
import BottomBar from "./BottomBar";
import Toolbar from "./Toolbar";

import Header from "./Header";
import Feature from "./Feature";
import Chat from "./Chat";

export default function App() {
  const [feature, setFeature] = useState(features[0].value);
  const [showFeatureBar, setShowFeatureBar] = useState(false);
  const [show, setShow] = useState(true);
  const [showChat, setShowChat] = useState(true);

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
          <div className="bg-bg2 flex-1 flex flex-col lg:overflow-auto h-full">
            <FeatureTop
              feature={feature}
              setFeature={setFeature}
              showFeatureBar={showFeatureBar}
              setShowFeatureBar={setShowFeatureBar}
            />
            <div className="flex-1 flex flex">
              <div className="flex-1">
                <Toolbar
                  feature={feature}
                  showFeatureBar={showFeatureBar}
                  setShowFeatureBar={setShowFeatureBar}
                />
                <Feature feature={feature} />
              </div>
              {/* <Chat showChat={showChat} setShowChat={setShowChat} /> */}
            </div>
            <BottomBar />
          </div>
          <Chat showChat={showChat} setShowChat={setShowChat} />
        </div>
      </div>
    </div>
  );
}
