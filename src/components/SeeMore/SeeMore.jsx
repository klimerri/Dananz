import "./SeeMore.scss";
import { WorkerCard } from "/src/components/WorkerCard/WorkerCard";
import { Link } from "react-router-dom";

const SeeMore = ({variant = "primary", mainHeader, image, description, link, textLink, subTitle}) => {
    return (
        <div className="see-more__container">
            <h2 className="see-more__header">{mainHeader}</h2>
        
            <div className="see-more__main">
                <img className={`see-more__main-image__${variant}`} src={image}></img>
            
                <div className={`see-more__main-card__${variant}`}>
                    <WorkerCard />
                </div>
            
                <div className={`see-more__main-text__${variant}`}>
                    <h2 className="see-more__main-text__subtitle">{subTitle}</h2>

                    <p className="see-more__main-text__description">{description}</p>
            
                    <Link to={link} className="see-more__main-text__link">{textLink}</Link>
                </div>
            </div>
        </div>

    )
}

export default SeeMore;