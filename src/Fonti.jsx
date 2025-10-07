import { Image, FileText, FileAudio } from "lucide-react";

export default function Fonti() {
	return (
		<div className="flex flex-col rounded max-w-sm w-full ml-auto bg-bg2">
			<div className="flex items-center gap-2 p-2">
				<FileText size={18} />
				<span className="font-semibold">
					Primo Documento fonte per la nota
				</span>
			</div>
			<div className="flex items-center gap-2 p-2">
				<Image size={18} />
				<span className="font-semibold">
					Foto scattata il 23.5.2025
				</span>
			</div>
			<div className="flex items-center gap-2 p-2">
				<FileAudio size={18} />
				<span className="font-semibold">
					Audio registrazione di maggio
				</span>
			</div>
		</div>
	);
}
