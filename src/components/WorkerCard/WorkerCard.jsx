import "./WorkerCard.scss";
import seo from "/src/images/seo.png";

export const WorkerCard = () => {
    return (
        <div className="worker-card__container">
            <img className="worker-card__photo" src={seo}></img>
        
            <div className="worker-card__info">
                <span className="worker-card__info_name">Arga Danaan</span>
        
                <span className="worker-card__info_post">CEO of Dananz</span>
            </div>
        </div>
    );
};
