import {React } from "react";
import Category from "../Category";
import Card from "../Card";
import ItemProvider, { ItemContext } from "../../Context/ItemsContext";
import { useContext } from "react";




export default function Main() {
 const items = useContext(ItemContext);
  

  return (
    <div className="container">
      <ItemProvider>
        <Category />
        <h1>Content</h1>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4  ">
          {items.map((el) => (
            <Card key={el.id} data={el} />
          ))}
        </div>
      </ItemProvider>
    </div>
  );
}
