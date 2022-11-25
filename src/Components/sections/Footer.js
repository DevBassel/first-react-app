import React from "react";
import Logo from "../Logo";

export default function Footer() {
  return (
    <div className="bg-dark p-3 m-auto row w-100">
      <Logo />
      <div className="col text-white">
        <ul className="nav ">
        <li className="nav-item p-1">item1</li>
        <li className="nav-item p-1">item1</li>
        </ul>
      </div>
    </div>
  );
}
