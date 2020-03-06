import React from "react";
import "./BandejaEntrada.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTag, faTrash, faEnvelope, faFolder, faStar } from "@fortawesome/free-solid-svg-icons";
import { Checkbox } from "primereact/checkbox";
import { InputText } from "primereact/inputtext";
import { useState } from "react";

function BandejaEntrada() {
  const [bulk,setBulk] = useState(false);
  const [emailOperations,setEmailOperations] = useState(false);
  const [searchInput,setSearchInput] = useState("");
  return (
    <div className="entrada-componente">
      <div className="header">
        <span className="check-box">
          <Checkbox onChange={(e) => setBulk(e.checked)} checked={bulk}></Checkbox>
        </span>
        <span className="trash">
          <FontAwesomeIcon icon={faTrash} className="fa-trash" />
        </span>
        <span className="mail">
          <FontAwesomeIcon icon={faEnvelope} className="fa-envelope" />
        </span>
        <span className="folder">
          <FontAwesomeIcon icon={faFolder} className="fa-folder" />
        </span>
        <span className="tag">
          <FontAwesomeIcon icon={faTag} className="fa-tag" />
        </span>
        <span className="search">
          <FontAwesomeIcon icon={faSearch} className="fa-search" />
          <InputText  id="search-input"  placeholder="Search" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
          {/* <input type="text" className="search-input" placeholder="Search" /> */}
        </span>
        <span className="page">1-10 of 10</span>
      </div>
      <div className="lista">
        <span className="check-box">
        <Checkbox onChange={(e) => setEmailOperations(e.checked)} checked={emailOperations}></Checkbox>
        </span>
        <span className="star">
          <FontAwesomeIcon icon={faStar} className="fa-star" />
        </span>
        <span className="image">
          <img src="https://picsum.photos/200" alt="User"></img>
        </span>
        <span className="message">
          <p className="t1">Lorem ipsum dolor sit amet.</p>
          <p className="t2">Lorem ipsum dolor sit amet.</p>
        </span>
        <span className="date">
          <p> 5 jul 2020</p>
          <p> 10:55AM</p>
        </span>
      </div>
    </div>
  );
}

export default BandejaEntrada;
