import "./SeeMore.scss";
import { WorkerCard } from "/src/components/WorkerCard/WorkerCard";
import aboutHome from "/src/images/aboutHome.png";

const SeeMore = ({variant = "primary", header, image, description, link, textLink}) => {
    return (
        <div className="see-more__container">
            <h2 className="see-more__header">{header}</h2>
        
            <div className="see-more__main">
                <img className={`see-more__main-image__${variant}`} src={image}></img>
            
                <div className={`see-more__main-card__${variant}`}>
                    <WorkerCard />
                </div>
            
                <div className={`see-more__main-text__${variant}`}>
                    <p className="see-more__main-text__description">{description}
                    </p>
            
                    <a href={link} className="see-more__main-text__link">{textLink}</a>
                </div>
            </div>
        </div>

    )
}

export default SeeMore;