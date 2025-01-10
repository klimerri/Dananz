import { Statistics } from "/src/components/Statistics/Statistics";
import { Product } from '/src/components/Product/Product';
import { SectionHeader } from '/src/components/SectionHeader/SectionHeader';
import { ProductCard } from '/src/components/ProductCard/ProductCard';
import img from "/src/images/homeMain.png";
import aboutHome from "/src/images/aboutHome.png";
import seo from '/src/images/seo.png';
import homeService from "/src/images/homeService.png";
import material1 from "/src/images/material1.png";
import material2 from "/src/images/mterial2.png";
import material3 from "/src/images/material3.png";
import "./Home.scss";
import { useState } from "react";
import { WorkerCard } from "../../components/WorkerCard/WorkerCard";
import SeeMore from "../../components/SeeMore/SeeMore";


const Home = () => {
    const [list, setList] = useState([
        {
            id: 1,
            number: '01',
            headerName: 'Vintage',
            headerText: 'the use of simple and limited elements to get the best effect or impression.',
            cardLink: '/portfolio'
        },
        {
            id: 2,
            number: '02',
            headerName: 'Minimalist',
            headerText: 'the use of simple and limited elements to get the best effect or impression.',
            cardLink: '/portfolio'
        },
        {
            id: 3,
            number: '03',
            headerName: 'Modern',
            headerText: 'the use of simple and limited elements to get the best effect or impression.',
            cardLink: '/portfolio'
        },
        {
            id: 4,
            number: '03',
            headerName: 'transitional',
            headerText: 'the use of simple and limited elements to get the best effect or impression.',
            cardLink: '/portfolio'
        },
    ]);

    const [serviceList, setServiceList] = useState([
        {
            id: 'Interior-design',
            number: '01',
            headerName: 'Interior Design',
            cardLink: '/services#Interior-design'
        },
        {
            id: 'Consultant',
            number: '02',
            headerName: 'Consultant',
            cardLink: '/services#Consultant'
        },
        {
            id: 'Construction-Consultant',
            number: '03',
            headerName: 'Construction Consultant',
            cardLink: '/services#Construction-Consultant'
        }
    ]);

    return (
        <div className="app">
            <div className="home__info">
                <div className="info__container">
                    <div className="info__header">
                        <div className="info__header__container-title">
                            <h1 className="info__header-title">Design your interor with high quality.</h1>
                        </div>

                        <p className="info__header-rights">2022 <br /> ALL RIGHT RESERVED</p>
                    </div>

                    <div className="info__images">
                        <img src={img} className="info__images-main"></img>

                        <div className="info__images-statistics">
                            <Statistics />
                        </div>
                    </div>
                </div>
            </div>

            <div className="about__container">
                <SectionHeader name="ABOUT"/>

                <SeeMore 
                header="“We're one of the best furniture agency. 
                    Prioritizing customers and making purchases easy are the hallmarks of our agency.”"
                image={aboutHome}
                description="Online learning with us does not interfere with your daily life. 
                because learning can be done anytime and anywhere."
                link="#"
                textLink="Learn more"
                />
            </div>

            <div className="service__container">
                <div className="service__info">
                    <SectionHeader name="SERVICE" />

                    <h2 className="service__info-header">attractive furniture with the best quality.</h2>

                    <p className="service__info-text">Customize your interior design into a dream place with
                            the best designers and quality furniture. 
                            We try our best to fulfill your expectations.
                    </p>

                    <div className="service__list">
                        {serviceList.map(item => {
                            return (
                                <ProductCard
                                    variant="2"
                                    headerNumber={item.number}
                                    headerName={item.headerName}
                                    cardLink={item.cardLink}
                                /> 
                            )
                        })}
                    </div>
                </div>

                <div className="service__image">
                    <img src={homeService}></img>
                </div>
            </div>

            <Product list={list}/>

            <div className="material__container">
                <SectionHeader name="MATERIAL" />

                <h2 className="material__header">choice of materials for quality furniture.</h2>

                <p className="material__text">You can custom the material as desired.
                        And our furniture uses the best materials 
                        and selected quality materials.
                </p>


                <a href="#" className="material__link">See materials</a>

                <div className="material__wrapper">
                    <img className="material__wrapper-img1" src={material1}></img>

                    <img className="material__wrapper-img2" src={material2}></img>

                    <img className="material__wrapper-img3" src={material3}></img>
                </div>
            </div>
        </div>
    );
};

export default Home;