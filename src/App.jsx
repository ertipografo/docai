export default function App() {
	return (
		<div className="flex flex-col h-screen overflow-hidden">
			<div className="h-14 bg-violet-300">Header</div>
			<div className="flex-1 flex overflow-hidden">
				<div className="w-14 bg-green-200" />
				<div className="flex flex-col xl:flex-row flex-1 overflow-auto">
					<div className="xl:w-xs bg-blue-200 min-h-20 relative z-50">
						title area
					</div>
					<div className="flex-1 overflow-visible xl:overflow-auto">
						<div className="flex flex-col bg-orange-200 px-2 pb-2 relative">
							<div className="flex pl-2 pr-4 xl:hidden fixed z-30 top-14 left-14 right-0">
								<div className="bg-orange-200 flex-1 h-12 items-center flex">
									Fake title goes here
								</div>
							</div>
							<div className="pt-2 bg-orange-200 sticky top-10 xl:top-0 z-20">
								<div className="h-12 bg-teal-300" />
							</div>
							<div className="flex flex-col relative items-center">
								<div className="h-12 bg-orange-200 sticky top-24 xl:top-14 pt-2 w-full flex flex-col items-center">
									<div className="bg-purple-400 h-12 max-w-7xl w-full" />
								</div>
								<div className="min-h-[2999px] bg-white max-w-7xl w-full">
									content
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
