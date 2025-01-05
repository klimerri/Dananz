import "./TeamCard.scss";
import ceo1 from "/src/images/team/ceo_1.png";

const TeamCard = ({image, header, post}) => {
    return (
        <div className="team-card__container">
            <img className="team-card__image" src={image}></img>

            <div className="team-card__block">
                <span className="team-card__block-header">{header}</span>

                <span className="team-card__block-post">{post}</span>
            </div>
        </div>
    );
};

export default TeamCard;