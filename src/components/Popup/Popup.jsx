import React from 'react'
import "./Popup.scss"
function Popup (props) {
      return (
        <div id="popup-alumno" className='popup'>
          <div className='popup_inner'>
            <p>Se calificara como '{props.text}':</p>
            <p>¿Estas seguro?</p>
          <button className="answer-button small bg-white" onClick={props.closePopup}>Cancelar</button>
          <button className="answer-button small bg-blue" onClick={props.answerPopup} value="true">Continuar</button>
          </div>
        </div>
      );

  }
  export default Popup;