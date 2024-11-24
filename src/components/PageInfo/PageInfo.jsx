import "./PageInfo.scss";

export const PageInfo = (props) => {
	return (
		<div className="name-section__container">
			<h1 className="name-section__header">{props.name}</h1>

			<p className="name-section__text">{props.text}</p>

			<img className="name-section__image" src={props.imgLink}></img>
		</div>
	);
};
