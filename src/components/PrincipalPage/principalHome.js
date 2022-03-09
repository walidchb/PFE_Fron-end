import React from "react";
import "./PrincipalPage.css";

import ListTest from "../ListTest";
import Slide from "../Slide/Slide";
import Footer from "../Footer/Footer";

function PrincipalHome(props) {
  return (
    <div>
      <Slide />

      <div className="products">
        <ListTest Category={props.Category} />
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default PrincipalHome;
