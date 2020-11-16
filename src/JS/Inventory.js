import React from "react";
import { useStateValue } from "./StateProvider";
import Dashboard2 from "./Dashboard2.js";

function Inventory() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="inventory">
      <h1> Inventory page </h1>
      <h1>{user?.uid}</h1>
      <h1>{user?.email}</h1>
      <Dashboard2 />
    </div>
  );
}

export default Inventory;

//editable + quantity + tax/price + category by company/brand + import/export + searchbar + add/remove product + sort*
