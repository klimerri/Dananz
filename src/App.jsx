import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Services from "./pages/Services/Services";
import OurTeams from "./pages/OurTeams/OurTeams";
import Contact from "./pages/Contact/Contact";
import Portfolio from "./pages/Portfolio/Portfolio";
import MinimalistRoom from "./pages/MinimalistRoom/MinimalistRoom";
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
					<Route path="/teams" element={<OurTeams />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/portfolio" element={<Portfolio />} />
					<Route path="/minimalist-room" element={<MinimalistRoom />} />
				</Routes> 

                <ContactUs />
			</main>

            <Footer />
		</>
	);
};

export default App;
