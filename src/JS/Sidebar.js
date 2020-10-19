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


