import { PageInfo } from "/src/components/PageInfo/PageInfo";
import { Product } from "/src/components/Product/Product";
import { SectionHeader } from '/src/components/SectionHeader/SectionHeader';
import serviceImg from "/src/images/servicesImg.png";
import interiorDesign from "/src/images/ineriorDesign.png";
import consultant from "/src/images/consultant.png";
import constructionConsultant from "/src/images/constructionConsultant.png";
import './Services.scss';
import { useState } from "react";

const Services = () => {
const [list, setList] = useState([
        {
            id: 1,
            number: '01',
            headerName: 'Vintage',
            headerText: 'the use of simple and limited elements to get the best effect or impression.'
        },
        {
            id: 2,
            number: '02',
            headerName: 'Minimalist',
            headerText: 'the use of simple and limited elements to get the best effect or impression.'
        },
        {
            id: 3,
            number: '03',
            headerName: 'Modern',
            headerText: 'the use of simple and limited elements to get the best effect or impression.'
        },
        {
            id: 4,
            number: '03',
            headerName: 'transitional',
            headerText: 'the use of simple and limited elements to get the best effect or impression.'
        },
    ]);

    const [achievementList, setAchievementList] = useState([
        {
            id: 1,
            imgLink: interiorDesign,
            header: "Interior design",
            text: "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations."
        },
        {
            id: 2,
            imgLink: consultant,
            header: "Consultant",
            text: "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations."
        },
        {
            id: 3,
            imgLink: constructionConsultant,
            header: "construction consultant",
            text: "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations."
        },
    ])

    return (
        <div className='services-page'>
            <PageInfo 
            name="Services"
            text="It is a long established fact that a reader will be distracted 
            by the readable content of a page when looking at its layout."
            imgLink={serviceImg}/>


            <div className="services-page__achievement__container">
                <SectionHeader name="ACHIEVEMENT" />

                <div className="services-page__achievement__wrapper">
                    {achievementList.map(item => {
                        return (
                            <div className="services-page__achievement-item">
                                <img className="services-page__achievement-item__image" src={item.imgLink}></img>

                                <div className="services-page__achievement-item__description">
                                    <h2 className="services-page__achievement-item__description-header">{item.header}</h2>

                                     <p className="services-page__achievement-item__description-text">{item.text}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <Product list={list}/>
        </div>
    );
};

export default Services;