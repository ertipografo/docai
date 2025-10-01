import { ChevronDown } from "lucide-react";
import { features } from "./utils";
import { useState } from "react";

export default function SidebarFeatures() {
	const [openTab, setOpenTab] = useState(null);
	return (
		<div>
			<div className="flex flex-col border-b border-gray-200 rounded divide-y divide-gray-200">
				{Object.keys(features).map((k) => {
					return (
						<div key={k}>
							<div
								className="hover:bg-gray-50 gap-2 h-12 flex text-xs items-center px-4 cursor-pointer"
								onClick={() =>
									setOpenTab(openTab === k ? null : k)
								}
							>
								<div className="h-5 w-5 bg-gray-200 rounded-full" />
								<span className="font-semibold">
									{features[k]}
								</span>
								<div
									className={`scale-75 ml-auto ${
										openTab !== k
											? "text-gray-300"
											: "-rotate-90"
									}`}
								>
									<ChevronDown />
								</div>
							</div>
							{openTab === k && (
								<div className="p-4 border-t border-gray-200">
									<ul className="tree text-sm">
										<li>
											<span>La situazione dell'Oman</span>
											<li>
												<span>Dal 1948 al 1970</span>
											</li>
											<li>
												<span>Dal 1970 al 1980</span>
											</li>
											<li>
												<span>Dal 1980 al 2000</span>
											</li>
										</li>
										<li>
											<span>Economia</span>

											<li>
												<span>
													Esportazioni di petrolio
												</span>
											</li>
											<li>
												<span>
													Esportazioni di diamanti
												</span>
											</li>
											<li>
												<span>
													Settore manufatturiero
												</span>
											</li>
											<li>
												<span>Turismo</span>
												<li>
													<span>Bello il mare</span>
												</li>
												<li>
													<span>
														Non ce so le montagne
													</span>
												</li>
											</li>
										</li>
									</ul>
								</div>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
}
