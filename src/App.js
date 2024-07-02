// App.js
//import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Top from "./components/Top/Top";
import Navbar from "./components/Navigation/Navigation";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
	return (
		<>
      <Top />
      <Header />
      <Navbar />
			<About />
      <Projects />
      <Contact />
      <Footer />
		</>
	);
};

export default App;
