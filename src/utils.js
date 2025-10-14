import {
  Network,
  FileText,
  Scissors,
  ShieldQuestionMark,
  MessageSquareText,
} from "lucide-react";
import Tree from "./Tree";

export const features = [
  {
    label: "Documento Originale",
    Icon: FileText,
    value: "originale",
  },
  { label: "Riassunto", Icon: Scissors, value: "riassunto", hasFormats: true },
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
    hasFormats: true,
    hasComplementary: Tree,
  },
];

export const documentTitle =
  "NUOVO PANIERE 2025 CLIL Ecampus INGLESE 8 Ottobre 2024 didattica insegnamento CLIL 2";

export function getRandomArbitrary(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const titles = [
  "Ipsum dolor sit amet consectetur adipisicing elit alias voluptates",
  "Consectetur alias voluptates veniam",
  "Delectus dolores corrupti sint amet facilis",
  "Distinctio pariatur officia illum voluptatibus ex illo blanditiis neque ab",
  "Nobis in. Lorem ipsum dolor sit amet consectetur adipisicing elit",
  " Consectetur alias voluptates venia",
];
