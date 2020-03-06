import React from "react";
import "./Redactar.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEnvelope, faPaperPlane, faEdit, faStar } from "@fortawesome/free-solid-svg-icons";

function Redactar() {
  return (
    <div className="redactar-component">
      <button className="redactar">
        <Link to="/messages/new">+ Redactar</Link>
      </button>
      <div className="menu">
        <p className="entrada">
          <span>
            <FontAwesomeIcon icon={faEnvelope} className="fa-envelope" />
          </span>
          Entrada
        </p>
        <p className="enviados">
          <span>
            <FontAwesomeIcon icon={faPaperPlane} className="fa-paperplane" />
          </span>
          Enviados
        </p>
        <p className="borradores">
          <span>
            <FontAwesomeIcon icon={faEdit} className="fa-faEdit" />
          </span>
          Borradores
        </p>
        <p className="eliminados">
          <span>
            <FontAwesomeIcon icon={faTrash} className="fa-trash" />
          </span>
          Eliminados
        </p>
        <p className="favoritos">
          <span>
            <FontAwesomeIcon icon={faStar} className="fa-star" />
          </span>
          Favoritos
        </p>
      </div>
    </div>
  );
}

export default Redactar;
