import { useState } from "react";
import Feature from "./Feature";
import { features } from "./utils";
import Sidebar from "./Sidebar";
import OutBar from "./OutBar";
import Logo from "./Logo";

export default function App() {
  const [feature, setFeature] = useState(features[0].value);
  const [show, setShow] = useState(true);

  return (
    <div className="flex flex-col h-screen overflow-hidden text-base text-text1">
      <div className="h-headerHeight bg-bg1 border-b border-borderColor text-xs flexer">
        <Logo className="scale-75" />
      </div>
      <div className="flex-1 flex overflow-hidden">
        <div className="w-headerHeight hidden lg:block bg-bg1 border-r border-borderColor relative z-50">
          <OutBar show={show} setShow={setShow} />
        </div>
        <div className="flex flex-col lg:flex-row flex-1 overflow-auto">
          <div
            className={`${
              !show && "lg:-ml-sidebarWidth"
            } lg:w-sidebarWidth transition-all lg:border-r border-borderColor bg-bg1 relative z-40`}
          >
            <Sidebar feature={feature} setFeature={setFeature} />
          </div>
          <div className="flex-1 overflow-visible lg:overflow-auto">
            <div className="flex flex-col bg-bg2 relative min-h-full">
              <div className="flex flex-col relative flex-1 bg-bg1">
                <Feature feature={feature} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
