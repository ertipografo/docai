import SuggestedDocs from "./SuggestedDocs";
import SidebarFeatures from "./SidebarFeatures";
import Title from "./Title";
export default function Sidebar({ feature, setFeature }) {
	return (
		<div className="h-full flex flex-col relative mx-6">
			<Title />

			<SidebarFeatures setFeature={setFeature} feature={feature} />
			<div className="mt-auto hidden lg:flex">
				<SuggestedDocs />
			</div>
			{/* <Chat /> */}
		</div>
	);
}
