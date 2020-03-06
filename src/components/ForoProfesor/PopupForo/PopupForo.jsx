import React, { useState } from "react";
import "./PopupForo.scss";
import { svgIcon } from "../../../constants/svgIcon/svgIcon";
import { useEffect } from "react";
import { Link } from "react-router-dom";
function PopupForo(props) {
  const [grupos, setGrupos] = useState([""]);
  const [expiraDias, setExpiraDias] = useState([]);
  const [expiraHoras, setExpiraHoras] = useState([]);
  const [expiraMinutos, setExpiraMinutos] = useState([]);

  useEffect(() => {
    for (let index = 0; index < 60; index++) {
      (function(index) {
        setExpiraMinutos((expiraMinutos) => [...expiraMinutos, index + 1]);
      })(index);
    }
    for (let index = 0; index < 24; index++) {
      (function(index) {
        setExpiraHoras((expiraHoras) => [...expiraHoras, index + 1]);
      })(index);
    }
    for (let index = 0; index < 365; index++) {
      (function(index) {
        setExpiraDias((expiraDias) => [...expiraDias, index + 1]);
      })(index);
    }

    setGrupos(["Grupo 1", "Grupo 2", "Grupo 3", "Grupo 4", "Grupo 5"]);
  }, []);
  return (
    <div id="popup-foro" className="popup" >
      <div className="popup_inner">
        <div className="box p-rl">
          <div className="p-rl">
            <img className="user-image dl-in p-a user-image" src={props.userImage} alt="" />
            <p className="dl-in p-a user-name">{props.userName}</p>
            <p className="dl-in p-a current-date">15, Jul, 2019</p>
            <p className="dl-in p-a dot-menu">{svgIcon}</p>
          </div>
          <div className="p-rl">
            <label className="p-a expira-label">Expira en:</label>
            {/* <input
              className="p-a"
              type="date"
              name="fecha-expiracion"
              id="fecha-expiracion"
            /> */}
            <select defaultValue="dias" className="p-a" id="expira-dias" name="expira-dias" form="user">
            <option disabled={true} value="dias">Días</option>
              {expiraDias.map((dia) => {
                return (
                  <option key={dia} value={dia}>
                    {dia} dias
                  </option>
                );
              })}
            </select>
            <select defaultValue="Horas" className="p-a" id="expira-horas" name="expira-horas" form="user" placeholder="Horas">
            <option  disabled={true} value="Horas">Horas</option>
              {expiraHoras.map((hora) => {
                return (
                  <option key={hora} value={hora}>
                    {hora} Horas
                  </option>
                );
              })}
            </select>
            <select defaultValue="Mins"  className="p-a" id="expira-minutos" name="expira-minutos" form="user">
            <option  disabled={true} value="Mins">Mins</option>
              {expiraMinutos.map((minuto) => {
                return (
                  <option key={minuto} value={minuto}>
                    {minuto} Mins
                  </option>
                );
              })}
            </select>
          </div>
          <div className="p-rl">
            <label className="p-a grupo-label">Grupo:</label>
            <select className="p-a" id="grupo" name="grupo" form="user">
              {grupos.map((grupo) => {
                return (
                  <option key={grupo} value="volvo">
                    {grupo}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="box p-rl">
          <input className="p-a" id="input-foro-titulo" type="text" placeholder="Título" />
          <textarea className="p-a" placeholder="Redacte una explicación en el foro" name="popup-textarea-body" id="popup-textarea-body" cols="30" rows="10"></textarea>
          {console.log(expiraMinutos)}
          <Link to="/foro/profesor/${pregunta.id}/comentarios">
          <button className="crear-button" onClick={props.closePopup}>Crear</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default PopupForo;
