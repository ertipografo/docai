import { Network, FileText, Scissors, ShieldQuestionMark } from "lucide-react";
import Tree from "./Tree";
import Chat from "./Chat";

export const features = [
  {
    label: "Transcript",
    Icon: FileText,
    value: "originale",
    hasComplementary: Chat,
  },
  { label: "Riassunto", Icon: Scissors, value: "riassunto" },
  {
    label: "Mappa Concettuale",
    Icon: Network,
    value: "mappa",
    hasComplementary: Tree,
  },
  {
    label: "Quiz",
    Icon: ShieldQuestionMark,
    value: "quiz",
  },
];

export const documentTitle =
  "Il Sultanato dell'Oman dagli anni 70 ai giorni nostri";

export function getRandomArbitrary(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const titles = [
  "Ipsum dolor sit amet consectetur adipisicing elit alias voluptates",
  "Consectetur alias voluptates veniam",
  "delectus dolores corrupti sint amet facilis",
  "Distinctio pariatur officia illum voluptatibus ex illo blanditiis neque ab",
  "Nobis in. Lorem ipsum dolor sit amet consectetur adipisicing elit",
  " Consectetur alias voluptates venia",
];
