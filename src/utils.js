import { Network, FileText, Scissors, ShieldQuestionMark } from "lucide-react";
import Tree from "./Tree";
export const features = [
	{ label: "Documento Originale", Icon: FileText, value: "originale" },
	{ label: "Riassunto", Icon: Scissors, value: "riassunto" },
	{
		label: "Mappa Concettuale",
		Icon: Network,
		value: "mappa",
		hasComplementary: Tree,
	},
	{ label: "Quiz", Icon: ShieldQuestionMark, value: "quiz" },
];

export const documentTitle =
	"Il Sultanato dell'Oman dagli anni 70 ai giorni nostri";
