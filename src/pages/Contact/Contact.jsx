import "./Contact.scss";
import { PageInfo } from './../../components/PageInfo/PageInfo';

const Contact = () => {
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

                        <div className="contact-page__form__item-block">
                        <input className="contact-page__form__item-input" type="text" id="message" placeholder="Message"></input>   
                        </div>                        
                    </div>

                    <div className="contact-page__form__item contact-page__form__item-button">
                        <input className="contact-page__form__item-submit" type="submit" value="Send Message"></input>                       
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Contact;