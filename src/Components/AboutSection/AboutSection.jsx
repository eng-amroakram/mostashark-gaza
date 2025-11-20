import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./AboutSection.css";
import about1_Img from "../../assets/About-2.jfif";
import about2_Img from "../../assets/photo_1.jpg";
import about3_Img from "../../assets/About-3.jpg";
import { FaBuilding, FaBullseye, FaEye, FaHeart, FaSquare } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutSection = () => {
const { t, i18n } = useTranslation();//ملف الترجمة

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);                            //للحركة

  const iconClass = () => (i18n.language === "en" ? "icon icon-left" : "icon icon-right"); //للترجمة

  return (
    <section className={`about-section py-5 ${i18n.language === "ar" ? "rtl" : ""}`}>
      <Container>
        <Row className="align-items-center">
          {/* القسم الأيمن: النصوص */}
          <Col lg={6} md={12} className="about-details">
            <h2 className="title mb-3">
              <FaBuilding className={iconClass()} /> {t("about_section.title")}
            </h2>
            <p>{t("about_section.intro1")}</p>
            <p>{t("about_section.intro2")}</p>

            <div className="about-box" data-aos="fade-left" data-aos-delay="200">
              <h5><FaBullseye className={iconClass()} /> {t("about_section.mission_title")}</h5>
              <p>{t("about_section.mission_desc")}</p>
            </div>

            <div className="about-box" data-aos="fade-left" data-aos-delay="300">
              <h5><FaEye className={iconClass()} /> {t("about_section.vision_title")}</h5>
              <p>{t("about_section.vision_desc")}</p>
            </div>

            <div className="values" data-aos="fade-left" data-aos-delay="400">
              <h5><FaHeart className={iconClass()} /> {t("about_section.values_title")}</h5>
              <ul>
                {t("about_section.values_list", { returnObjects: true }).map((value, index) => (
                  <li key={index}>{value}</li>
                ))}
              </ul>
            </div>
          </Col>

          {/* القسم الأيسر: الصور */}
          <Col lg={6} md={12}  className="img-all">

            <Row className="justify-content-center">
              <Col xs={4}><img src={about1_Img} alt="About 1" className="img-1" data-aos="fade-up" /></Col>
              <Col xs={5}><img src={about2_Img} alt="About 2" className="img-2" data-aos="fade-up" data-aos-delay="150"/></Col>
            </Row>

         
            <Row className="justify-content-center mt-4">
              <Col xs={4}><img src={about3_Img} alt="About 3" className="img-3" data-aos="fade-up" data-aos-delay="200"/></Col>
              <Col xs={5}>
                <div className="num_20" data-aos="zoom-in">
                  <h3>{t("about_section.experience_year")}</h3>
                  <h4>{t("about_section.experience_text")}</h4>
                </div>
              </Col>
            </Row>

          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
