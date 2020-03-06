import React, { useState } from "react";
import "./EvaluacionesProfesor.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faChevronLeft, faChevronRight, faStar, faCircle } from "@fortawesome/free-solid-svg-icons";
function EvaluacionesProfesor() {
  const [comentarios, setComentarios] = useState([
    {
      id: 1,
      message: "Muy buen profesor, enseña todo con claridad",
      date: "10:25AM"
    },
    {
      id: 2,
      message: "Muy buen profesor, enseña todo con claridad",
      date: "10:25AM"
    },
    {
      id: 3,
      message: "Muy buen profesor, enseña todo con claridad",
      date: "10:25AM"
    },
    {
      id: 4,
      message: "Muy buen profesor, enseña todo con claridad",
      date: "10:25AM"
    },
    {
      id: 5,
      message: "Muy buen profesor, enseña todo con claridad",
      date: "10:25AM"
    }
  ]);
  const [evaluaciones, setEvaluacion] = useState([
    { id: 1, message: "Evaluacion 2-1", liga: "Ver Cuestionario", date: "15-05-2019 10:25AM" },
    { id: 2, message: "Evaluacion 2-1", liga: "Ver Cuestionario", date: "15-05-2019 10:25AM" },
    { id: 3, message: "Evaluacion 2-1", liga: "Ver Cuestionario", date: "15-05-2019 10:25AM" },
    { id: 4, message: "Evaluacion 2-1", liga: "Ver Cuestionario", date: "15-05-2019 10:25AM" },
    { id: 5, message: "Evaluacion 2-1", liga: "Ver Cuestionario", date: "15-05-2019 10:25AM" },
    { id: 6, message: "Evaluacion 2-1", liga: "Ver Cuestionario", date: "15-05-2019 10:25AM" },
    { id: 7, message: "Evaluacion 2-1", liga: "Ver Cuestionario", date: "15-05-2019 10:25AM" }
  ]);

  return (
    <div className="evaluaciones-profesor">
      <div className="top-list">
        <div className="header">
          <span className="text">Comentarios</span>
          <FontAwesomeIcon icon={faSearch} className="fa-search" />
          <input className="search" type="text" placeholder="Search" />
          <span className="pages">1 - 10</span>
          <button className="button-left">
            {" "}
            <FontAwesomeIcon icon={faChevronLeft} className="fa-chevron-left" />
          </button>
          <button className="button-right">
            {" "}
            <FontAwesomeIcon icon={faChevronRight} className="fa-chevron-right" />
          </button>
        </div>

        {comentarios.map((comentario) => {
          return (
            <div className="list-item" key={comentario.id}>
              <p className="star">
                <FontAwesomeIcon icon={faStar} className="fa-star" />
              </p>
              <p className="message">{comentario.message}</p>
              <p className="date">{comentario.date}</p>
            </div>
          );
        })}
      </div>
      <div className="bottom-list">
        <div className="header">
          <span className="text">Evaluacion</span>
          <FontAwesomeIcon icon={faSearch} className="fa-search" />
          <input className="search" type="text" placeholder="Search" />
          <span className="pages">1 - 10</span>
          <button className="button-left">
            {" "}
            <FontAwesomeIcon icon={faChevronLeft} className="fa-chevron-left" />
          </button>
          <button className="button-right">
            {" "}
            <FontAwesomeIcon icon={faChevronRight} className="fa-chevron-right" />
          </button>
        </div>
        {evaluaciones.map((evaluacion) => {
          return (
            <div className="list-item" key={evaluacion.id}>
              <p className="circle">
                <FontAwesomeIcon icon={faCircle} className="fa-circle" />
              </p>
              <p className="message">{evaluacion.message}</p>
              <p className="liga">{evaluacion.liga}</p>
              <p className="date">{evaluacion.date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EvaluacionesProfesor;
