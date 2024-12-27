import "./ChooseCard.scss";

export const ChooseCard = (props) => {
	return (
		<div className="choose-card">
			<div className="choose-card__container">
				<img className="choose-card__image" src="/src/images/ChooseCard.svg"></img>

				<span className="choose-card__header">{props.name}</span>

				<p className="choose-card__text">{props.text}</p>
			</div>
		</div>
	);
};
