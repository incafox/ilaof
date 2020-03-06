import React, { useState, useEffect } from "react";
import "./Thread.scss";
import tripleDotIcon from "./../../../assets/img/miscelaneos/tripledoticon.svg";
import estrellaIcon from "./../../../assets/img/miscelaneos/estrella.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle,faChevronDown } from "@fortawesome/free-solid-svg-icons";
function Thread() {
  const [nombresAlumnos, setNombresAlumnos] = useState([]);
  const [listaUsuariosMensajes, setListaUsuariosMensajes] = useState([
    {
      nombre: "Eleonora Ribik",
      foro: "para foro 1",
      mensaje: "La mejor forma de aprender es estudiar",
      fecha: "12 Jul 2019, 10:30"
    },
    {
      nombre: "Juan Tolomeo",
      foro: "para foro 1",
      mensaje: "Estudiando en equipo se aprende mas",
      fecha: "12 Jul 2019, 9:30"
    },
    {
      nombre: "Simon Juarez",
      foro: "para foro 1",
      mensaje: "Preguntando es una buena forma de verificar el conocimiento",
      fecha: "12 Jul 2019, 11:30"
    }
  ]);
  useEffect(() => {
    setNombresAlumnos(["Michael", "Luis", "Richard"]);
  }, []);
  return (
    <div className="foro-profesor-thread">
      <div className="thread-list">
        {listaUsuariosMensajes.map((usuario,index) => {
          return (
            <div className="thread-container" key={index}>
              <div className="rounded-img">
                <img src="https://picsum.photos/200" alt="" />
              </div>
              <div className="user-description">
                <p className="nombre-correo">{usuario.nombre} &lt;elnora@gmail.com&gt;</p>
                <p className="para-foro">para foro 1</p>
                <p className="mensaje">En mi opinion la mejor manera de aprender es estudiando</p>
              </div>
              <div className="menu-options">
                <span className="date">15 Jul 2019, 10:30</span>
                <span className="star">
                  <img src={estrellaIcon} alt="" />
                </span>
                <span className="triple">
                  <img src={tripleDotIcon} alt="" />
                </span>
              </div>
            </div>
          );
        })}
        <div className="bottom-thread">
          <div className="missing-users">
            {listaUsuariosMensajes.map((usuario, index) => {
              return <button className="" key={index}>{usuario.nombre}</button>;
            })}
          </div>
          <div className="missing-profesor">
            <div className="user-description">
              <p className="nombre-correo">Elnora Reese &lt;elnora@gmail.com&gt; </p>
              <p className="para-foro">para foro 1</p>
              <p className="mensaje">Flata de aportar un comentario</p>
            </div>
            <div className="rounded-img">
              <img src="https://picsum.photos/200" alt="" />
            </div>
          </div>
        </div>

        <div className="comment-thread">
          <div className="header-input">
            <div className="alumno-select">
              <FontAwesomeIcon  icon={faChevronDown} className="fa-chevron" />
              <select defaultValue="Alumno" id="expira-minutos" name="expira-minutos" form="user">
                <option disabled={true} value="Alumno">
                  Alumno
                </option>
                {nombresAlumnos.map((alumno) => {
                  return (
                    <option key={alumno} value={alumno}>
                      {alumno}
                    </option>
                  );
                })}
              </select>
            </div>
            <p className="nombrados-label">Nombrados</p>
            <div className="nombrados-button">
              <button>John Michel</button>
              <button>Alex Smith</button>
            </div>
          </div>
          <div>
            <textarea className="aportar-comentarios" name="aportar-comentarios" id="aportar-comentarios" cols="30" rows="10" placeholder="Por favor aportar un comentario"></textarea>
            <div className="enviar-button">
              <button>Enviar</button>
            </div>
          </div>
        </div>
      </div>
      <div className="users-list">
        <h1>Miembros del foro</h1>
        <hr />
        <div className="user-container">
          <div className="rounded-img">
            <img src="https://picsum.photos/200" alt="" />
          </div>
          <div className="user-details">
            <p>Luis Matias</p>
            <p>
              {" "}
              <FontAwesomeIcon fixedWidth={true} icon={faCircle} color="#35EA50" style={{ height: "14px" }} /> Nivel1 5,8,4
            </p>
          </div>
          <div className="user-more">
            <button>Más</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Thread;
