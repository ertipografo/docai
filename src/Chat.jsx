import { Copy, X } from "lucide-react";
import { useState } from "react";
const Message = ({ incoming = false, children }) => {
  return (
    <div
      className={`flex gap-2 group items-center  ${
        !incoming ? "flex-row-reverse pl-5" : "pr-5"
      } `}
    >
      <div
        className={`${
          !incoming ? "bg-white" : "bg-violet-200"
        } p-3 rounded-button leading-relaxed`}
      >
        {children}
      </div>
      <div className="cursor-pointer hover:opacity-100 opacity-0 group-hover:opacity-50 w-4 h-4 flexer">
        <Copy size={14} />
      </div>
    </div>
  );
};

function ChatComponent({ setShowChat }) {
  const [cnt, setCnt] = useState("");
  return (
    <div className="h-full flex flex-col justify-end gap-2 text-violet-900">
      <div className="font-semibold flex items-center justify-between">
        <span>Chiedi al documento</span>
        <div
          onClick={() => setShowChat(false)}
          className="hover:bg-violet-200  cursor-pointer flexer h-buttonHeight w-buttonHeight rounded-button"
        >
          <X size={18} />
        </div>
      </div>
      <div className="flex flex-col gap-2 flex-1 justify-end">
        <Message>Di cosa parla questo bel documentino?</Message>
        <Message incoming={true}>Bo che lo chiedi a me?</Message>
        <Message>Dai cazzo te costa dirmelo?</Message>
        <Message incoming={true}>
          Ao frate l'esame è il tuo me dispiace, cazzi tuoi 😋
        </Message>
        <Message>Magari mori</Message>
        <Message incoming={true}>
          or sit amet consectetur adipisicing elit. Consectetur alias voluptates
          veniam delectus dolores corrupti! Sint amet facilis distinctio
          pariatur officia illum voluptatibus ex illo blanditiis neque ab, nobis
          in. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Consectetur alias voluptates veniam delectus dolores corrupti! Sint
          amet facilis distinctio pariatur officia illum voluptatur adipisicing
          elit. Consectetur alias rupti! Sint amet facilis distinctio pariatur
          officia illum voluptatibus ex illo blanditiis neque ab, nobis in
        </Message>
      </div>
      <div className="bg-bg1 rounded-button border border-violet-200 overflow-hidden flex flex-col pointer-events-auto">
        <input
          value={cnt}
          placeholder="Chiedi al documento..."
          onChange={(e) => setCnt(e.target.value)}
          className="bg-transparent p-3 outline-none w-full"
        />
        <div className="flex justify-end gap-2 items-center p-2">
          <div
            className={`${
              cnt
                ? "bg-violet-500 text-white cursor-pointer"
                : "bg-bg2 text-text2"
            } h-buttonHeight flexer px-3 rounded-button`}
          >
            Chiedi
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Chat({ showChat, setShowChat }) {
  return (
    <div
      className={`bg-transparent lg:bg-bg2 z-[99998] ${
        !showChat
          ? "w-0 min-w-0 lg:w-0"
          : "min-w-chatWidth w-[50vw] lg:min-w-chatWidth lg:w-[20vw]"
      } transition-all h-sidebarMaxHeight lg:h-chatHeight right-0 lg:right-auto top-headerHeight lg:top-chatTop fixed lg:sticky flex flex-col`}
    >
      {showChat && (
        <div className="bg-transparent flex-1 w-full p-3 pt-0">
          <div className="h-full bg-violet-100 p-3 rounded-panel">
            <ChatComponent setShowChat={setShowChat} />
          </div>
        </div>
      )}
    </div>
  );
}
