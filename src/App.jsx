import { Header } from "./components/Header/Header";
import { ContactUs } from "./components/ContactUs/ContactUs";
import { Footer } from "./components/Footer/Footer";
import img from "/src/images/homeMain.png";
import { Statistics } from './components/Statistics/Statistics';
import "./App.scss";

const App = () => {
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

				<ContactUs />
			</main>

			<Footer />
		</div>
	);
};

export default App;
