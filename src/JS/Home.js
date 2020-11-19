import React from "react";
import "../CSS/Home.css";
import { useStateValue } from "./StateProvider";
import TableSort from "./TableSort";
function Home() {
  // eslint-disable-next-line
  const [{ user },dispatch] = useStateValue();
  return (
    <div className="home">
      
      <h1>Hiii  {user?.email}</h1>

      <h1>This is the Home Page</h1>
      
      <h1>Today sales</h1>
      
      <h1>Profit/Loss</h1>
      
      <h1>Khatabook today</h1>
     <TableSort/>
    </div>
  );
}

export default Home;
