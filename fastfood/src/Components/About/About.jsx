import React from "react";
import Nav from "../Nav";
import Footer from "../Footer";

export default function About() {
  return (
    <div className="aboutus__container">
      <div className="content__container">
        <div className="aboutusimage__container">
          <img
            src="../public/Images/aboutus image.jpg"
            className="aboutusimage"
            alt="pasta"
          />
        </div>
        <div className="aboutus-text__container">
          <div className="aboutus-text-first__container">
            <p className="aboutus-text-first">ABOUT US</p>
          </div>
          <div className="aboutus-text-second__container">
            <p className="aboutus-text-second">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
              quam repudiandae sapiente corporis! Distinctio dicta eaque velit
              voluptate minus ab! Quo totam tempora assumenda beatae maiores eum
              culpa accusamus quaerat ducimus deleniti facilis eos aspernatur
              eaque, temporibus repudiandae vero alias odit incidunt possimus
              minima expedita? Adipisci culpa molestias at hic explicabo facere
              soluta debitis earum aperiam esse laborum repellendus repellat
              dolorum corporis excepturi nemo deleniti maiores enim,
              necessitatibus quam porro vitae consequatur unde ut? Pariatur
              distinctio dolore nisi similique esse debitis laudantium vero
              corporis. Nam repellat laborum nisi incidunt ea obcaecati quidem
              numquam exercitationem dolores fuga, quas itaque rem ducimus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
