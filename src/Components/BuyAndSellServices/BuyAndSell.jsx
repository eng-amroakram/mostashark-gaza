import React, { useEffect } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./BuyAndSell.css";
import { FaHome, FaHandshake, FaBullhorn, FaChartBar } from "react-icons/fa";
import imgHero from "../../assets/صورة بيع وشراء.png"; 
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const BuyAndSell = () => {
  const { t } = useTranslation();

   useEffect(() => {
     window.scrollTo(0, 0);
     AOS.init({ duration: 1200, once: true });
     AOS.refresh();
   }, []);

  const features = [
    { id: 1, icon: FaHome },
    { id: 2, icon: FaHandshake },
    { id: 3, icon: FaBullhorn },
    { id: 4, icon: FaChartBar },
  ];

  const steps = [1, 2, 3, 4];

  return (
    <section className="contract-documentation-modern">
      <Container fluid className="hero-section-modern">
        <Row className="align-items-center">
          <Col lg={6} data-aos="fade-right">
            <img src={imgHero} alt={t("buy_and_sell.hero_alt")} className="hero-img" />
          </Col>
          <Col lg={6} data-aos="fade-left">
            <div className="hero-text-modern">
              <h2>{t("buy_and_sell.hero_title")}</h2>
              <p>{t("buy_and_sell.hero_description")}</p>
              <Button as={Link} to="/ContactPage" className="cta-btn">
                {t("buy_and_sell.contact_btn")}
              </Button>
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
                    <Card.Title className="CardTitle">{t(`buy_and_sell.features.${feature.id}.title`)}</Card.Title>
                    <Card.Text>{t(`buy_and_sell.features.${feature.id}.description`)}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>

      <Container className="steps py-5 text-center">
        <h2 className="section-title" data-aos="fade-down">{t("buy_and_sell.steps_title")}</h2>
        <Row className="justify-content-center mt-4">
          {steps.map((step) => (
            <Col lg={3} md={6} sm={12} data-aos="zoom-in" data-aos-delay={(step - 1) * 100} key={step}>
              <div className="step-card">
                <h3>{step}</h3>
                <p>{t(`buy_and_sell.steps.${step}`)}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <Container className="contact-banner text-center" data-aos="fade-up">
        <h3>{t("buy_and_sell.banner_title")}</h3>
        <p>{t("buy_and_sell.banner_description")}</p>
        <Button as={Link} to="/ContactPage" className="cta-btn">{t("buy_and_sell.contact_btn")}</Button>
      </Container>
    </section>
  );
};

export default BuyAndSell;
