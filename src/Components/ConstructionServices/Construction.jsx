import React, { useEffect } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./Construction.css"; 
import { FaHammer, FaBuilding, FaProjectDiagram, FaHome } from "react-icons/fa";
import imgHero from "../../assets/المقاولات.png"; 
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Construction = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 1200, once: true });
    AOS.refresh();
  }, []);

  const features = [
    { id: 1, icon: FaHammer },
    { id: 2, icon: FaBuilding },
    { id: 3, icon: FaProjectDiagram },
    { id: 4, icon: FaHome },
  ];

  const steps = [1, 2, 3, 4];

  return (
    <section className="contract-documentation-modern">
     
      <Container fluid className="hero-section-modern">
        <Row className="align-items-center">
          <Col lg={6} data-aos="fade-right">
            <img src={imgHero} alt={t("construction.hero_alt")} className="hero-img" />
          </Col>
          <Col lg={6} data-aos="fade-left">
            <div className="hero-text-modern">
              <h2>{t("construction.hero_title")}</h2>
              <p>{t("construction.hero_description")}</p>
              <Button as={Link} to="/ContactPage" className="cta-btn">{t("construction.contact_btn")}</Button>
            </div>
          </Col>
        </Row>
      </Container>

    
      <Container className="features py-5">
        <Row>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Col lg={3} md={6} sm={12} data-aos="fade-up" data-aos-delay={index * 100} key={feature.id}>
                <Card className="feature-card">
                  <Icon className="feature-icon" />
                  <Card.Body>
                    <Card.Title className="CardTitle">{t(`construction.features.${feature.id}.title`)}</Card.Title>
                    <Card.Text>{t(`construction.features.${feature.id}.description`)}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>

     
      <Container className="steps py-5 text-center">
        <h2 className="section-title" data-aos="fade-down">{t("construction.steps_title")}</h2>
        <Row className="justify-content-center mt-4">
          {steps.map((step, index) => (
            <Col lg={3} md={6} sm={12} data-aos="zoom-in" data-aos-delay={index * 100} key={step}>
              <div className="step-card">
                <h3>{step}</h3>
                <p>{t(`construction.steps.${step}`)}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <div className="contact-banner text-center" data-aos="fade-up">
        <h3>{t("construction.banner_title")}</h3>
        <p>{t("construction.banner_description")}</p>
        <Button as={Link} to="/ContactPage" className="cta-btn">{t("construction.contact_btn")}</Button>
      </div>
    </section>
  );
};

export default Construction;
