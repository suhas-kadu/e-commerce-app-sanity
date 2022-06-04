import React from "react";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineFacebook,
  AiOutlineTwitterSquare,
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 All Rights Reserved</p>
      <p className="icons">
        <AiOutlineFacebook className="icon" />
        <AiFillTwitterCircle className="icon" />
        <AiOutlineInstagram className="icon" />
      </p>
    </div>
  );
};

export default Footer;
