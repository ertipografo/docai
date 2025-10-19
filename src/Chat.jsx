import { Copy, X } from "lucide-react";
import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
const Bubble = ({ idx, chatMessage }) => {
  const isAnswer = idx % 2 !== 0;
  return (
    <div className={`${isAnswer ? "flex-row" : "flex-row-reverse"} flex`}>
      <div
        className={`leading-relaxed p-3 rounded-panel ${
          isAnswer ? "bg-violet-300" : "bg-white text-violet-900"
        }`}
      >
        {chatMessage}
      </div>
      <div className="min-w-12" />
    </div>
  );
};

export default function Chat() {
  const [val, setVal] = useState("");
  const key = "cavai_chat";
  const submitMessage = () => {
    let retrieved = localStorage.getItem(key) || "[]";
    retrieved = JSON.parse(retrieved);
    if (val) {
      retrieved.unshift(val);
    }
    localStorage.setItem(key, JSON.stringify(retrieved));
    setChatMessages(retrieved);
  };

  const [chatMessages, setChatMessages] = useState(
    JSON.parse(localStorage.getItem(key) || "[]")
  );

  return (
    <div className="flex flex-col overflow-hidden bg-violet-100 rounded-panel">
      <div className="h-btn bg-violet-100 flexer text-violet-900 font-semibold">
        Chiedi al documento
      </div>
      <PerfectScrollbar
        options={{ wheelPropagation: false }}
        className="flex flex-col-reverse gap-padding-sm p-padding-sm h-[70vh] max-h-[500px]"
      >
        {chatMessages.map((chatMessage, i) => (
          <Bubble key={i} chatMessage={chatMessage} idx={i} />
        ))}
      </PerfectScrollbar>

      <div className="h-header rounded-btn bg-bg1 flex px-padding-sm m-padding-sm mt-0">
        <input
          value={val}
          placeholder="Chiedi al documento..."
          onChange={(e) => setVal(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              submitMessage();
              setVal("");
            }
          }}
          className="placeholder:text-text2 outline-none h-btn flex flex-1 items-center"
        />
      </div>
    </div>
  );
}
