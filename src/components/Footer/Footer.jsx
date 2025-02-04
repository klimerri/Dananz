import "./Footer.scss"

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__left-side">
                    <img className="footer__logo" src="src/images/logo.svg"></img>

                    <h4 className="footer__best">One of the best furniture agency.</h4>
                </div>

                <div className="footer__right-side">
                    <form>
                        <label className="footer__enter-email">Enter  your email to get the laterst news</label>

                        <div className="footer__input">
                            <input type="footer__email" placeholder="Email Address"></input>

                            <div className="footer__button">
                                <input className="footer__button-email" type="submit" value=" "></input>
                            </div>
                        </div>
                    </form>

                    <div className="footer__follow-us">
                        <span className="footer__follow">Follow us On</span>

                        <div className="footer__social-networks">
                            <a className="footer__network-link">
                                <img className="footer__network" src="src/images/social-networks/facebook.svg"></img>
                            </a>

                            <a className="footer__network-link">  
                                <img className="footer__network" src="src/images/social-networks/instagram.svg"></img>
                            </a>

                            <a className="footer__network-link"> 
                                <img className="footer__network" src="src/images/social-networks/tiktok.svg"></img> 
                            </a>

                            <a className="footer__network-link">
                                <img className="footer__network" src="src/images/social-networks/youtube.svg"></img>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}