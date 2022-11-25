import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

export default function NavBar() {
  return (
    <div className="bg-secondary ">
      <div className="container p-2 d-flex justify-content-between">
        <Logo/>
        <ul className="nav ">
          <li className="nav-item border ps-2 pe-2 ms-1 me-1 fw-bold text-dark rounded-3">
            <Link className=" text-dark" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item border ps-2 pe-2 ms-1 me-1 fw-bold text-dark rounded-3">
            <Link className=" text-dark" to="/About">
              About
            </Link>
          </li>
          <li className="nav-item border ps-2 pe-2 ms-1 me-1 fw-bold text-dark rounded-3">
            <Link className=" text-dark" to="/Cart">
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
