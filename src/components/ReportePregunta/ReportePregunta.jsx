import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ReportePregunta.scss";
import Popup from "./../Popup/Popup";
import {
  withRouter, Link
} from 'react-router-dom'
import correcto from '../../assets/img/miscelaneos/flecha.png'
import bocina from '../../assets/img/miscelaneos/bocina.png'

function ReportePregunta() {
  const [perfilAlumno, setPerfilAlumno] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [respuesta, setRespuesta] = useState(false);
  const [showRightAnswer, setShowRighAnswer] = useState(false);
  const [showWrongAnswer, setShowWrongAnswer] = useState(false);

  const togglePopup = event => {
    const buttonAnswer = event.target.value;
    if (buttonAnswer == "Erroneo" || buttonAnswer == "Correcto") {
      setRespuesta(buttonAnswer);
    }

    setShowPopup(!showPopup);
  };
  const answerPopup = () => {
    setShowPopup(!showPopup);
    if (respuesta == "Correcto") {
      setShowRighAnswer(true);
      setShowWrongAnswer(false);
    } else if (respuesta == "Erroneo") {
      setShowRighAnswer(false);
      setShowWrongAnswer(true);
    }
  };

  const closeResult = () =>{
    setShowWrongAnswer(false);
    setShowRighAnswer(false);
  }

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("https://randomuser.me/api/");
      setPerfilAlumno(response.data.results[0]);
      //api call!
      const preguntas = await axios.get(
        "http://jsonplaceholder.typicode.com/posts"
      );

      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div id="reportePregunta" className="box-model">
      <div className="contenedor">
      {loading ? (
        "...Cargando Datos"
      ) : (
        <img src={perfilAlumno.picture.large}></img>
      )}
      <p className="user-name">{loading ? "...Cargando Datos" : perfilAlumno.name.first}</p>
      </div>
      <div className="push-top">
        <div className="bocina"><img src={bocina}></img></div>
        <div className="bocina">¿Qué utensilio utiliza el chef?</div>
      </div>
      <textarea className="box-model text-area" placeholder="He use spoon"></textarea>
      <textarea type="textarea" className="box-model text-area" placeholder="Respondi correctamente y me salio erroneo"></textarea>
      <div>
        <button className="answer-button  bg-red" onClick={togglePopup} value="Erroneo">
          Erroneo
        </button>
        <button className="answer-button  bg-green" onClick={togglePopup} value="Correcto">
          Correcto
        </button>
        {showPopup ? (
          <Popup
            text={respuesta}
            closePopup={togglePopup}
            answerPopup={answerPopup}
          />
        ) : null}
        {showRightAnswer ? (
          <div className="overlay">
            <div className="overlay-container">
            <div className="text"><img src={correcto}></img></div>
            <button className=" button " onClick={closeResult}><Link to='/reporte'>OK</Link></button>
            </div>
          </div>
        ) : null}
        {showWrongAnswer ? (
         <div className="overlay">
         <div className="overlay-container">
         <div className="text"><img src={correcto}></img></div>
         <button className=" button " onClick={closeResult}><Link to='/reporte'>OK</Link></button>
         </div>
       </div>
        ) : null}
      </div>
    </div>
  );
}

export default ReportePregunta;
