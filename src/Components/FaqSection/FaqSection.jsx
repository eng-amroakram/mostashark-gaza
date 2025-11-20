import React, { useEffect } from "react";
import { Accordion, Container, Row, Col } from "react-bootstrap";
import "./FaqSection.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const FaqSection = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <Container className="FaqSection py-5">
      <Row>
        <h2 className="faq-title mb-4" data-aos="fade-down">
          {t("faq.title")}
        </h2>

        
        <Col lg={6} md={12} data-aos="fade-right">
          <Accordion defaultActiveKey="0">
            {[...Array(6)].map((_, idx) => (
              <Accordion.Item eventKey={idx.toString()} key={idx}>
                <Accordion.Header>{t(`faq.items.${idx}.question`)}</Accordion.Header>
                <Accordion.Body>{t(`faq.items.${idx}.answer`)}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Col>

      
        <Col lg={6} md={12} data-aos="fade-left">
          <Accordion>
            {[...Array(6)].map((_, idx) => (
              <Accordion.Item eventKey={(idx + 6).toString()} key={idx + 6}>
                <Accordion.Header>{t(`faq.items.${idx + 6}.question`)}</Accordion.Header>
                <Accordion.Body>{t(`faq.items.${idx + 6}.answer`)}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default FaqSection;
