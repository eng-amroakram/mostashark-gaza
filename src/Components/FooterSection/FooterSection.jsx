import React from 'react';
import './FooterSection.css';
import { Col, Container, Row } from 'react-bootstrap';
import Fac_Img from "../../assets/fac.png";
import twiter_Img from "../../assets/twiter.png";
import insta_Img from "../../assets/insta.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const FooterSection = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={6} lg={3}>
            <h3 className="footer-title">{t("footer.title")}</h3>
            <p>{t("footer.description")}</p>

            <div className="footer-contact">
              <div className="footer-icon">
                <FontAwesomeIcon icon={faPhone} className="phone" />
              </div>
              <div className="footer-text">
                <p>{t("footer.contact")}</p>
                <p>+970 56-746-5459</p>
              </div>
            </div>

            <div className="footer-contact">
              <div className="footer-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="footer-text">
                <p>{t("footer.email")}</p>
                <p>mostasharakalaqary255@gmail.com</p>
              </div>
            </div>
          </Col>

          <Col xs={6} sm={6} md={6} lg={3}>
            <h2>{t("footer.quick_links_title")}</h2>
            <ul>
              <li><Link to="/">{t("footer.home")}</Link></li>
              <li><Link to="/FaqSection">{t("footer.faq")}</Link></li>
              <li><Link to="/ServicesSection">{t("footer.services")}</Link></li>
              <li><Link to="/ContactPage">{t("footer.contact_us")}</Link></li>
            </ul>
          </Col>

          <Col xs={6} sm={6} md={6} lg={3}>
            <h2>{t("footer.our_services_title")}</h2>
            <ul>
              <li><a href="#">{t("footer.service_1")}</a></li>
              <li><a href="#">{t("footer.service_2")}</a></li>
              <li><a href="#">{t("footer.service_3")}</a></li>
              <li><a href="#">{t("footer.service_4")}</a></li>
              <li><a href="#">{t("footer.service_5")}</a></li>
            </ul>
          </Col>

          <Col xs={12} sm={12} md={6} lg={3}>
            <h2>{t("footer.subscribe_title")}</h2>
            <form className="form-footer">
              <input type="email" placeholder={t("footer.email_placeholder")} />
              <button type="submit">{t("footer.subscribe_button")}</button>
            </form>
            <ul className="Social">
              <li><a href="https://www.facebook.com/share/14LxpfqSdPb/"><img src={Fac_Img} alt="Facebook" /></a></li>
              <li><a href="https://x.com/mostasharak_?s=09"><img src={twiter_Img} alt="Twitter" /></a></li>
              <li><a href="https://www.instagram.com/mostasharak_alaqary?igsh=MTRvZ3FremgybXM2eA=="><img src={insta_Img} alt="Instagram" /></a></li>
            </ul>
          </Col>
        </Row>
      </Container>

      <div className="footer-bottom">
        <Container>
          <Row>
            <Col sm={12}>
              <h6>
                © {new Date().getFullYear()} {t("footer.rights")} 
                <span> {t("footer.title")}</span>
              </h6>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default FooterSection;
