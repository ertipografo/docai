import { useState } from "react";
import { features } from "./utils";
import Sidebar from "./Sidebar";
import Logo from "./Logo";
import FeatureTop from "./FeatureTop";
import BottomBar from "./BottomBar";
import Toolbar from "./Toolbar";
import { PanelRightOpen, PanelRightClose, FolderUp } from "lucide-react";

export default function App() {
  const [feature, setFeature] = useState(features[0].value);
  const [showFeatureBar, setShowFeatureBar] = useState(false);
  const [show, setShow] = useState(true);
  const PanelIcon = show ? PanelRightOpen : PanelRightClose;

  return (
    <div className="lg:h-screen lg:flex flex-col lg:overflow-hidden text-base text-text1">
      <div className="h-headerHeight z-[999] sticky top-0 bg-bgDark text-textOnDark text-xs flex items-center relative z-50">
        <div className="flex-1">
          <div
            className={`hidden lg:flex items-center justify-center h-headerHeight w-headerHeight ${
              show ? "" : ""
            }`}
            onClick={() => setShow((s) => !s)}
          >
            <div className="h-buttonHeight w-buttonHeight flexer rounded cursor-pointer">
              <PanelIcon size={16} />
            </div>
          </div>
        </div>
        <div className="flex-1 flexer">
          <Logo className="scale-75" />
        </div>
        <div className="flex-1 justify-end flex pr-2">
          <div className="h-buttonHeight min-w-buttonHeight gap-2 flexer font-semibold px-3 rounded cursor-pointer bg-action1 text-white">
            <span className="hidden lg:flex">Carica nuovo</span>
            <FolderUp size={16} />
          </div>
        </div>
      </div>
      <div className="lg:flex-1 lg:flex lg:overflow-hidden">
        <div className="lg:flex lg:flex-row flex-1 lg:overflow-auto">
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
          <div className="bg-bg2 flex-1 flex flex-col lg:overflow-auto px-3">
            <FeatureTop
              feature={feature}
              setFeature={setFeature}
              showFeatureBar={showFeatureBar}
              setShowFeatureBar={setShowFeatureBar}
            />
            <div className="flex-1 overflow-visible flex">
              <div className="flex-1 flex">
                <Toolbar
                  feature={feature}
                  showFeatureBar={showFeatureBar}
                  setShowFeatureBar={setShowFeatureBar}
                />
                {feature === "mappa" ? (
                  <div className="h-full min-h-[700px] bg-bg1 flex-1 p-8 rounded-b-lg">
                    Mappa
                  </div>
                ) : (
                  <div className="min-h-[5000px] bg-bg1 rounded-b-lg flex-1 p-8">
                    Doc
                  </div>
                )}
              </div>
            </div>
            <BottomBar />
          </div>
        </div>
      </div>
    </div>
  );
}
