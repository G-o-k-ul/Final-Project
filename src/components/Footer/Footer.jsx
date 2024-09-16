import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        
        <span> CONTACT MAIL :    gokulhari9977@gmail.com</span>
        <div className="f-icons">
        <a href="https://instagram.com/gokula_kannan_offl?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D">
          <Insta color="white" size={"3rem"} /></a>
          <Facebook color="white" size={"3rem"} />
          <a href="https://github.com/G-o-k-ul">
          <Github color="white" size={"3rem"} /> </a>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
