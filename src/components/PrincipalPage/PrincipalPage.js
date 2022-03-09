import "./PrincipalPage.css";
import { Outlet } from "react-router-dom";
import NavBar from "../Navbar/NavBar";
import { React, useState } from "react";
import PrincipalHome from "./principalHome";

function PrincipalPage() {
  const [Category, setCategory] = useState("All");

  function All() {
    setCategory("All");
  }
  function Bonbons() {
    setCategory("epicerie-bonbons-chocolat");
  }
  function Vaisselles() {
    setCategory("epicerie-vaisselle");
  }
  function Alimentation() {
    setCategory("epicerie-alimentaire");
  }
  function Boissons() {
    setCategory("boissons");
  }
  function Miels() {
    setCategory("miels-confitures-pates-a-tartiner");
  }
  function Cosmétique() {
    setCategory("cosmetique");
  }
  function Nettoyage() {
    setCategory("nettoyage");
  }

  function functionEvent() {
    alert("search");
  }
  return (
    <div>
      <NavBar functionEvent={functionEvent} />
      <div className="scroll-container">
        <ul className="categorie">
          <li>
            <button type="" onClick={All}>
              All
            </button>
          </li>
          <li>
            <button type="" onClick={Bonbons}>
              Bonbons et Chocolats
            </button>
          </li>
          <li>
            <button type="" onClick={Vaisselles}>
              Vaisselles
            </button>
          </li>
          <li>
            <button type="" onClick={Alimentation}>
              Alimentation
            </button>
          </li>
          <li>
            {" "}
            <button type="" onClick={Boissons}>
              Boissons
            </button>
          </li>
          <li>
            <button type="" onClick={Miels}>
              Miels ,Confitures ,et Pates a Tartiner
            </button>
          </li>
          <li>
            <button type="" onClick={Cosmétique}>
              Cosmétique
            </button>{" "}
          </li>
          <li>
            <button type="" onClick={Nettoyage}>
              Nettoyage
            </button>{" "}
          </li>
        </ul>
      </div>

      <PrincipalHome Category={Category} />
    </div>
  );
}

export default PrincipalPage;
