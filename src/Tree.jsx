export default function Tree() {
	return (
		<ul className="tree">
			<li>
				<span>La situazione dell'Oman</span>
				<ul>
					<li>
						<span>Dal 1948 al 1970</span>
					</li>
					<li>
						<span>Dal 1970 al 1980</span>
					</li>
					<li>
						<span>Dal 1980 al 2000</span>
					</li>
				</ul>
			</li>
			<li>
				<span>Economia</span>
				<ul>
					<li>
						<span>Esportazioni di petrolio</span>
					</li>
					<li>
						<span>Esportazioni di diamanti</span>
					</li>
					<li>
						<span>Settore manufatturiero</span>
					</li>
					<li>
						<span>Turismo</span>
						<ul>
							<li>
								<span>Bello il mare</span>
							</li>
							<li>
								<span>Non ce so le montagne</span>
								<ul>
									<li>
										<span>Bello il mare</span>
									</li>
									<li>
										<span>Non ce so le montagne</span>
									</li>
								</ul>
								<ul>
									<li>
										<span>Bello il mare</span>
									</li>
									<li>
										<span>Non ce so le montagne</span>
									</li>
								</ul>
							</li>
						</ul>
					</li>
				</ul>
			</li>
		</ul>
	);
}
