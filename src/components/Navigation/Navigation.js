// NavBar.js
import { useState } from 'react'
import { NavLink } from 'react-router-dom'; 
import './Nav.css'

const Navbar = () => {
	const [activeNav, setActiveNav] = useState('#')
	return (
		<nav>
			<a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active': ''}>Home</a>
			<a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}>About</a>
			<a href="#project" onClick={() => setActiveNav('#project')} className={activeNav === '#project' ? 'active': ''}>Projects</a>
			<a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}>Contact</a>
		</nav>
	);
}

export default Navbar;
