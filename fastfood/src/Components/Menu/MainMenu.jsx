import React, { useState } from "react";
import Card from "./Card";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
let mainFood;

const MainFood = ({ data }) => {
  const params = useParams();
  if (params.id <= data.cards.length) {
    mainFood = data.cards.findIndex((item) => item.id == params.id);
  } else {
    return <Navigate to="/menu" />;
  }

  return (
    <div className="mainmenu__container">
      <div className="maincards__container ">
        <Card {...data.cards[mainFood]} />
      </div>
    </div>
  );
};

export default MainFood;
