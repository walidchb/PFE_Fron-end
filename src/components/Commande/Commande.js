import { React, useState } from "react";
import "./Cmd.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import EmailIcon from "@mui/icons-material/Email";
import DialpadIcon from "@mui/icons-material/Dialpad";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Commande() {
  function change() {}
  return (
    <div>
      <div className="pagee">
        <div className="PrincipalDivorder">
          <div className="header_div">
            <ShoppingCartIcon className="CartIcon" />
            <h3>Order/delivery Tracking</h3>
          </div>
          <div className="form">
            <h3 className="hadrainfo">Personal Information</h3>
            <div className="Name1">
              <div className="input-containerorder">
                <PersonIcon className="icon" />
                <input
                  className="input-field"
                  type="text"
                  placeholder="First Name"
                  name="usrnm"
                  onChange={change}
                />
              </div>
              <div className="input-containerorder">
                <PersonIcon className="icon" />
                <input
                  className="input-field"
                  type="text"
                  placeholder="Last Name"
                  name="usrnm"
                  onChange={change}
                />
              </div>
            </div>

            <div className="input-container2">
              <DialpadIcon className="icon" />
              <input
                className="input-field"
                type="text"
                placeholder="Phone Number"
                name="usrnm"
                onChange={change}
              />
            </div>
            <div className="input-container2">
              <EmailIcon className="icon" />
              <input
                className="input-field"
                type="text"
                placeholder="Email"
                name="usrnm"
                onChange={change}
              />
            </div>
            <h3 className="hadrainfo">Order Information</h3>

            <div className="input-container2">
              <LocationOnIcon className="icon" />
              <input
                className="input-field"
                type="text"
                placeholder="Delivery destination (Get your address on google maps)"
                name="usrnm"
                onChange={change}
              />
            </div>
            <div className="input-container2">
              <select className="select">
                <option value="">What is the type of this command</option>

                <option value="">Urgent (Right Now)</option>
                <option value="">For today</option>
                <option value="">Maximum Tomorrow </option>
              </select>
            </div>

            <button type="" className="SignUpButton">
              Submit{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Commande;
