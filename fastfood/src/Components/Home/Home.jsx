import React from "react";
import Nav from "../Nav";
import Footer from "../Footer";

export default function Home() {
  return (
    <div className="Home__container">
     
      <div className="Homeimage__container">
        <img
          src="./public/Images/Homeimage.jpg"
          alt="pizza"
          className="Homeimage"
        />
        <div className="Homeimagetext__container">
          <p className="Homeimagetext__first">Food Corner</p>
          <p className="Homeimagetext__second">ITALIAN FOOD AT CLICK</p>
          <button className="order">ORDER NOW</button>
        </div>
      </div>
      
    </div>
  );
}
