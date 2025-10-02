import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { documentTitle } from "./utils";

const Fonti = () => {
	return (
		<div className="flex flex-col text-sm gap-2">
			<div className="py-1 px-2 bg-gray-100 rounded">
				Primo Documento fonte per la nota
			</div>
			<div className="py-1 px-2 bg-gray-100 rounded">
				Secondo Documento fonte per la nota
			</div>
			<div className="py-1 px-2 bg-gray-100 rounded">
				Ultimo Documento fonte per la nota
			</div>
		</div>
	);
};

export default function Title() {
	const [show, setShow] = useState(false);
	return (
		<div className="flex gap-4 flex-col p-4 border-b borderColor">
			<div className="h-8">
				<div className="h-full aspect-square bg-gray-200 rounded-lg" />
			</div>
			<div className="flex flex-col gap-4">
				<h1 className="font-semibold text-xl leading-tight">
					{documentTitle}
				</h1>
				<p className="max-w-4xl text-sm text-gray-500 leading-relaxed">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Illo velit cupiditate, fugit accusamus ipsam temporibus
					rerum nisi.
				</p>
				<div className="flex justify-between text-xs items-center">
					<div className="flex gap-1 opacity-50">
						<span>Modificato:</span>
						<span className="font-semibold">23.5.2025</span>
					</div>
					<div
						onClick={() => setShow((s) => !s)}
						className="flex gap-2 items-center bg-gray-200 hover:bg-gray-300 cursor-pointer p-1 rounded-full pl-3"
					>
						<div className="scale-75 -mx-2">
							<ChevronDown />
						</div>
						<span>Fonti</span>
						<span className="h-5 flex items-center bg-gray-500 aspect-square justify-center text-white rounded-full">
							4
						</span>
					</div>
				</div>
				{show && <Fonti />}
			</div>
		</div>
	);
}
