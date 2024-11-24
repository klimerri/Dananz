import "./SectionHeader.scss";

export const SectionHeader = (props) => {
	return (
		<div className="section-header__container">
			<span className="section-header__name">{props.name}</span>

			<img className="section-header__line" src="/src/images/sectionLine.svg"></img>
		</div>
	);
};
