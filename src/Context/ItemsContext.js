import React, { createContext, useEffect, useState } from "react";

export const ItemContext = createContext();

export default function ItemProvider(props) {
  const [proudcts, setproudcts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setproudcts(data));
  }, []);
  return (
    <ItemContext.Provider value={proudcts}>{props.children}</ItemContext.Provider>
  );
}
