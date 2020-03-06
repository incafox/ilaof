import React from 'react'
import './../../dist/css/forum.min.css'
import LogoOptions from './../../assets/img/Dashboard/LogoOpciones.svg'
import LogoFav from './../../assets/img/Dashboard/LogoFav.svg'
import UserLogo1 from './../../assets/img/Forum/UserLogo1@2x.png'
import UserLogo2 from './../../assets/img/Forum/UserLogo2@2x.png'
import ProfesorLogo1 from './../../assets/img/Forum/ProfesorLogo1@2x.png'
import LogoSend from './../../assets/img/Forum/LogoSend@2x.png'
import { Link } from 'react-router-dom'


export default function Forum() {
    const props = {
        id: 0,
        messages: [
            { id: 0, logo: UserLogo1, author: "Elnora Reese", email: "elnora@gmail.com", to: "Foro 1", message: "En mi opinion la mejor manera de aprender es estudiando", date: "15 Jul 2019, 10:30" },
            { id: 1, logo: UserLogo2, author: "Lois Jimenez", email: "lois_jim@gmail.com", to: "Elnora Reese", message: "Concuerdo completamente contigo", date: "15 Jul 2019, 10:32" },
            { id: 2, logo: UserLogo1, author: "Elnora Reese", email: "elnora@gmail.com", to: "Lois Jimenez", message: "Muchas gracias", date: "15 Jul 2019, 10:33" }
        ]
    }
    return (
        <div className="Forum">
            <div className="Forum-container Forum-type2">
                <div className="Forum-container-box Forum-type2-box">

                    <div className="Forum-container-box-print">
                        {props.messages.map((item, key) => {
                            return (
                                <div className="item">
                                    <div className="item-logo">
                                        <img src={item.logo} alt="Imagen no disponible" />
                                    </div>
                                    <div className="item-section1">
                                        <p>{item.author} &lt;{item.email}&gt;</p>
                                        <small>Para {item.to}</small>
                                        <p className="Message">{item.message}</p>
                                    </div>
                                    <div className="item-section2">
                                        <small className={item.state === "Foro activo" ? "active" : ""}>{item.state}</small>
                                    </div>
                                    <div className="item-section3">
                                        <p>{item.date}.</p>
                                    </div>
                                    <div className="item-section4">
                                        <img src={LogoFav} alt="Imagen no disponible" />
                                    </div>
                                    <div className="item-section4">
                                        <img src={LogoOptions} alt="Imagen no disponible" />
                                    </div>
                                </div>
                            )
                        })}
                        <div className="item item-footer">
                            <div className="item-section1">
                                <p>Profesor X</p>
                                <small>Para Foro 1</small>
                                <p className="Message">Falta de aportar un comentario</p>
                            </div>
                            <div className="item-logo">
                                <img src={ProfesorLogo1} alt="Imagen no disponible" />
                            </div>
                        </div>

                        <div className="MessageBox">
                            <div>
                                <select>
                                    <option>Para Foro 1</option>
                                    <option>Para Elnora Reese</option>
                                    <option>Para Lois Jimenez</option>
                                </select>
                            </div>
                            <textarea placeholder="Escribe algo...">
                            </textarea>
                            <Link><button><img src={LogoSend} alt="Imagen no disponible" />Enviar</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
