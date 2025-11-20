import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './CardSliderSection.css';


import Property1 from "../../assets/img3.jpg";
import Property2 from "../../assets/img3.jpg";
import Property3 from "../../assets/img3.jpg";
import Property4 from "../../assets/img3.jpg";
import Property5 from "../../assets/img3.jpg";

const bestProperties = [
  {
    id: 1,
    image: Property1,
    name: "فيلا فاخرة",
    location: "رام الله - الطيرة",
    price: "350,000$",
    button: "عرض التفاصيل",
  },
  {
    id: 2,
    image: Property2,
    name: "شقة حديثة",
    location: "غزة - الرمال",
    price: "120,000$",
    button: "عرض التفاصيل",
  },
  {
    id: 3,
    image: Property3,
    name: "منزل عائلي",
    location: "نابلس - رفيديا",
    price: "180,000$",
    button: "عرض التفاصيل",
  },
  {
    id: 4,
    image: Property4,
    name: "شقة بإطلالة بحرية",
    location: "حيفا - الكرمل",
    price: "250,000$",
    button: "عرض التفاصيل",
  },
  {
    id: 5,
    image: Property5,
    name: "عمارة استثمارية",
    location: "الخليل - وسط المدينة",
    price: "600,000$",
    button: "عرض التفاصيل",
  },
];

const CardSliderSection = () => {
  return (
    <Container className=" CardSection mt-5">
      <div className="section-title text-center mb-4">
        <h6 className="text-gold">عقارات مختارة</h6>
        <h2 className='h' >أفضل العقارات</h2>
        <p>اكتشف مجموعة من العقارات المميزة التي اخترناها خصيصًا لك</p>
      </div>

      <Row>
        <Col>
          <Swiper
            spaceBetween={20}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {bestProperties.map((property) => (
              <SwiperSlide key={property.id}>
                <div className="property-card">
                  <img className="property-img" src={property.image} alt={property.name} />
                  <div className="property-info">
                    <h4>{property.name}</h4>
                    <p className="location"><i className="fas fa-map-marker-alt"></i> {property.location}</p>
                    <p className="price">{property.price}</p>
                    <button className="details-btn">{property.button}</button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Col>
      </Row>
    </Container>
  );
};

export default CardSliderSection;
