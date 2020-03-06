import React from 'react'
import './../../dist/css/forum.min.css'
import LogoOpciones from './../../assets/img/Dashboard/LogoOpciones.svg'
import props from './ForumsProps.json'
import { Link } from 'react-router-dom'
export default function Forums() {
    return (
        <div className="Forum">
            <div className="Forum-container">
                <div className="Forum-container-box">
                    <p className="title">Foros, Profesor X</p>

                    <div className="Forum-container-box-print">
                        {props.forums.map((item, key) => {
                            return (
                                <Link to={item.state==="Foro activo"?`/foros/foro/${item.id}`:"/foros"} className="item" key={key} style={{zIndex:key}}>
                                    <div className="item-section1">
                                        <p>{item.title}</p>
                                        <small>De {item.author}</small>
                                    </div>
                                    <div className="item-section2">
                                        <small className={item.state==="Foro activo"?"active":""}>{item.state}</small>
                                    </div>
                                    <div className="item-section3">
                                        <p>{item.date}.</p>
                                    </div>
                                    <div className="item-section4">
                                        <img src={LogoOpciones} alt="Imagen no disponible" />
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
