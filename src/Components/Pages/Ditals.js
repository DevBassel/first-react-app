import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Ditals() {
  const [item, setItem] = useState([]);
  const param = useParams().itemId;
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${param}`)
      .then((res) => res.json())
      .then((json) => setItem(json));
  }, [param]);
  console.log(item);
  return (
    <div className="container m-auto row row-cols-1 row-cols-md-2 mt-5" style={{ Height: "" }}>
      <div className="col text-center">
        <img
          className="img-fluid "
          style={{ height: "300px" }}
          src={item.image}
          alt="pro_umg"
        />
      </div>
      <div className="col d-flex align-items-center  p-1">
        <ul className="list-group w-100">
          <li className="list-group-item active " aria-current="true">
            {item.title}
          </li>
          <li className="list-group-item">
            <span className="text-primary fw-bold ">Category : </span>
            {item.category}
          </li>
          <li className="list-group-item">
            <span className="text-primary fw-bold ">Description : </span>
            {item.description}
          </li>
          <li className="list-group-item">
            <span className="text-primary fw-bold ">Price : </span>
            {item.price}$
          </li>
          <li className="list-group-item">
            <span className="text-primary fw-bold "> Rating: </span>
           {item.rating === undefined ? "":item.rating.rate}
          </li>
          <li className="list-group-item">
            <span className="text-primary fw-bold ">In stock : </span>
            {item.rating === undefined ? "":item.rating.count}
          </li>
        </ul>
      </div>
    </div>
  );
}
