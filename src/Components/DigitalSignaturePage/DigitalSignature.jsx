
import React, { useRef, useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import SignatureCanvas from "react-signature-canvas";
import "./DigitalSignature.css";

const DigitalSignature = () => {
  const sigCanvas = useRef(null); 
  const [bgImage, setBgImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setBgImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const clearSignature = () => {
    if (sigCanvas.current) {
      sigCanvas.current.clear(); // يمسح التوقيع
    }
  };

  const saveSignature = () => {
    if (sigCanvas.current && !sigCanvas.current.isEmpty()) {
      const dataURL = sigCanvas.current.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = dataURL;
      link.download = "signature.png";
      link.click();
      alert("تم حفظ التوقيع كصورة!");
    } else {
      alert("لا يوجد توقيع!");
    }
  };

  return (
    <Container className="text-center py-5">
      <h2 className="DigitalSignature_h2">التوقيع الإلكتروني</h2>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label >اختر صورة من جهازك لتوقيعك عليها</Form.Label>
        <Form.Control type="file" accept="image/*" onChange={handleImageUpload} />
      </Form.Group>

      <div
        className="signature-container"
        style={{ position: "relative", display: "inline-block" }}
      >
        {bgImage && (
          <img
            src={bgImage}
            alt="Background"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "600px",
              height: "250px",
              borderRadius: "8px",
              zIndex: 0,
            }}
          />
        )}
        <SignatureCanvas
          ref={sigCanvas} 
          penColor="black"
          canvasProps={{
            width: 600,
            height: 250,
            className: "sigCanvas",
            style: { zIndex: 1, position: "relative" },
          }}
        />
      </div>

      <div className="mt-3">
        <Button variant="secondary" onClick={clearSignature} className=" ؤ  me-2">
          مسح
        </Button>
        <Button variant="primary" onClick={saveSignature} className="Save">
          حفظ التوقيع
        </Button>
      </div>
    </Container>
  );
};

export default DigitalSignature;
