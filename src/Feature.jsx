import Toolbar from "./Toolbar";

export default function Feature({ feature, setFeature }) {
	return (
		<>
			<div className="feature flex flex-col">
				<div className="sticky top-(--headerHeight) flex bg-white z-50">
					<div className="left" />
					<div className="main">
						<div className="sticky py-1 top-(--featureSidebarTop) h-(--toolbarHeight)">
							<Toolbar
								feature={feature}
								setFeature={setFeature}
							/>
						</div>
					</div>
				</div>
				<div className="flex">
					<div className="border-r border-gray-200 left sticky top-(--featureSidebarTop) h-(--featureSidebarHeight)">
						ss
					</div>
					<div className="h-[2000px] p-10">{feature}</div>
				</div>
			</div>
			{/* <div className="main">
				<div className="border-x bg-gray-50 border-gray-200 min-h-[2000px]"></div>
			</div> */}
		</>
	);
}
