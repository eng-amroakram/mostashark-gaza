import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./ContactPage.css";
import { FaPhone, FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import Fac_Img from "../../assets/fac.png";
import twiter_Img from "../../assets/twiter.png";
import insta_Img from "../../assets/insta.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const ContactPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <div className="contact-page">
      <Container>
        <Row className="ContactPart align-items-center">

         
          <Col md={6} data-aos="fade-right">
            <h2 className="contact-title mb-4">{t("contact.title")}</h2>
            <p className="contact-text mb-4">{t("contact.description")}</p>

            <div className="contact-buttons">
              {/* واتساب */}
              <Button
                className="contact-btn whatsapp"
                href={t("contact.whatsapp_link")}
                target="_blank"
              >
                <FaWhatsapp /> {t("contact.whatsapp_text")}
              </Button>

              {/* اتصال مباشر */}
              <Button className="contact-btn call" href={t("contact.phone_link")}>
                <FaPhone /> {t("contact.call_text")}
              </Button>

              {/* بريد إلكتروني */}
              <Button
                className="contact-btn email"
                href={t("contact.email_link")}
              >
                <FaEnvelope /> {t("contact.email_text")}
              </Button>
            </div>
          </Col>

          
          <Col md={6} className="contact-info" data-aos="fade-left">
            <div className="info-box">
              <h4>{t("contact.info_title")}</h4>
              <p><FaPhone /> {t("contact.info_phone")}</p>
              <p><FaEnvelope /> {t("contact.info_email")}</p>
              <p><FaMapMarkerAlt /> {t("contact.info_location")}</p>

              <div className="social-icons">
                <a href={t("contact.social.facebook")} target="_blank" rel="noopener noreferrer">
                  <img src={Fac_Img} alt="Facebook" className="social-icon" />
                </a>

                <a href={t("contact.social.instagram")} target="_blank" rel="noopener noreferrer">
                  <img src={insta_Img} alt="Instagram" className="social-icon" />
                </a>

                <a href={t("contact.social.twitter")} target="_blank" rel="noopener noreferrer">
                  <img src={twiter_Img} alt="Twitter" className="social-icon" />
                </a>
              </div>
            </div>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default ContactPage;
