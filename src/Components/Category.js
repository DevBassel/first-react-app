import React, {  useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Category() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  
  return (
    <ul
      style={{ width: "fit-content" }}
      className="d-flex p-2 border justify-content-around  nav rounded-3 mt-3"
    >
      {category.map((item, index) => (
        <Link
          to={`/Filter/${item}`}
          key={index}
          className="bg-dark text-white-50 p-1 fw-bold rounded-3 m-1"
        >
          {item}
        </Link>
      ))}
    </ul>
  );
}
