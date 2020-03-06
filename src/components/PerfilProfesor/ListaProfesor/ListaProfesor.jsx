import React, { useState, useEffect } from "react";
import axios from "axios";
import './ListaProfesor.scss'
import {
  withRouter, Link
} from 'react-router-dom'

function ListaProfesor() {
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
         <div id="listaProfesor" className="box-model">
           
      {loading ? ("...Cargando Datos"):(<img src={perfilProfesor.picture.large}></img>)}
      <p className="user-name">{loading ? "...Cargando Datos" : perfilProfesor.name.first}</p>
      <div className="linea-horizontal"></div>
      <ul>
        {listaProfesor.map(pregunta => {
          return  <li key={pregunta.id} pregunta-id={pregunta.id}><Link to='/alumno/:id'>
            <p className="number">{pregunta.id}</p>
            <p className="textLeft"><img src="https://picsum.photos/200"></img></p>
            <p className="textRight">Alumno {pregunta.id}</p>
            </Link></li>;
        })}
      </ul>
    </div>
    )
}

export default ListaProfesor
