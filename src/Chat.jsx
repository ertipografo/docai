import { useState } from "react";
import { MessageCircleQuestionMark, Copy } from "lucide-react";

const Message = ({ incoming = false, children }) => {
  return (
    <div
      className={`flex gap-2 group items-center  ${
        !incoming ? "flex-row-reverse pl-5 text-white" : "pr-5 text-text1"
      } `}
    >
      <div className={`${incoming ? "bg-bg2" : "bg-violet-500"} p-2 rounded`}>
        {children}
      </div>
      <div className="cursor-pointer opacity-0 group-hover:opacity-50 w-4 h-4 flexer text-white">
        <Copy size={14} />
      </div>
    </div>
  );
};

export default function Chat() {
  const [cnt, setCnt] = useState("");
  const [show, setShow] = useState(false);
  return (
    <div className="rounded-full 2xl:rounded-none bg-bgDark 2xl:bg-bg1 w-10 fixed bottom-6 right-6 2xl:right-auto border-l border-borderColor 2xl:sticky 2xl:top-headerHeight 2xl:bottom-0 2xl:w-(--chatWidth) h-10 2xl:h-complementarySidebarMaxHeight flex flex-col justify-between">
      <div
        onClick={() => setShow((o) => !o)}
        className="h-full 2xl:h-10 flex items-center justify-center gap-2 text-violet-300 px-2 cursor-pointer"
      >
        <MessageCircleQuestionMark size={20} />
        <span className="hidden 2xl:block">Chiedi al documento</span>
      </div>
      <div
        className={`2xl:flex ${
          show ? "flex" : "hidden"
        } w-(--chatWidth) border 2xl:border-0 border-borderColor bg-bg1 min-h-[500px] absolute 2xl:relative 2xl:bottom-0 bottom-full right-0 rounded-xl flex-col justify-end p-4 gap-2 mb-2 2xl:mb-0`}
      >
        <div className="flex flex-col gap-2">
          <Message>Di cosa parla questo bel documentino?</Message>
          <Message incoming={true}>Bo che lo chiedi a me?</Message>
          <Message>Dai cazzo te costa dirmelo?</Message>
          <Message incoming={true}>
            Ao frate l'esame è il tuo me dispiace, cazzi tuoi 😋
          </Message>
          <Message>Magari mori</Message>
          <Message incoming={true}>
            or sit amet consectetur adipisicing elit. Consectetur alias
            voluptates veniam delectus dolores corrupti! Sint amet facilis
            distinctio pariatur officia illum voluptatibus ex illo blanditiis
            neque ab, nobis in. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Consectetur alias voluptates veniam delectus
            dolores corrupti! Sint amet facilis distinctio pariatur officia
            illum voluptatur adipisicing elit. Consectetur alias rupti! Sint
            amet facilis distinctio pariatur officia illum voluptatibus ex illo
            blanditiis neque ab, nobis in
          </Message>
        </div>
        <div className="bg-bg1 rounded-md overflow-hidden border border-borderColor flex flex-col pointer-events-auto">
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
                  ? "bg-blue-500 text-white cursor-pointer"
                  : "bg-bg2 text-text2"
              } py-1 px-2 rounded`}
            >
              Chiedi
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
