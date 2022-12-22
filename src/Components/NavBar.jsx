import React, { useEffect, useState, useContext } from "react";
import '../Components/NavBar.css'
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import navIcon4 from '../assets/img/nav-icon4.svg'
import CV from '../assets/files/Agustin_CV.pdf'
import { useTranslation } from "react-i18next";
import LocaleContext from "../LocaleContext";
import i18n from "../i18n";



const NavBar = () => {
  const { locale } = useContext(LocaleContext)
  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  const changeLocale = (l) => {
    if(locale !== l) {
      i18n.changeLanguage(l);
    }
  }

  useEffect(() => {
    const onScroll = () => {
      if(window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);
    
    return () => window.removeEventListener("scroll", onScroll)
  }, [])


const onUpdateActiveLink = (value) => {
  setActiveLink(value)
}

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container className="flex-row-reverse">
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>  
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>{t('skills')}</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>{t('projects')}</Nav.Link>
                <NavDropdown title={t('language')} id="basic-nav-dropdown">
                  <NavDropdown.Item href="#" onClick={() => changeLocale('en')}>English</NavDropdown.Item>
                  <NavDropdown.Item href="#" onClick={() => changeLocale('es')}>Spanish</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <span className="navbar-text">
              <div className="icons">
                <a href="https://www.linkedin.com/in/agustin-ramirez-8a160a196/" target="_blank" rel='noreferrer'><img src={navIcon1} alt='linkerdin'/></a>
                <a href="https://www.instagram.com/ramirez.4gus/" target="_blank" rel='noreferrer'><img src={navIcon3} alt='instagram'/></a>
                <a href="https://github.com/RamirezAgus/" target="_blank" rel='noreferrer'><img src={navIcon4} alt='github'/></a>
              </div>
              <HashLink to='#connect'>
                <button><span>{t('connect')}</span></button>
              </HashLink>
              <div className="cv-download-bx">
                <a href={CV} dowload="CV_español"><button>{t('download')}</button></a>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};

export default NavBar;
