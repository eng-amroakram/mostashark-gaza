import React from "react";
import { useTranslation } from "react-i18next";

const OffersPage = () => {
  const { t } = useTranslation();


  const properties = []; // مصفوفة العقارات

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      {properties.length === 0 ? (
        <div style={{ marginTop: "50px" }}>
          <p style={{ fontSize: "1.2rem", color: "#1E3A8A", fontWeight: "bold" }}>
            {t("offers.no_properties")}
          </p>
          <p style={{ color: "#555" }}>
            {t("offers.follow_soon")}
          </p>
        </div>
      ) : (
        <div className="properties-grid">
          {/* هنا يتم عرض بطاقات العقارات */}
        </div>
      )}
    </div>
  );
};

export default OffersPage;
