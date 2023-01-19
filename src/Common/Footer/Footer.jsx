import React from "react";
import ButtomFooter from "../../Components/Footers/ButtomFooter/ButtomFooter";
import TopFooter from "../../Components/Footers/TopFooter/TopFooter";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="Footer-section-background">
        <div className="footer-background-overlay"></div>
        <div>
          <TopFooter></TopFooter>
          <ButtomFooter></ButtomFooter>
        </div>
      </div>
    </div>
  );
};

export default Footer;
