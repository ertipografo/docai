import { Menu, Star, FileText } from "lucide-react";
import Doc from "./Doc";
export default function OutBar({ show, setShow }) {
	const sections = [Star, FileText];

	return (
		<div className="flex flex-col relative text-textOnDark">
			<div
				onClick={() => setShow((s) => !s)}
				className={`${
					show ? "bg-bg1 text-text1" : "hover:bg-bgDark"
				} aspect-square items-center justify-center cursor-pointer hidden lg:flex`}
			>
				<Menu size={18} />
			</div>
			{sections.map((Section, idx) => (
				<div
					key={idx}
					className="relative group w-full aspect-square bg-bgDark flex items-center justify-center hover:bg-bgDarker cursor-pointer"
				>
					<Section size={18} />
					<div className="pointer-events-none absolute top-0 left-full w-xs bg-bgDarker opacity-0 group-hover:opacity-100 transition-opacity flex flex-col gap-2 p-2 rounded-r">
						{Array.from({ length: 5 }).map((_, index) => (
							<Doc
								className="bg-transparent"
								key={index}
								idx={index}
							/>
						))}
					</div>
				</div>
			))}
		</div>
	);
}
