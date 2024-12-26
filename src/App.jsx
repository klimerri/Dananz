import { Header } from "./components/Header/Header";
import { ContactUs } from "./components/ContactUs/ContactUs";
import { Footer } from "./components/Footer/Footer";
import { Statistics } from './components/Statistics/Statistics';
import { Product } from './components/Product/Product';
import { SectionHeader } from './components/SectionHeader/SectionHeader';
import img from "/src/images/homeMain.png";
import aboutHome from "/src/images/aboutHome.png";
import seo from '/src/images/seo.png'
import "./App.scss";
import { useState } from "react";


const App = () => {
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

	return (
		<div className="app">
			<Header />

			<main>
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

					<h2 className="about__header">“We're one of the best furniture agency. 
						Prioritizing customers and making purchases easy are the hallmarks of our agency.”
					</h2>

					<div className="about__main">
						<img className="about__main-image" src={aboutHome}></img>

						<div className="about__main-card">
							<img className="about__main-card__photo" src={seo}></img>

							<div className="about__main-card__info">
								<span className="about__main-card__info-name">Arga Danaan</span>

								<span className="about__main-card__info-post">CEO of Dananz</span>
							</div>
						</div>

						<div className="about__main-text">
							<p className="about__main-text__description">Online learning with us does not interfere with your daily life. 
								because learning can be done anytime and anywhere.
							</p>

							<a href="#" className="about__main-text__link">Learn more</a>
						</div>
					</div>
				</div>

				<Product list={list}/>

				<ContactUs />
			</main>

			<Footer />
		</div>
	);
};

export default App;
