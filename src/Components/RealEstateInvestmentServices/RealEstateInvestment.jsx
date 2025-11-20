import React, { useEffect } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./RealEstateInvestment.css";
import { FaBuilding, FaChartPie, FaMoneyBillWave, FaBalanceScale } from "react-icons/fa";
import imgHero from "../../assets/الاستثمار والتمويل العقاري.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const RealEstateInvestment = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 1200, once: true, mirror: false });
    AOS.refresh();
  }, []);

  const features = [
    { id: 1, icon: FaBuilding, title: t("real_estate_investment.features.1.title"), desc: t("real_estate_investment.features.1.desc") },
    { id: 2, icon: FaChartPie, title: t("real_estate_investment.features.2.title"), desc: t("real_estate_investment.features.2.desc") },
    { id: 3, icon: FaMoneyBillWave, title: t("real_estate_investment.features.3.title"), desc: t("real_estate_investment.features.3.desc") },
    { id: 4, icon: FaBalanceScale, title: t("real_estate_investment.features.4.title"), desc: t("real_estate_investment.features.4.desc") }
  ];

  const steps = [
    { id: 1, text: t("real_estate_investment.steps.1") },
    { id: 2, text: t("real_estate_investment.steps.2") },
    { id: 3, text: t("real_estate_investment.steps.3") },
    { id: 4, text: t("real_estate_investment.steps.4") }
  ];

  return (
    <section className="contract-documentation-modern">
      
      <Container fluid className="hero-section-modern">
        <Row className="align-items-center">
          <Col lg={6} data-aos="fade-right">
            <img src={imgHero} alt={t("real_estate_investment.hero.title")} className="hero-img" />
          </Col>
          <Col lg={6} data-aos="fade-left">
            <div className="hero-text-modern">
              <h2>{t("real_estate_investment.hero.title")}</h2>
              <p>{t("real_estate_investment.hero.desc")}</p>
              <Button as={Link} to="/ContactPage" className="cta-btn">{t("real_estate_investment.hero.btn")}</Button>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="features py-5">
        <Row>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Col key={feature.id} lg={3} md={6} sm={12} data-aos="fade-up" data-aos-delay={index * 100}>
                <Card className="feature-card">
                  <Icon className="feature-icon" />
                  <Card.Body>
                    <Card.Title>{feature.title}</Card.Title>
                    <Card.Text>{feature.desc}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>

     
      <Container className="steps py-5 text-center">
        <h2 className="section-title" data-aos="fade-down">{t("real_estate_investment.steps_title")}</h2>
        <Row className="justify-content-center mt-4">
          {steps.map((step, index) => (
            <Col key={step.id} lg={3} md={6} sm={12} data-aos="zoom-in" data-aos-delay={index * 100}>
              <div className="step-card">
                <h3>{step.id}</h3>
                <p>{step.text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

   
      <Container className="contact-banner text-center" data-aos="fade-up">
        <h3>{t("real_estate_investment.contact.title")}</h3>
        <p>{t("real_estate_investment.contact.desc")}</p>
        <Button as={Link} to="/ContactPage" className="cta-btn">{t("real_estate_investment.contact.btn")}</Button>
      </Container>
    </section>
  );
};

export default RealEstateInvestment;
