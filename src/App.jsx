import { useState } from "react";
import { features } from "./utils";
import Sidebar from "./Sidebar";
import FeatureTop from "./FeatureTop";
import BottomBar from "./BottomBar";
import Toolbar from "./Toolbar";
import Feature from "./Feature";
import Container from "./Container";
import Modal from "./Modal";
import Breacrumbs from "./Breacrumbs";

export default function App() {
  const [feature, setFeature] = useState(features[0].value);
  const [showFeatureBar, setShowFeatureBar] = useState(false);
  const [show, setShow] = useState(true);
  const [showChat, setShowChat] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isArchive, setIsArchive] = useState(true);
  const [noteType, setNoteType] = useState("note");

  return isArchive ? (
    <Container
      setIsArchive={setIsArchive}
      setNoteType={setNoteType}
      side={<div>side</div>}
      main={<div>Main</div>}
    />
  ) : (
    <Container
      setIsArchive={setIsArchive}
      setNoteType={setNoteType}
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
            noteType={noteType}
          />
        </div>
      }
      main={
        <>
          <div className="w-full flex-1 flex-col flex">
            <div className="min-h-header flex items-center px-padding-sm">
              <Breacrumbs />
            </div>

            <div className="bg-bg2 rounded-t-panel mr-padding-sm">
              {!isLoading && (
                <FeatureTop
                  feature={feature}
                  setFeature={setFeature}
                  showFeatureBar={showFeatureBar}
                  setShowFeatureBar={setShowFeatureBar}
                />
              )}
              <div className="flex-1 flex flex-col lg:flex-row max-w-document mx-auto">
                <Toolbar
                  feature={feature}
                  showFeatureBar={showFeatureBar}
                  setShowFeatureBar={setShowFeatureBar}
                />
                <Feature feature={feature} isLoading={isLoading} />
              </div>
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
