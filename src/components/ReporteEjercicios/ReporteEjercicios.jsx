import React, { useState, useEffect } from "react";
import axios from "axios";
import './ReporteEjercicios.scss'
import {
  withRouter, Link
} from 'react-router-dom'

function ReporteEjercicios() {
    const [listaProfesor, setListaProfesor] = useState([]);
    const [perfilProfesor, setPerfilProfesor] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(  () => {
        async function fetchData() {
          const response = await axios.get("https://randomuser.me/api/");
          setPerfilProfesor(response.data.results[0]);
          //api call!
          const preguntas = await axios.get(
            "http://jsonplaceholder.typicode.com/posts"
          );
          setListaProfesor(preguntas.data);
          setLoading(false);
        }
        fetchData();
      }, []);
    return (
         <div id="reporteProfesor" className="box">
             <p className="header">Reporte a Ejercicios</p>
      <ul>
        {listaProfesor.map(pregunta => {
          return  <li key={pregunta.id} pregunta-id={pregunta.id}><Link to='/reporte/preguntas/:id'>
            <p className="left-image"><img src="https://picsum.photos/200"></img></p>
            <p className="user-name">Nombre Alumno {pregunta.id}</p>
            <div className="box-model">
            <p className="datos-curso">Nivel 1, Modulo 3, Seccion1, Bloque 5</p>
            <p className="texto-audio">Responde con el Audio</p>
            </div>
            </Link></li>;
        })}
      </ul>
    </div>
    )
}

export default ReporteEjercicios
