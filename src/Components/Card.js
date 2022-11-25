import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
  const { data } = props;
  return (
    <div className="p-2 box ">
      <div className="card shadow-sm">
        <img
          className="img-fluid w-75 m-auto"
          src={data.image}
          alt="Card-img"
        />
        <div className="card-body position-relative">
          <h5 className="card-title">{data.title}</h5>
          <Link to={`/Ditals/${data.id}`} className="text-center rounded-3 d-block nav-link text-white position-absolute w-50 m-auto bg-dark p-2 bottom-0 start-50 translate-middle-x">
            View product
          </Link>
        </div>
      </div>
    </div>
  );
}
