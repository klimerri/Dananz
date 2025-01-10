import "./Portfolio.scss";
import portfolioImg from "/src/images/portfolioImg.png";
import { PageInfo } from "../../components/PageInfo/PageInfo";
import SeeMore from './../../components/SeeMore/SeeMore';
import minimalismRoom from "/src/images/portfolio/minimalist.png";
import vintageRoom from "/src/images/portfolio/vintage.png";
import modernRoom from "/src/images/portfolio/modern.png";
import transitionalRoom from "/src/images/portfolio/transitional.png";
import { useState } from "react";
import { SectionHeader } from "../../components/SectionHeader/SectionHeader";
import { WhyChooseUs } from "../../components/WhyChooseUs/WhyChooseUs";


const Portfolio = () => {
    const [list, setList] = useState([
        {
            id: "minimalistRoom",
            header: "Minimalist Room",
            image: minimalismRoom,
            description: "Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.",
            link: "/minimalist-room",
            textLink: "See More"
        },
        {
            id: "vintageRoom",
            header: "Vintage Room",
            image: vintageRoom,
            description: "Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.",
            link: "/minimalist-room",
            textLink: "See More",
            variant: "secondary"
        },
        {
            id: "modernRoom",
            header: "Modern Room",
            image: modernRoom,
            description: "Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.",
            link: "/minimalist-room",
            textLink: "See More"
        },
        {
            id: "transitionalRoom",
            header: "Transitional Room",
            image: transitionalRoom,
            description: "Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.",
            link: "/minimalist-room",
            textLink: "See More",
            variant: "secondary"
        },
    ])

    return (
        <div className="portfolio__container">
            <PageInfo 
            name="Portfolio"
            text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            imgLink={portfolioImg}/>

            
            <div className="portfolio__works">
                <SectionHeader name="PORTFOLIO" />

                <div className="portfolio_wrapper">
                    {list.map(item => {
                        return (
                            <SeeMore 
                            subTitle={item.header}
                            image={item.image}
                            description={item.description}
                            link={item.link}
                            textLink={item.textLink}
                            variant={item.variant} />
                        );
                    })}
                </div>
            </div>

            <WhyChooseUs />
        </div>
    );
};

export default Portfolio;