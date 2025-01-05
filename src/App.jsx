import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Services from "./pages/Services/Services";
import OurTeams from "./pages/OurTeams/OurTeams";
import "./App.scss";
import { Header } from './components/Header/Header';
import { ContactUs } from './components/ContactUs/ContactUs';
import { Footer } from './components/Footer/Footer';


const App = () => {
	return (
		<>
			<Header />
			
			<main>
				<Routes>
					<Route path="/" element={<Home />}/>
					<Route path="/about" element={<AboutUs />} />
					<Route path="/services" element={<Services />} />
					<Route path="/teams" element={<OurTeams/>} />
				</Routes>

                <ContactUs />
			</main>

            <Footer />
		</>
	);
};

export default App;
