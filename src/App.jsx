import { useState } from "react";
import { features } from "./utils";
import Sidebar from "./Sidebar";
import Archive from "./Archive";
import FeatureTop from "./FeatureTop";
import Toolbar from "./Toolbar";
import Feature from "./Feature";
import Container from "./Container";
import Modal from "./Modal";
import BottomBar from "./BottomBar";

export default function App() {
  const [feature, setFeature] = useState(features[0].value);
  const [showFeatureBar, setShowFeatureBar] = useState(false);
  const [show, setShow] = useState(true);
  const [showChat, setShowChat] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isArchive, setIsArchive] = useState(false);
  const [noteType, setNoteType] = useState("note");

  const isMap = feature === "mappa";

  return isArchive ? (
    <Container
      setIsArchive={setIsArchive}
      isArchive={isArchive}
      setNoteType={setNoteType}
      setFeature={setFeature}
      feature={feature}
      main={<div className="p-padding-lg bg-bg2 h-full" />}
      setShow={setShow}
      show={show}
      showChat={showChat}
      setShowChat={setShowChat}
      setIsLoading={setIsLoading}
    />
  ) : (
    <Container
      setIsArchive={setIsArchive}
      isArchive={isArchive}
      setNoteType={setNoteType}
      setShow={setShow}
      feature={feature}
      setFeature={setFeature}
      show={show}
      showChat={showChat}
      setShowChat={setShowChat}
      setIsLoading={setIsLoading}
      side={
        <div
          className={`bg-bg1 ${
            !show ? "w-full w-header" : "w-full lg:w-sidebar"
          }`}
        >
          <Sidebar
            feature={feature}
            setFeature={setFeature}
            setShowModal={setShowModal}
            noteType={noteType}
            setShow={setShow}
          />
        </div>
      }
      main={
        <>
          <div className="w-full flex-1 flex-col flex">
            <FeatureTop
              feature={feature}
              setFeature={setFeature}
              showFeatureBar={showFeatureBar}
              setShowFeatureBar={setShowFeatureBar}
              show={show}
              setShow={setShow}
            />
            <div
              className={`${
                isMap
                  ? "border border-bg2"
                  : "bg-bg2 px-padding-sm pt-padding-sm rounded-b-panel"
              } lg:ml-0 mx-padding-sm`}
            >
              <div className="flex-1 flex flex-col lg:flex-row min-h-screen">
                <Toolbar
                  feature={feature}
                  showFeatureBar={showFeatureBar}
                  setShowFeatureBar={setShowFeatureBar}
                />
                <div
                  className={`${
                    !isMap ? "max-w-document mx-auto" : ""
                  } flex-1 flex flex-col`}
                >
                  <Feature feature={feature} isLoading={isLoading} />
                </div>
              </div>
              <BottomBar setIsLoading={setIsLoading} isLoading={isLoading} />
            </div>
          </div>

          {!isMap && <div className="flexer min-h-40">Qui footer</div>}

          <Modal setShowModal={setShowModal} showModal={showModal} />
        </>
      }
    />
  );
}
