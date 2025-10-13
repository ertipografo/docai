import { useState } from "react";
import { features } from "./utils";
import Sidebar from "./Sidebar";

import FeatureTop from "./FeatureTop";
import BottomBar from "./BottomBar";
import Toolbar from "./Toolbar";
import Feature from "./Feature";
import Chat from "./Chat";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import Modal from "./Modal";

export default function App() {
  const [feature, setFeature] = useState(features[0].value);
  const [showFeatureBar, setShowFeatureBar] = useState(false);
  const [show, setShow] = useState(true);
  const [showChat, setShowChat] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="h-screen flex flex-col lg:overflow-hidden text-base text-text1">
      <div className="flex-1 flex-col lg:flex-row flex lg:overflow-hidden">
        <div className="flex flex-col lg:flex-row flex-1 lg:overflow-auto">
          <div
            className={`${
              !show ? "w-full lg:w-headerHeight" : "lg:w-sidebarWidth"
            } bg-bg2 relative z-50 transition-all`}
          >
            <Sidebar
              feature={feature}
              setFeature={setFeature}
              show={show}
              setShow={setShow}
              setShowModal={setShowModal}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          </div>
          <div className="bg-bg2 flex-1 flex flex-col lg:overflow-auto">
            <PerfectScrollbar className="overflow-visible! lg:overflow-hidden! flex flex-col flex-1 z-[78]">
              <div
                className={`pl-3 pr-3 lg:pl-0 ${
                  feature !== "mappa" ? "max-w-documentWidth" : ""
                } mx-auto w-full flex-1 flex-col flex`}
              >
                {!isLoading && (
                  <FeatureTop
                    feature={feature}
                    setFeature={setFeature}
                    showFeatureBar={showFeatureBar}
                    setShowFeatureBar={setShowFeatureBar}
                  />
                )}
                <div className="flex-1 flex flex-col lg:flex-row">
                  <Toolbar
                    feature={feature}
                    showFeatureBar={showFeatureBar}
                    setShowFeatureBar={setShowFeatureBar}
                  />
                  <Feature feature={feature} isLoading={isLoading} />
                </div>
              </div>
              {!isLoading && (
                <BottomBar showChat={showChat} setShowChat={setShowChat} />
              )}
              {/*  {feature !== "mappa" && (
                <div className="min-h-headerHeight flexer my-3 mr-3 text-text2">
                  Footerino
                </div>
              )} */}
            </PerfectScrollbar>
          </div>
          <Chat showChat={showChat} setShowChat={setShowChat} />
        </div>
      </div>
      <Modal setShowModal={setShowModal} showModal={showModal} />
    </div>
  );
}
