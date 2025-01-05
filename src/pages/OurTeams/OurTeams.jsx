import "./OurTeams.scss";
import { PageInfo } from "/src/components/PageInfo/PageInfo"; 
import teamsImg from "/src/images/teamsIMG.png";
import { WhyChooseUs } from './../../components/WhyChooseUs/WhyChooseUs';
import TeamCard from "../../components/TeamCard/TeamCard";
import { SectionHeader } from "../../components/SectionHeader/SectionHeader";
import ceo_1 from "/src/images/team/ceo_1.png";
import ceo_2 from "/src/images/team/ceo_2.png";
import ceo_3 from "/src/images/team/ceo_3.png";
import ceo_4 from "/src/images/team/ceo_4.png";
import ceo_5 from "/src/images/team/ceo_5.png";
import ceo_6 from "/src/images/team/ceo_6.png";
import ceo_7 from "/src/images/team/ceo_7.png";
import ceo_8 from "/src/images/team/ceo_8.png";
import { useState } from "react";

const OurTeams = () => {
    const [designerList, setDesignerList] = useState([
        {
            id: 1,
            image: ceo_1,
            designerName: "Shoo Phar Dhie",
            post: "CEO"
        },
        {
            id: 2,
            image: ceo_2,
            designerName: "Shoo Phar Dhie",
            post: "CEO"
        },
        {
            id: 3,
            image: ceo_3,
            designerName: "Shoo Phar Dhie",
            post: "CEO"
        },
        {
            id: 4,
            image: ceo_4,
            designerName: "Shoo Phar Dhie",
            post: "CEO"
        },
        {
            id: 5,
            image: ceo_5,
            designerName: "Shoo Phar Dhie",
            post: "CEO"
        },
        {
            id: 6,
            image: ceo_6,
            designerName: "Shoo Phar Dhie",
            post: "CEO"
        },
        {
            id: 7,
            image: ceo_7,
            designerName: "Shoo Phar Dhie",
            post: "CEO"
        },
        {
            id: 8,
            image: ceo_8,
            designerName: "Shoo Phar Dhie",
            post: "CEO"
        },
    ]);

    return (
        <div className="teams-page__container">
            <PageInfo 
                name="Our Teams"
                text="It is a long established fact that a reader will
                 be distracted by the readable content of a page when looking at its layout."
                imgLink={teamsImg}
            />

            <div className="teams-page__designer">
                <SectionHeader name="DESIGNER" />

                <h2 className="teams-page__designer-header">Creative Person</h2>

                <p className="teams-page__designer-text">Customize your interior design into a dream place 
                    with the best designers and quality furniture. 
                    We try our best to fulfill your expectations.
                </p>

                <div className="teams-page__designer-wrapper">
                    {designerList.map(item => {
                        return (
                            <TeamCard 
                            image={item.image}
                            header={item.designerName}
                            post={item.post}
                            />
                        )
                    })}
                </div>

            </div>

            <WhyChooseUs />
        </div>
    );
};

export default OurTeams;
