import React from "react";
import InputField from "./InputField";
import "../CSS/Newshop.css";
import { db } from "./firebase.js";
import { useStateValue } from "./StateProvider";

function Newshop() {
  const [{ user }, dispatch] = useStateValue();

  const inputRefs = React.useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);

  // eslint-disable-next-line
  const [data, setData] = React.useState({});

  const handleChange = (name, value) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(user);
    let isValid = true;

    for (let i = 0; i < inputRefs.current.length; i++) {
      const valid = inputRefs.current[i].current.validate();
      console.log(valid);
      if (!valid) {
        isValid = false;
      }
    }

    if (!isValid) {
      return;
    }

    var time=new Date().getTime()

    
  
    db.collection("users")
      .doc(user?.uid)
      .collection("shops")
      .doc("abcdef")
      .set({
        shopName: data.shopName,
        ShopCity: data.ShopCity,
        yourName: data.yourName,
        contact: data.contact,
        timestamp: time,
      })
      .then(alert("Shop Info Saved"))
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="newshop">
      <div className="newshop__text">

        <h1>Hiiiii {user?.email}</h1>
        <span className="newshop__header"> Your Shop Details </span> <br />
        <span className="newshop__para">
          We need your shop details to get started. A register and few sample
          products will be automatically created so that you can quickly
          checkout.
        </span>
      </div>
      <div className="newshop__form"> </div>
      <form onSubmit={submitForm} className="form">
        <h1>Add Shop Info</h1>
        <InputField
          ref={inputRefs.current[0]}
          type="text"
          name="shopName"
          label="Shop Name*:"
          onChange={handleChange}
          validation={"required"}
          placeholder=" Shop Name"
        />
        <InputField
          ref={inputRefs.current[1]}
          type="text"
          name="ShopCity"
          label="Shop City*:"
          validation="required"
          onChange={handleChange}
          placeholder=" Shop City"
        />
        <InputField
          ref={inputRefs.current[2]}
          type="text"
          name="yourName"
          label="Your Name*:"
          validation="required"
          onChange={handleChange}
          placeholder=" Your Name"
        />
        <InputField
          ref={inputRefs.current[3]}
          type="text"
          name="contact"
          label="Your Contact*:"
          validation="required|min:10|max:10"
          onChange={handleChange}
          placeholder=" Contact No."
        />

        <input type="file" id="img" name="img" accept="image/*" />

        <button type="submit">Start Selling</button>
      </form>
    </div>
  );
}

export default Newshop;
