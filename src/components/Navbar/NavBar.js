import React from "react";
import "./NavBar.css";
import CustomizedBadges from "./CustomizedBadges";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function NavBar(props) {
  const [Search, setSearch] = useState("");
  const [ToSend, setToSend] = useState("");

  function SearchButton() {
    props.functionEvent();
  }

  return (
    <div className="navbar">
      <div className="navleft">
        <img className="gife" src="./images/output-onlinegiftools.gif" alt="" />
        <h1 className="Websitename">WZ-S H O P</h1>
      </div>

      <div className="searchDiv">
        <input
          type="text"
          name=""
          value={Search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Search Product"
          className="searchInput"
        />
        <button type="" className="searchButton" onClick={SearchButton}>
          <SearchIcon />
        </button>
      </div>

      <Link to="/cart">
        <CustomizedBadges />
      </Link>
    </div>
  );
}

export default NavBar;
