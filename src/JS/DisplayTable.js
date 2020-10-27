import React from 'react'
import './DisplayTable.css'
import {Link} from 'react-router-dom'
const tabledata = [
    {Name:"Noodles",Price:150,Av_Qty:10},
    {Name:"Pasta",Price:80,Av_Qty:11},
    {Name:"Pizza",Price:500,Av_Qty:20},
    {Name:"Burger",Price:100,Av_Qty:50}
];
tabledata.sort(function(a, b){return b.Name - a.Name});
const listItems = tabledata.map(
  (object,i)=>
    <tr>  <td>{object.Name}</td><td>{object.Price}</td><td>{object.Av_Qty}</td> </tr>
);
const a = JSON.stringify(tabledata);
function DisplayTable() {
    return (
        <div>
    <Link>
        <h1> Sort!!!</h1>
    </Link>   
  <p></p>
  <table>
  <tr> <th>Name</th>  <th>Price</th>   <th>Av_Qty</th>  </tr>
  {listItems}
  </table>
  
        </div>
    )
}

export default DisplayTable
