import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import Slider from "react-slick";
import { FaHome, FaHouseDamage } from "react-icons/fa";
import before1 from "../../assets/img-1.jfif";
import before2 from "../../assets/photo_1.jpg";
import before3 from "../../assets/photo_2.jpg";
import before4 from "../../assets/img-4.jfif";
import after1 from "../../assets/photo-5.jpg";
import after2 from "../../assets/photo-6.png";
import after3 from "../../assets/photo-7.png";
import after4 from "../../assets/photo-8.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./GazaGallery.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const NextArrow = ({ onClick }) => (
  <div className="custom-arrow next" onClick={onClick}>›</div>
);

const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow prev" onClick={onClick}>‹</div>
);

const GazaGallery = () => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-in-out" });
  }, []);

  const openSlider = (images) => {
    setCurrentImages(images);
    setShowModal(true);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Container className="text-center py-5">
      
     
      <h2 className="mb-4" data-aos="fade-down">
        {t("gaza_gallery.title")}
      </h2>


      <Row className="justify-content-center mb-4">
        <Col md={4} className="mb-3" data-aos="fade-up" data-aos-delay="100">
          <Button
            className="icon-button after-btn"
            onClick={() => openSlider([after1, after2, after3, after4])}
          >
            <FaHouseDamage size={80} color="#fff" />
            <div>{t("gaza_gallery.after")}</div>
          </Button>
        </Col>

        <Col md={4} className="mb-3" data-aos="fade-up" data-aos-delay="200">
          <Button
            className="icon-button before-btn"
            onClick={() => openSlider([before1, before2, before3, before4])}
          >
            <FaHome size={80} color="#fff" />
            <div>{t("gaza_gallery.before")}</div>
          </Button>
        </Col>
      </Row>

     
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
        <Modal.Body data-aos="zoom-in">
          <Slider {...sliderSettings}>
            {currentImages.map((img, idx) => (
              <div key={idx}>
                <img
                  src={img}
                  alt={`slide-${idx}`}
                  style={{ width: "100%", borderRadius: "15px" }}
                />
              </div>
            ))}
          </Slider>
        </Modal.Body>
      </Modal>

    </Container>
  );
};

export default GazaGallery;
