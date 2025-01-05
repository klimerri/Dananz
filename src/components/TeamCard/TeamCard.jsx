import "./TeamCard.scss";
import ceo1 from "/src/images/team/ceo_1.png";

const TeamCard = () => {
    return (
        <div className="team-card__container">
            <img className="team-card__image" src={ceo1}></img>

            <div className="team-card__block">
                <span className="team-card__block-header">Shoo Phar Dhie</span>

                <span className="team-card__block-post">CEO</span>
            </div>
        </div>
    );
};

export default TeamCard;