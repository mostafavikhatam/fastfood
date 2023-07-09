import React from "react";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineTwitter, AiFillFacebook } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="footer__container">
      <div className="icon__container">
        <div className="icon-wrapper__contaienr">
          <FaInstagram className="icon" />
          <AiOutlineTwitter className="icon" />
          <AiFillFacebook className="icon" />
          <BsLinkedin className="icon" />
        </div>
        <p className="footer__text">@ 2021 ItalianFooood.com </p>
      </div>
    </div>
  );
}
