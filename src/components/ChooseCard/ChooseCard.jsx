import "./ChooseCard.scss";

export const ChooseCard = (props) => {
	return (
		<div className="card__container">
			<img className="card__image" src="/src/images/ChooseCard.svg"></img>

			<span className="card__header">{props.name}</span>

			<p className="card__text">{props.text}</p>
		</div>
	);
};
