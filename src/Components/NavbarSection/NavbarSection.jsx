import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import './NavbarSection.css';

const NavbarSection = () => {
  const { t, i18n } = useTranslation();

  // للتحكم بفتح وإغلاق القائمة
  const [expanded, setExpanded] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setExpanded(false); // تسكير القائمة بعد تغيير اللغة
  };

  return (
    <Navbar 
      expand="lg" 
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      className="NavBar shadow-sm position-relative"
    >
      <Container fluid className="d-flex align-items-center justify-content-between">

        <Link to="/OffersPage" onClick={() => setExpanded(false)}>
          <button className="offers-btn">{t("navbar.offers")}</button>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto nav-links">

            <Nav.Link 
              as={Link} 
              to="/" 
              className="nav-link mx-2"
              onClick={() => setExpanded(false)}
            >
              {t("navbar.home")}
            </Nav.Link>

            <Nav.Link 
              as={Link} 
              to="/ServicesSection" 
              className="nav-link mx-2"
              onClick={() => setExpanded(false)}
            >
              {t("navbar.services")}
            </Nav.Link>

            <Nav.Link 
              as={Link} 
              to="/ContactPage" 
              className="nav-link mx-2"
              onClick={() => setExpanded(false)}
            >
              {t("navbar.contact")}
            </Nav.Link>

            <Nav.Link 
              as={Link} 
              to="/FaqSection" 
              className="nav-link mx-2"
              onClick={() => setExpanded(false)}
            >
              {t("navbar.faq")}
            </Nav.Link>

            <NavDropdown 
              title={t("navbar.languages")} 
              id="language-dropdown" 
              className="mx-2"
            >
              <NavDropdown.Item onClick={() => changeLanguage("ar")}>
                {t("navbar.arabic")}
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => changeLanguage("en")}>
                {t("navbar.english")}
              </NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarSection;
