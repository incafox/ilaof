import React from "react";
import "./CorreoMensaje.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip, faFile , faChevronDown } from "@fortawesome/free-solid-svg-icons";

const CorreoMensaje = () => {
  return (
    <div className="correo-mensaje-component">
      <div className="top-box">
        <div>
          <label htmlFor="enviar">Enviar a</label>
          <FontAwesomeIcon icon={faChevronDown} className="fa-chevronDown" />
          <select name="enviar" id="enviar">
            <option value="javier">javier</option>
          </select>
        </div>
        <textarea placeholder="Escribe tu mensaje..." className="message-body" name="mensaje" id="mensaje" cols="30" rows="10"></textarea>
      </div>
      <div className="bottom-box">
        <div>
          <span className="attachment-text">ATTACHTMENT FILES:</span>
          <span>
         
          <label htmlFor="attachment"> <FontAwesomeIcon icon={faPaperclip} className="fa-paperclip" /></label>
            <input type="file" id="attachment">
             
            </input>
          </span>
        </div>
        <div>
          <span>
            <FontAwesomeIcon icon={faFile} className="fa-folder" />
          </span>
          <span>fileName.pxs</span>
        </div>
        <div>
          <span>
            <FontAwesomeIcon icon={faFile} className="fa-folder" />
          </span>
          <span>fileName.pxs</span>
        </div>
      </div>
    </div>
  );
};

export default CorreoMensaje;
