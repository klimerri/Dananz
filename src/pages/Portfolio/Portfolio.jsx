import "./Portfolio.scss";
import portfolioImg from "/src/images/portfolioImg.png";
import { PageInfo } from "../../components/PageInfo/PageInfo";
import { WorkerCard } from "../../components/WorkerCard/WorkerCard";
import SeeMore from './../../components/SeeMore/SeeMore';

const Portfolio = () => {
    return (
        <div className="portfolio__container">
            <PageInfo 
            name="Portfolio"
            text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            imgLink={portfolioImg}/>

            <SeeMore />
            <SeeMore variant="secondary"/>
            <SeeMore />
            <SeeMore />
        </div>
    );
};

export default Portfolio;