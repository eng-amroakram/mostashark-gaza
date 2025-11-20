import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './OurTeam.css'
import member1 from "../../assets/photo_.jpg";
import member2 from "../../assets/photo_.jpg";
import member3 from "../../assets/photo_.jpg";
import member4 from "../../assets/photo_.jpg";
import member5 from "../../assets/photo_.jpg";
import member6 from "../../assets/photo_.jpg";

const OurTeam = () => {
  const teamMembers = [
    { id: '1', img: member1, name: 'م. أحمد يوسف', title: 'مستشار عقاري أول' },
    { id: '2', img: member2, name: 'سارة الخطيب', title: 'خبيرة مبيعات عقارية' },
    { id: '3', img: member3, name: 'م. محمد العلي', title: 'مهندس تقييم عقاري' },
    { id: '4', img: member4, name: 'ليان الحاج', title: 'مديرة التسويق العقاري' },
    { id: '5', img: member5, name: 'د. خالد مراد', title: 'مستشار تمويل عقاري' },
    { id: '6', img: member6, name: 'إيمان منصور', title: 'خدمة العملاء والدعم' },
  ];

  return (
    <>
      <section className="OurTeam">
        <Container>
          <h4 className="section-subtitle">فريقنا المتميز</h4>
          <h3 className="section-title">تعرف على نخبة مستشارك العقاري</h3>

          <Row className="justify-content-center">
            {teamMembers.length ? (
              teamMembers.map((member) => (
                <Col key={member.id} md={6} lg={4} sm={12} className="mb-4">
                  <div className="team-card ">
                    <img className="team-img" src={member.img} alt={member.name} />
                    <div className="team-info">
                      <h5>{member.name}</h5>
                      <h6>{member.title}</h6>
                    </div>
                  </div>
                </Col>
              ))
            ) : (
              <Col>
                <p>لا يوجد أعضاء فريق لعرضهم حالياً</p>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default OurTeam;
