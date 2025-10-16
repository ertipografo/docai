import { useState } from "react";
import { features } from "./utils";
import Sidebar from "./Sidebar";
import Archive from "./Archive";
import FeatureTop from "./FeatureTop";
import BottomBar from "./BottomBar";
import Toolbar from "./Toolbar";
import Feature from "./Feature";
import Container from "./Container";
import Modal from "./Modal";
import Breacrumbs from "./Breacrumbs";
import Logo from "./Logo";

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
      setNoteType={setNoteType}
      setFeature={setFeature}
      feature={feature}
      main={<Archive />}
      setShow={setShow}
      show={show}
      showChat={showChat}
      setShowChat={setShowChat}
    />
  ) : (
    <Container
      setIsArchive={setIsArchive}
      setNoteType={setNoteType}
      setShow={setShow}
      feature={feature}
      setFeature={setFeature}
      show={show}
      showChat={showChat}
      setShowChat={setShowChat}
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
          />
        </div>
      }
      main={
        <>
          <div className="w-full flex-1 flex-col flex">
            <div className="min-h-header flex items-center gap-padding-sm px-padding-sm">
              {!show && (
                <div className="pl-padding-lg -ml-padding-sm">
                  <Logo className="-ml-padding-sm" />
                </div>
              )}
              <div className="flex-1 items-center pr-padding-sm flex">
                <Breacrumbs />
              </div>
            </div>

            <div
              className={`bg-bg2 ${
                isMap ? "p-px" : "px-padding-sm pb-padding-sm rounded-b-panel"
              } lg:ml-0 mx-padding-sm rounded-t-panel`}
            >
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
                  !isMap ? "max-w-document mx-auto" : ""
                } flex-1 flex flex-col lg:flex-row`}
              >
                <Toolbar
                  feature={feature}
                  showFeatureBar={showFeatureBar}
                  setShowFeatureBar={setShowFeatureBar}
                />
                <Feature feature={feature} isLoading={isLoading} />
              </div>
            </div>
          </div>
          {!isLoading && (
            <BottomBar feature={feature} setFeature={setFeature} />
          )}
          {!isMap && <div className="flexer min-h-40">Qui footer</div>}

          <Modal setShowModal={setShowModal} showModal={showModal} />
        </>
      }
    />
  );
}
