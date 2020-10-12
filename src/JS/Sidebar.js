import React from "react";
import {Link} from "react-router-dom"
import "../CSS/Sidebar.css";

function Sidebar() {
  return (
    // <div className="profile">
    //   <h1>Sidebar page</h1>
    //   <ol>
    //     <li>Khatabook</li>
    //     <li>Analytics</li>
    //     <li>Inventory</li>
    //     <li>Customers</li>
    //     <li>Fee</li>
    //   </ol>
    // </div>
    <div className="wrapper">
      <div id="sidebar">
        <div className="sidebar_header">
          <h3>Bootstrap Slider</h3>
          </div>
      </div>
      <ul className="lisst_unstyled components">
        <p>
          The Providers
        </p>
        <li calssName="active">
          <Link to ="/" >

          </Link>
        </li>

      </ul>
    </div>
  );
}

export default Sidebar;

// 1) Read CSV file
// 2) Sort
// 3) Export Import
// 4 ) Chat bot
// 5) Print Receipts
// 6) Tender cash
// 7) On screen project addition
// 8) Customer import export
// 9) Search
// 10) payment gateway
// 11) Receipts
// 14) Feedback
// 15) Day-vise
// 19) Discount
// 20) Taxes
