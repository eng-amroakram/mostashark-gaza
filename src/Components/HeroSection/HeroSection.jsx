import React from "react";
import './HeroSecion.css';
import { Col, Row } from 'react-bootstrap';
import img1 from '../../assets/hero-img.jpg';
import logo from '../../assets/download.png';
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="hero-section">
      <Row>
        <Col lg={12} md={12} sm={12} className="position-relative">
          <img className="HeroSection-img" src={img1} alt={t("hero.alt_img")} />
          <div className="hero-text">
            <img
              src={logo}
              alt={t("hero.alt_logo")}
              className="logo-img me-2"
            />
            <h1>{t("hero.title")}</h1>
            <p>{t("hero.subtitle")}</p>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default HeroSection;
