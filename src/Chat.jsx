import { useState } from "react";
import { MessageCircleQuestionMark, Copy } from "lucide-react";

const Message = ({ incoming = false, children }) => {
	return (
		<div
			className={`flex gap-2 group items-center ${
				!incoming ? "flex-row-reverse pl-5" : "pr-5"
			} `}
		>
			<div
				className={`${
					incoming ? "bg-gray-200" : "bg-violet-500 text-white"
				} p-2 rounded`}
			>
				{children}
			</div>
			<div className="text-gray-500 cursor-pointer opacity-0 group-hover:opacity-100 w-4 h-4 flexer">
				<Copy size={14} />
			</div>
		</div>
	);
};

export default function Chat() {
	const [cnt, setCnt] = useState("");
	const [show, setShow] = useState(false);
	return (
		<>
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
				} w-(--chatWidth) bg-gray-800 min-h-[500px] absolute 2xl:relative 2xl:bottom-0 bottom-full right-0 rounded-xl flex-col justify-end p-4 gap-2 mb-2 2xl:mb-0`}
			>
				<div className="flex flex-col gap-2">
					<Message>Di cosa parla questo bel documentino?</Message>
					<Message incoming={true}>Bo che lo chiedi a me?</Message>
					<Message>Dai cazzo te costa dirmelo?</Message>
					<Message incoming={true}>
						Ao frate l'esame è il tuo me dispiace, cazzi tuoi 😋
					</Message>
					<Message>Magari mori</Message>
				</div>
				<div className="bg-gray-700/50 rounded-md overflow-hidden border border-gray-600 flex flex-col pointer-events-auto">
					<input
						value={cnt}
						placeholder="Chiedi al documento..."
						onChange={(e) => setCnt(e.target.value)}
						className="bg-transparent text-white p-2 outline-none w-full placeholder:text-gray-400"
					/>
					<div className="flex justify-end gap-2 items-center p-2">
						<div
							className={`${
								cnt
									? "bg-blue-500 text-white cursor-pointer"
									: "bg-gray-500 text-gray-300"
							} py-1 px-2 rounded`}
						>
							Chiedi
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

/* 


const Message = ({ incoming = false, children }) => {
	return (
		<div
			className={`flex gap-2 ${
				!incoming ? "flex-row-reverse pl-5" : "pr-5"
			} `}
		>
			<div
				className={`${
					incoming ? "bg-gray-100" : "bg-blue-100"
				} p-2 rounded`}
			>
				{children}
			</div>
		</div>
	);
};

export default function Chat() {
	const [cnt, setCnt] = useState("");
	const [active, setActive] = useState(false);

	return (
		<div
			className={`${
				active ? "bg-gray-500/10" : "pointer-events-none"
			} mb-6 mt-auto flex flex-col p-2 gap-2 rounded-xl fixed lg:relative bottom-0 lg:left-0 lg:right-0 left-2 right-2`}
		>
			<div
				className={`${
					active ? "top-0" : "top-2 opacity-0"
				} transition-all p-2 relative bgPrimary border borderColor rounded-md flex flex-col gap-3 min-h-[300px]`}
			>
				<Message>Di cosa parla questo bel documentino?</Message>
				<Message incoming={true}>Bo che lo chiedi a me?</Message>
				<Message>Dai cazzo te costa dirmelo?</Message>
				<Message incoming={true}>
					Ao frate l'esame è il tuo me dispiace, cazzi tuoi 😋
				</Message>
				<Message>Magari mori</Message>
			</div>
			<div className="bgPrimary rounded-md overflow-hidden border borderColor flex flex-col pointer-events-auto">
				<input
					onFocus={() => setActive(true)}
					onBlur={() => setActive(false)}
					value={cnt}
					placeholder="Chiedi al documento..."
					onChange={(e) => setCnt(e.target.value)}
					className="bg-transparent p-2 outline-none w-full placeholder:text-gray-400"
				/>
				<div className="flex justify-end gap-2 items-center p-2">
					<div
						className={`${
							cnt
								? "bg-blue-500 text-white cursor-pointer"
								: "bg-gray-100 text-gray-300"
						} py-1 px-2 rounded`}
					>
						Chiedi
					</div>
				</div>
			</div>
		</div>
	);
}
 */
