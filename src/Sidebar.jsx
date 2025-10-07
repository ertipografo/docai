import Chat from "./Chat";
import SidebarFeatures from "./SidebarFeatures";
import Title from "./Title";
export default function Sidebar({ feature, setFeature }) {
	return (
		<div className="h-full flex flex-col xl:overflow-hidden relative mx-6">
			<Title />

			<SidebarFeatures setFeature={setFeature} feature={feature} />
			<Chat />
		</div>
	);
}
