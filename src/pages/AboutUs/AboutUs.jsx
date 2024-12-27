import { Header } from "/src/components/Header/Header";
import { ContactUs } from "/src/components/ContactUs/ContactUs";
import { Footer } from "/src/components/Footer/Footer";
import { Statistics } from "/src/components/Statistics/Statistics";
import { PageInfo } from "/src/components/PageInfo/PageInfo";
import { SectionHeader } from "/src/components/SectionHeader/SectionHeader";
import { WhyChooseUs } from "/src/components/WhyChooseUs/WhyChooseUs";
import img from "/src/images/achievementSea.png"
import "./AboutUs.scss";

const AboutUs = () => {
    return (
        <div className="app">
            <PageInfo
                name="About"
                text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                imgLink="/src/images/aboutImg.png"
            />

            <div className="achievement">
                <div className="achievement__container">
                    <SectionHeader name="ACHIEVEMENT"/>

                    <h2 className="achievement__header">interior customization with Dananz, 
                        best quality with professional workers
                    </h2>

                    <div className="achievement__wrapper">
                        <img src={img} className="image"></img>

                        <Statistics />
                    </div>
                </div>
            </div>

            <WhyChooseUs />
        </div>
    );
};

export default AboutUs;
