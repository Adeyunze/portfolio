import "./index.css";
import Navbar from "./components/Navbar";
import ImageSection from "./components/ImageSection";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<div>
				<Navbar />
				<div className="md:mx-16 mx-5">
					<ImageSection />
					<Skills />
					<Work />
				</div>
			</div>
			<Footer />
		</>
	);
}

export default App;
