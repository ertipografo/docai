import { Star, MessageCircleQuestionMark, Copy, X } from "lucide-react";
import { useState } from "react";

const Message = ({ incoming = false, children }) => {
  return (
    <div
      className={`flex gap-2 group items-center  ${
        !incoming ? "flex-row-reverse pl-5 text-white" : "pr-5 text-text1"
      } `}
    >
      <div
        className={`${
          !incoming
            ? "bg-textOnDark/15 text-textOnDark/70"
            : "bg-purple-100 text-purple-900"
        } p-2 rounded`}
      >
        {children}
      </div>
      <div className="cursor-pointer hover:opacity-100 opacity-0 group-hover:opacity-50 w-4 h-4 flexer">
        <Copy size={14} />
      </div>
    </div>
  );
};

function Chat() {
  const [cnt, setCnt] = useState("");
  return (
    <div className="h-full flex flex-col justify-end p-2 pt-0 gap-2">
      <div className="h-10 font-semibold p-1 flex items-center justify-between">
        <span>Chat</span>
        <X size={16} />
      </div>
      <div className="flex flex-col gap-2">
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
      <div className="bg-textOnDark/10 rounded-md overflow-hidden border border-textOnDark/20 flex flex-col pointer-events-auto">
        <input
          value={cnt}
          placeholder="Chiedi al documento..."
          onChange={(e) => setCnt(e.target.value)}
          className="bg-transparent p-2 outline-none w-full"
        />
        <div className="flex justify-end gap-2 items-center p-2">
          <div
            className={`${
              cnt
                ? "bg-purple-500 text-white cursor-pointer"
                : "bg-bgDark text-textOnDark/50"
            } py-1 px-2 rounded`}
          >
            Chiedi
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BottomBar() {
  const [openChat, setOpenChat] = useState(false);
  return (
    <div className="h-1 bg-red-500 sticky bottom-3">
      <div className="absolute bottom-full w-full left-0 h-headerHeight flex px-3">
        <div className="flex-1 items-center flex">
          <div className="flex gap-3 items-center h-buttonHeight px-3 bg-bg1 rounded bg-bg2">
            <div className="flex gap-2 items-center text-xs font-semibold">
              <Star className="text-transparent fill-amber-400" size={16} />
              <span>
                4.6 <span className="text-text2">(263)</span>
              </span>
            </div>
          </div>
        </div>
        <div className="flex-1 flexer">
          <div className="h-buttonHeight flexer rounded bg-bg2 bg-bg1 min-w-14 text-xs font-semibold">
            1 / 34
          </div>
        </div>
        <div className="flex-1 flex items-center justify-end relative">
          {openChat && (
            <div className="absolute bottom-full right-0 w-[75vw] max-w-sm rounded-xl bg-bgDark text-textOnDark">
              <Chat />
            </div>
          )}
          <div
            onClick={() => setOpenChat((s) => !s)}
            className="bg-bgDark cursor-pointer flexer text-textOnDark h-buttonHeight w-buttonHeight rounded"
          >
            {openChat ? (
              <X size={16} />
            ) : (
              <MessageCircleQuestionMark size={16} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
