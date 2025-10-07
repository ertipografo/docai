import { ChevronDown } from "lucide-react";
import { features } from "./utils";

export default function Toolbar({ feature }) {
	return (
		<div className="h-full flex pl-4 pr-1 items-center gap-2">
			<div className="flex-1 flex items-center gap-2">
				<div className="h-5 w-5 bg-bg2 rounded-full" />
				<span className="whitespace-nowrap font-semibold">
					{features[feature]}
				</span>
			</div>
			<div className="flex-1 flex opacity-50 items-center font-semibold justify-center">
				1 / 53
			</div>
			<div className="flex-1 flex items-center justify-end">
				{/* <button className="h-10 flex items-center justify-center px-8 rounded  font-semibold bg-bg2">
					<span>Download</span>
					<span className="scale-75 -mr-2">
						<ChevronDown />
					</span>
				</button> */}
			</div>
		</div>
	);
}
