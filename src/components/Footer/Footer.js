import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
        <a href="#home" className='footer__logo'>Vincent</a>
        <ul className="permalinks">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/thakshila-bandara-2791b9214">linked in</a>
          <a href="https://github.com/Thakshila-Bandara">github</a>
          <a href="https://medium.com/@thakshiladb2000">medium</a>
        </div>

        <div className="footer__copyright">
            <small>&copy; Thakshila Bandara. All rightts reserved.</small>
        </div>
    </footer>
  )
}

export default Footer