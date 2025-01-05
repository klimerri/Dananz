import "./OurTeams.scss";
import { PageInfo } from "/src/components/PageInfo/PageInfo"; 
import teamsImg from "/src/images/teamsIMG.png";
import { WhyChooseUs } from './../../components/WhyChooseUs/WhyChooseUs';
import TeamCard from "../../components/TeamCard/TeamCard";
import { SectionHeader } from "../../components/SectionHeader/SectionHeader";

const OurTeams = () => {
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
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />

                </div>

            </div>

            <WhyChooseUs />
        </div>
    );
};

export default OurTeams;
