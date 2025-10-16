import { Copy, X } from "lucide-react";
import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
const Bubble = ({ idx, chatMessage }) => {
  const isAnswer = idx % 2 !== 0;
  return (
    <div className={`${isAnswer ? "flex-row" : "flex-row-reverse"} flex`}>
      <div
        className={`leading-relaxed p-3 rounded-btn ${
          isAnswer ? "bg-gray-700" : "bg-violet-100 text-violet-900"
        }`}
      >
        {chatMessage}
      </div>
      <div className="min-w-20" />
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
    <div className="flex flex-col overflow-hidden">
      <PerfectScrollbar
        options={{ wheelPropagation: false }}
        className="flex flex-col-reverse gap-padding-sm p-padding-sm max-h-[300px] h-full"
      >
        {chatMessages.map((chatMessage, i) => (
          <Bubble key={i} chatMessage={chatMessage} idx={i} />
        ))}
      </PerfectScrollbar>

      <div className="h-header bg-gray-700 text-gray-300/80 flex items-center px-padding-sm">
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
          className="placeholder:text-text-dark/30 outline-none h-btn flex flex-1 items-center"
        />
      </div>
    </div>
  );
}
