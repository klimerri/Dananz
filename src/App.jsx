import { Header } from "./components/Header/Header";
import { ContactUs } from "./components/ContactUs/ContactUs";
import { Footer } from "./components/Footer/Footer";
import { Statistics } from "./components/Statistics/Statistics";
import { PageInfo } from "./components/PageInfo/PageInfo";
import { SectionHeader } from "./components/SectionHeader/SectionHeader";

const App = () => {
	return (
		<div className="app">
			<Header />

			<SectionHeader name="ACHIEVEMENT" />

			<PageInfo
				name="About"
				text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
				imgLink="/src/images/aboutImg.png"
			/>

			<Statistics />

			<main>
				<section></section>

				<ContactUs />
			</main>

			<Footer />
		</div>
	);
};

export default App;
