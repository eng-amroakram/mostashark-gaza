import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
   
  };

  return (
    <div className="login-page">
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={5}>
            <div className="login-card">
              <h2 className="text-center mb-4">تسجيل الدخول</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>البريد الإلكتروني</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="أدخل البريد الإلكتروني"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>كلمة المرور</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="أدخل كلمة المرور"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button variant="warning" type="submit" className=" button2 w-100">
                  تسجيل الدخول
                </Button>

                <p className="mt-3 text-center">
                  ليس لديك حساب؟ <a href="/signup">سجّل الآن</a>
                </p>
              </Form>
              
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
