import React, { useState, useEffect } from "react";
import axios from "axios";
import "./HomeForoProfesor.scss";
import { withRouter, Link } from "react-router-dom";
import { svgIcon } from "../../../constants/svgIcon/svgIcon";
import PopupForo from "./../PopupForo/PopupForo";

const HomeForoProfesor = () => {
  const [datosAlumno, setDatosAlumno] = useState([]);
  const [perfilAlumno, setPerfilAlumno] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("https://randomuser.me/api/");
      setPerfilAlumno(response.data.results[0]);
      //api call!
      const preguntas = await axios.get("http://jsonplaceholder.typicode.com/posts");
      setDatosAlumno(preguntas.data);
      setLoading(false);
    }
    fetchData();
  }, []);
  const togglePopup = (event) => {
    setShowPopup(!showPopup);
  };
  return (
    <div id="home-foro-profesor" className="box-model">
      <h1>Mis foros</h1>
      <div className="box">
        <div className="dl-in p-rl">
          <p>Nuevo Foro</p>
          <p>De: Profesor X</p>
        </div>
        <div className="dl-in p-rl btn-crear">
          <button onClick={togglePopup}>Crear</button>
        </div>
      </div>
      <div className="lista">
        <ul className="p-rl">
          {datosAlumno.map((pregunta) => {
            return (
              <li key={pregunta.id} pregunta-id={pregunta.id} className="box p-rl">
                <div className="dl-in p-rl">
                  <p className="textLeft">Como Pronunciar</p>
                  <p className="textRight">De Profesor: X</p>
                </div>
                <div className="dl-in p-rl foro-expirado">Foro Expirado</div>
                <div className="dl-in p-rl fecha"> 15 Jul 2019,</div>
                <Link to="/alumno/pregunta/${pregunta.id}">
                  <div className="dl-in p-rl icon">{svgIcon} </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {showPopup ? (
        <PopupForo
          userImage={perfilAlumno ? perfilAlumno.picture.large : "Joe"}
          userName={perfilAlumno ? perfilAlumno.name.first : "none"}
          closePopup={togglePopup}
          answerPopup={togglePopup}
        />
      ) : null}
    </div>
  );
};

export default HomeForoProfesor;
