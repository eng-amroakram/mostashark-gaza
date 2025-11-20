import React, { useEffect } from 'react';
import './ServicesSection.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import { 
  FaHome, FaHandshake, FaCalculator, FaBuilding, FaFileSignature, 
  FaMapMarkedAlt, FaChartLine, FaMoneyCheckAlt, FaDraftingCompass,
  FaBalanceScale, FaHammer, FaCloud
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

const ServicesSection = () => {
    const { t } = useTranslation();

    useEffect(() => {
      AOS.init({
        duration: 900,
        once: true,
        easing: "ease-in-out"
      });
    }, []);

    const data_services = [
      { id: "1", icon: FaHome },
      { id: "2", icon: FaCalculator },
      { id: "3", icon: FaBuilding },
      { id: "4", icon: FaHandshake },
      { id: "5", icon: FaDraftingCompass },
      { id: "6", icon: FaMoneyCheckAlt },
      { id: "7", icon: FaMapMarkedAlt },
      { id: "8", icon: FaChartLine },
      { id: "9", icon: FaBalanceScale },
      { id: "10", icon: FaHammer },
      { id: "11", icon: FaFileSignature },
      { id: "12", icon: FaCloud }
    ];

    return (
      <section className="services-section py-5">
        <Container>
          <div className="section-title" data-aos="fade-down">
            <h2>{t("services_section.title")}</h2>
            <p>{t("services_section.description")}</p>
          </div>

          <Row className='row'>
            {data_services.length ? (
              data_services.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Col 
                    key={item.id} 
                    lg={4} md={6} sm={12} xs={12}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="card-contact">
                      <Icon className="icon" />
                      <h3>{t(`services_section.cards.${item.id}.title`)}</h3>
                      <p>{t(`services_section.cards.${item.id}.description`)}</p>
                      <Link to={`/service/${item.id}`} className="service-btn">
                        {t("services_section.read_more")}
                      </Link>
                    </div>
                  </Col>
                );
              })
            ) : (
              <Col>
                <p>{t("services_section.no_data")}</p>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    );
};

export default ServicesSection;
