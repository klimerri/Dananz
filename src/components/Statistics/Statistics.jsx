import "./Statistics.scss";

export const Statistics = () => {
	return (
		<div className="statistics__container">
			<ul className="statistics__list">
				<li className="projects">
					<div className="projects__count">350+</div>

					<span className="projects__text">Project Completed</span>
				</li>
				<li className="teams">
					<div className="teams__count">23+</div>

					<span className="teams__text">Professional Teams</span>
				</li>
				<li className="experience">
					<div className="experience__count">15+</div>

					<span className="experience__text">Years Experience</span>
				</li>
			</ul>
		</div>
	);
};
