import { useState } from "react";
import { features } from "./utils";
import Sidebar from "./Sidebar";

import FeatureTop from "./FeatureTop";
import BottomBar from "./BottomBar";
import Toolbar from "./Toolbar";
import Feature from "./Feature";
import Archive from "./Archive";
import Container from "./Container";
import Modal from "./Modal";

export default function App() {
  const [feature, setFeature] = useState(features[0].value);
  const [showFeatureBar, setShowFeatureBar] = useState(false);
  const [show, setShow] = useState(true);
  const [showChat, setShowChat] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isArchive, setIsArchive] = useState(true);

  return isArchive ? (
    <Archive setIsArchive={setIsArchive} />
  ) : (
    <Container
      setIsArchive={setIsArchive}
      side={
        <div
          className={`bg-bg1 ${
            !show ? "w-full w-header" : "w-full lg:w-sidebar"
          }`}
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
      }
      main={
        <>
          {!isLoading && (
            <FeatureTop
              feature={feature}
              setFeature={setFeature}
              showFeatureBar={showFeatureBar}
              setShowFeatureBar={setShowFeatureBar}
            />
          )}
          <div
            className={`${
              feature !== "mappa" ? "max-w-document" : ""
            } w-full flex-1 flex-col flex`}
          >
            <div className="flex-1 flex flex-col lg:flex-row">
              <Toolbar
                feature={feature}
                showFeatureBar={showFeatureBar}
                setShowFeatureBar={setShowFeatureBar}
              />
              <Feature feature={feature} isLoading={isLoading} />
            </div>
          </div>
          {!isLoading && null && (
            <BottomBar showChat={showChat} setShowChat={setShowChat} />
          )}
          <Modal setShowModal={setShowModal} showModal={showModal} />
        </>
      }
    />
  );
}
