import "./Header.scss"
import { Button } from "../Button/Button"

export const Header = () => {
    return (
        <header className="header container">
            <img src="src/images/logo.svg" />

            <div className="header__right-side">
                <div className="header__links">
                    <a href="#" className="header__link">Home</a>
                    <a href="#" className="header__link">About Us</a>
                    <a href="#" className="header__link">Services</a>
                    <a href="#" className="header__link">Our Teams</a>
                </div>
                
                <Button>Contact Us</Button>
            </div>
        </header>

        // TODO: настроим роутер, поработает с style guide
    );
}