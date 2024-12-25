import "./ProductCard.scss";
import arrow from "/src/images/arrow-right.svg";

export const ProductCard = () => {
    return (
        <div className="card__container">
                <div className="card__header">
                    <span className="card__header-number">{props.headerNumber}</span>

                    <div className="card__header-info">
                        <h3 className="card__header-title">{props.headerName}</h3>

                        <p className="card__header-text">{props.headerText}</p>
                    </div>
                </div>

                <button className="card__button">
                    <img className="card__button-sign" src={arrow}></img>
                </button>
        </div>
    );
}