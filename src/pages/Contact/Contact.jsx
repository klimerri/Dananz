import "./Contact.scss";
import { PageInfo } from './../../components/PageInfo/PageInfo';
import { SectionHeader } from './../../components/SectionHeader/SectionHeader';
import { useState } from "react";

const Contact = () => {
    const [list, setList] = useState([
        {
            id: 0,
            name: "Jakarta",
            text: "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations."
        },
        {
            id: 1,
            name: "Surakarta",
            text: "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations."
        },
        {
            id: 3,
            name: "Yogyakarta",
            text: "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations."
        },
        {
            id: 4,
            name: "Bandung",
            text: "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations."
        }
    ]);

    return (
        <div className="contact-page__container">
            <PageInfo 
            name="Contact Us"
            text="It is a long established fact that 
            a reader will be distracted by the readable 
            content of a page when looking at its layout."/>

            <form>
                <div className="contact-page__form">
                    <div className="contact-page__form__item contact-page__form__item-names">
                        <div className="contact-page__form__name">
                            <label for="first_name" className="contact-page__form__item-label">First Name</label>

                            <div className="contact-page__form__item-block">
                                <input className="contact-page__form__item-input" type="text" id="first_name" placeholder="First name"></input>
                            </div>
                        </div>

                        <div className="contact-page__form__name">
                            <label for="last_name" className="contact-page__form__item-label">Last Name</label>

                            <div className="contact-page__form__item-block">
                                <input className="contact-page__form__item-input" type="text" id="last_name" placeholder="Last name"></input>
                            </div>
                        </div> 
                    </div>

                    <div className="contact-page__form__item">
                        <label for="email_input" className="contact-page__form__item-label">Email</label>

                        <div className="contact-page__form__item-block">
                            <input className="contact-page__form__item-input" type="mail" id="email_input" placeholder="Email"></input>    
                        </div>                        
                    </div>

                    <div className="contact-page__form__item">
                        <label for="phone_number" className="contact-page__form__item-label">Phone number</label>

                        <div className="contact-page__form__item-block contact-page__form__item-block__phone">
                            <select name="contact-page__form-phone__select">
                                <option value="UK">UK</option>
                                <option value="FR">FR</option>
                                <option value="DE">DE</option>
                            </select>

                            <input className="contact-page__form__item-input" type="text" id="phone_number" placeholder="Phone number"></input> 
                        </div>
                    </div>
                    
                    <div className="contact-page__form__item">
                        <label for="message" className="contact-page__form__item-label">Message</label>

                        <div className="contact-page__form__item-block block-message">
                        <textarea className="contact-page__form__item-input" type="text" id="message" placeholder="Message"></textarea>   
                        </div>                        
                    </div>

                    <div className="contact-page__form__item contact-page__form__item-button">
                        <input className="contact-page__form__item-submit" type="submit" value="Send Message"></input>                       
                    </div>
                </div>
            </form>

            <div className="contact-page__location">
                <SectionHeader name="LOCATION" />

                <div className="contact-page__location__info">
                    <div className="contact-page__location-left">
                        <div className="contact-page__location__header">
                            <span className="contact-page__location__header-title">Visit Our Stores</span>

                            <p className="contact-page__location__header-text">Find us at these locations.</p>
                        </div>

                        <div className="contact-page__location__email">
                            <span className="contact-page__location__email-header">Email</span>

                            <span className="contact-page__location__email-text">dananz@gmail.com</span>
                        </div>

                        <div className="contact-page__location__phone">
                            <span className="contact-page__location__phone-header">Phone</span>

                            <span className="contact-page__location__phone-number">+62 815 002 1000</span>
                        </div>
                    </div>

                    <div className="contact-page__location-right">
                        {list.map(item => {
                            return (
                                <div className="contact-page__location__card">
                                    <span className="contact-page__location__card-header">{item.name}</span>

                                    <p className="contact-page__location__card-text">{item.text}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;