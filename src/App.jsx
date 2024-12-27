import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
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
				</Routes>

                <ContactUs />
			</main>

            <Footer />
		</>
	);
};

export default App;
