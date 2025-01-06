import "./Header.scss"
import { Button } from "../Button/Button"
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header className="header container">
            <img src="src/images/logo.svg" />

            <div className="header__right-side">
                <div className="header__links">
                    <NavLink to="/" className="header__link">Home</NavLink>
                    <NavLink to="/about" className="header__link">About Us</NavLink>
                    <NavLink to="/services" className="header__link">Services</NavLink>
                    <NavLink to="/teams" className="header__link">Our Teams</NavLink>
                </div>
                
                <Link to="/contact">
                    <Button>Contact Us</Button>
                </Link>
            </div>
        </header>
    );
}