import { ChevronDown } from "lucide-react";

export default function Title() {
	return (
		<div className="flex flex-col gap-4 p-8 border-b border-gray-200">
			<h1 className="font-semibold text-xl leading-tight">
				Storia dell'Oman, dalla fondazione ai giorni nostri
			</h1>
			<p className="max-w-4xl text-sm text-gray-500 leading-relaxed">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
				velit cupiditate, fugit accusamus ipsam temporibus rerum nisi,
				veniam consequatur exercitationem consequuntur eum laudantium
				eius corrupti dolores dolor aliquam repellat beatae?
			</p>
			<div className="flex justify-between text-xs items-center">
				<div className="flex gap-1 opacity-50">
					<span>Modificato:</span>
					<span className="font-semibold">23.5.2025</span>
				</div>
				<div className="flex gap-2 items-center bg-gray-200 hover:bg-gray-300 cursor-pointer p-1 rounded-full pl-3">
					<div className="scale-75 -mx-2">
						<ChevronDown />
					</div>
					<span>Fonti</span>
					<span className="h-5 flex items-center bg-gray-500 aspect-square justify-center text-white rounded-full">
						4
					</span>
				</div>
			</div>
		</div>
	);
}
