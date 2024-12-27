import "./ProductCard.scss";
import arrow from "/src/images/arrow-right.svg";

export const ProductCard = ({ variant = "1", headerNumber, headerName, headerText }) => {
    return (
        <div className={`card ${variant === "1" ? "detailed" : "simple"}`}>
            <div className="card__container">
                    <div className="card__header">
                        <span className="card__header-number">{headerNumber}</span>

                        <div className="card__header-info">
                            <h3 className="card__header-title">{headerName}</h3>

                            <p className="card__header-text">{headerText}</p>
                        </div>
                    </div>

                    <button className="card__button">
                        <img className="card__button-sign" src={arrow}></img>
                    </button>
            </div>
        </div>
    );
}