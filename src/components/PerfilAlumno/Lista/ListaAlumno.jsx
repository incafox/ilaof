import React, { useState, useEffect } from "react";
import axios from "axios";
import './ListaAlumno.scss'
import {
  withRouter, Link
} from 'react-router-dom'

const ListaAlumno = () => {
  const [datosAlumno, setDatosAlumno] = useState([]);
  const [perfilAlumno, setPerfilAlumno] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(  () => {
    async function fetchData() {
      const response = await axios.get("https://randomuser.me/api/");
      setPerfilAlumno(response.data.results[0]);
      //api call!
      const preguntas = await axios.get(
        "http://jsonplaceholder.typicode.com/posts"
      );
      setDatosAlumno(preguntas.data);
      setLoading(false);
    }
    fetchData();
  }, []);
  return (
    <div id="listaAlumno" className="box-model">
      {loading ? ("...Cargando Datos"):(<img src={perfilAlumno.picture.large}></img>)}
      <p className="user-name">{loading ? "...Cargando Datos" : perfilAlumno.name.first}</p>
      <div className="linea-horizontal"></div>
      <ul>
        {datosAlumno.map(pregunta => {
          return  <li key={pregunta.id} pregunta-id={pregunta.id}><Link to='/alumno/pregunta/${pregunta.id}'>
            <p className="textLeft">Nivel 1, Modulo 3, Seccion 1,Bloque 5</p>
            <p className="textRight">Responde con el Audio</p>
            </Link></li>;
        })}
      </ul>
    </div>
  );
};

export default withRouter(ListaAlumno);
