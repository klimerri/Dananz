import "./ContactUs.scss"
import { Button } from "../Button/Button"
import { Link } from "react-router-dom";

export const ContactUs = () => {
    return (
        <div className = "contactUs container">
            <div className = "contactUs__container">
                <h3 className="contactUs__discuss">let's discuss making your interior like a dream place!</h3>

                <div className="contactUs__right-side">
                    <p className="contactUs__text">Contact us below to work together to build your amazing interior</p>


                    <Link to="/contact">
                        <Button variant="secondary">Contact Us</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}