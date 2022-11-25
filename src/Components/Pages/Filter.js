import Card from "../Card";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
export default function Filter() {
  const param = useParams().CatName;
   const [items, setItems] = useState([]);
   useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/category/${param}`)
    .then((res) => res.json())
    .then((json) => setItems(json));
   },[param]);
  console.log(param);
  return (
    <div className="row container m-auto row-cols-1 row-cols-sm-2 row-cols-md-4  ">
      {items.map((el) => (
        <Card key={el.id} data={el} />
      ))}
    </div>
  );
}
