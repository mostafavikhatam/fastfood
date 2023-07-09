import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

export default function Cards({data}) {
  return (
    <div className="cards__container">
      {data.map((item) => (
        <Link key={item.id} to={`${item.id}`}>
          <Card {...item} />
        </Link>
      ))}
    </div>
  );
}
