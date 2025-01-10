import { PageInfo } from "../../components/PageInfo/PageInfo";
import "./MinimalistRoom.scss";
import minimalistImg from "/src/images/minimalistroom/minimalistIng.png";
import img_1 from "/src/images/minimalistroom/img1.png";
import img_2 from "/src/images/minimalistroom/img2.png";
import img_3 from "/src/images/minimalistroom/img3.png";
import img_4 from "/src/images/minimalistroom/img4.png";
import img_5 from "/src/images/minimalistroom/img5.png";

const MinimalistRoom = () => {
    return (
        <div className="minimalist-room__container">
            <PageInfo
            name="Minimalist Room"
            text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            imgLink={minimalistImg} />

            <div className="minimalist-room__description">
                <div className="minimalist-room__description-left">
                    <span className="minimalist-room__description-left__header">Project Overview</span>

                    <div className="minimalist-room__description-left__wrapper">
                        <p  className="minimalist-room__description-left__text">Online learning with us does not interfere with your daily life. 
                        because learning can be done anytime and anywhere. 
                        Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.
                         Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. </p>

                        <div className="minimalist-room__description-left__data">
                            <p className="minimalist-room__description-left__text">July 22 - 2022</p>

                            <p className="minimalist-room__description-left__text">Interior Design - Furnitur</p>
                        </div>
                    </div>
                </div>

                <div className="minimalist-room__description-right">
                    <span className="minimalist-room__description-right__header">Design Process</span>

                    <div className="minimalist-room__description-right__wrapper">
                        <p className="minimalist-room__description-right__text">Online learning with us does not interfere with your daily life. 
                            because learning can be done anytime and anywhere. 
                            Online learning with us does not interfere with your daily life. 
                            because learning can be done anytime and anywhere.
                        </p>

                        <p className="minimalist-room__description-right__text">
                        Online learning with us does not interfere with your daily life. 
                        because learning can be done anytime and anywhere. 
                        Online learning with us does not interfere with your daily life. 
                        because learning can be done anytime and anywhere.
                        </p>
                    </div>
                </div>
            </div>

            <div className="minimalist-room__wrapper">
                <div className="minimalist-room__images">
                    <img src={img_1} className="minimalist-room__image"></img>

                    <img src={img_2} className="minimalist-room__image"></img>
                </div>

                <img src={img_3} className="minimalist-room__image_big"></img>

                <div className="minimalist-room__images">
                    <img src={img_4} className="minimalist-room__image"></img>

                    <img src={img_5} className="minimalist-room__image"></img>
                </div>
            </div>
        </div>

    );
};

export default MinimalistRoom;