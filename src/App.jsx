import { Header } from "./components/Header/Header";
import { ContactUs } from "./components/ContactUs/ContactUs";
import { Footer } from "./components/Footer/Footer";
import { Statistics } from "./components/Statistics/Statistics";
import { PageInfo } from "./components/PageInfo/PageInfo";
import { SectionHeader } from "./components/SectionHeader/SectionHeader";
import { WhyChooseUs } from "./components/WhyChooseUs/WhyChooseUs";
import img from "./images/achievementSea.png"
import "./App.scss";

const App = () => {
	return (
		<div className="app">
			<Header />

			<main>
				<PageInfo
					name="About"
					text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
					imgLink="/src/images/aboutImg.png"
				/>

				<div className="achievement">
					<div className="achievement__container">
						<SectionHeader name="ACHIEVEMENT"/>

						<h2 className="achievement__header">interior customization with Dananz, 
							best quality with professional workers
						</h2>

						<div className="achievement__wrapper">
							<img src={img} className="image"></img>

							<Statistics />
						</div>
					</div>
				</div>

				<WhyChooseUs />

				<ContactUs />
			</main>
			<Footer />
		</div>
	);
};

export default App;
