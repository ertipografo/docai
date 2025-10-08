import { useState } from "react";
import { features } from "./utils";

import Document from "./Document";
import Chat from "./Chat";
import Toolbar from "./Toolbar";

export default function Feature({ feature }) {
  const [open, setOpen] = useState(false);
  const currentFeature = features.find((f) => f.value === feature);
  const ComplementaryComponent = feature && currentFeature.hasComplementary;
  return (
    <div className="flex flex-col relative border-t border-borderColor lg:border-t-0">
      <Toolbar feature={feature} setOpen={setOpen} open={open} />
      <div className="flex-1 flex">
        {!!ComplementaryComponent && (
          <div
            className={`${
              open ? "w-complementarySidebarWidth border-r " : "w-0"
            } sticky top-headerHeight h-complementarySidebarMaxHeight flex flex-col transition-all bg-bg1 z-30 overflow-hidden border-borderColor`}
          >
            <div className={`${open ? "block" : "hidden"}`}>
              <ComplementaryComponent />
            </div>
          </div>
        )}
        <div className="flex-1 bg-bg2">
          {feature === "mappa" ? (
            <div className="bg-bg1 h-full p-4">{feature}</div>
          ) : (
            <div className="mx-auto max-w-5xl p-2">
              <Document />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
