import { useState } from "react";
import { MessageCircleQuestionMark, Copy } from "lucide-react";

const Message = ({ incoming = false, children }) => {
  return (
    <div
      className={`flex gap-2 group items-center  ${
        !incoming ? "flex-row-reverse pl-5 text-white" : "pr-5 text-text1"
      } `}
    >
      <div
        className={`${
          incoming ? "bg-bg2" : "bg-indigo-100 text-indigo-900"
        } p-2 rounded`}
      >
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
  return (
    <div className="h-full flex flex-col justify-end p-2 gap-2">
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
  );
}
