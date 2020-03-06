import React from 'react';
import { Link } from 'react-router-dom';

const ProfeDataInfo = ({profesor}) => {

    return (
        <div className="row">
            <div className="col">
                <div className="row d-flex justify-content-center">
                    <div className="card" style={{width:"30rem", padding:"1rem"}}>
                        <div className="row d-flex flex-row-reverse bd-highlight">
                            <p style={{color:"blue", marginRight:"1rem"}}>Eliminar</p>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <img alt="..." style={{borderRadius:"30rem", height:"7rem", width:"7rem"}}
                                    src={`https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQik0Z3ue9vXp_lrGo4KqzUNxGlmc0bsZaSgw3nOnKEw68-VJIf`} />
                        </div>
                        <div className="d-flex justify-content-center">
                            Profesor: {profesor.name}
                        </div>
                        <div className="d-flex justify-content-center">
                            <p>Calle: xxxxx</p>
                        </div>
                        <div className="row" style={{textAlign: "center", margin: "1rem"}}>
                            <div className="col">
                                <button type="button" className="btn btn-success">Habilitado</button>
                            </div>
                            <div className="col">
                                <button type="button" className="btn btn-outline-danger">Deshabilitar</button>
                            </div>
                        </div>
                        {/* <hr/> */}
                        <div className="d-flex justify-content-center" style={{textAlign:"center"}}>
                            Profesor desde: xxxxx
                        </div>
                        <div className="d-flex justify-content-center" style={{textAlign:"center"}}>
                            Ultimo pago: xxxxx
                        </div>
                        <div className="d-flex justify-content-center" style={{textAlign:"center"}}>
                            Horas conectado: xxxxx
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col d-flex justify-content-center">
                                Alumnos
                            </div>
                            <div className="col d-flex justify-content-center">
                                Calificacion
                            </div>
                            <div className="col d-flex justify-content-center">
                                Grupos
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <Link to={`/profesores/${profesor.id}/evaluaciones`}>
                        <button type="button" class="badge badge-pill badge-info" style={{width:"10rem", height:"2.5rem", background:"purple"}}>Ver mas</button>
                    </Link>
                </div>
            </div>
        </div>
        
    )
}

export default ProfeDataInfo;
