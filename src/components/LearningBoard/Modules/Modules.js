import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import './../../../dist/css/modules.min.css'

import LogoModule from './../../../assets/img/LearnBoard/class1_Level1.svg'
import ProgressImg from './../../../assets/img/LearnBoard/progress.svg'
import LogoSesion1 from './../../../assets/img/LearnBoard/Level_1/sesion1.svg'
import LogoSesion2 from './../../../assets/img/LearnBoard/Level_1/sesion2.svg'
import LogoSesion3 from './../../../assets/img/LearnBoard/Level_1/sesion3.svg'
import LogoSesion4 from './../../../assets/img/LearnBoard/Level_1/sesion4.svg'
import LogoFooter from './../../../assets/img/LearnBoard/Logo_footer.svg'
import LogoMedallas from './../../../assets/img/Dashboard/medallas.svg'
import LogoArrow from './../../../assets/img/LearnBoard/arrow_left.svg'
import ModuleGoal from './ModuleGoal'


export default function Modules() {
    let { level, module } = useParams()
    const initialState = {
        sessions: [
            {
                id: 1,
                logo: LogoSesion1,
                progress: 100
            }, {
                id: 2,
                logo: LogoSesion2,
                progress: 100
            }, {
                id: 3,
                logo: LogoSesion3,
                progress: 100
            }, {
                id: 4,
                logo: LogoSesion4,
                progress: 100
            }
        ],
        progress: 100
    }
    const [Module, setModule] = useState(initialState)
    return (
        <div className="Modules">
            <div className="Modules-container">
                <div className="backPage">
                   <Link to={"/aprender"}><img src={LogoArrow} alt="Imagen no disponible"/></Link>
                </div>
                <div className="Modules-content">
                    <p className="title">Modulo</p>
                    <img src={LogoModule} alt="Imagen no disponible"/>
                    <p className="title--number">{module}</p>
                    <div className="Modules-sessions">
                        <div className="sesion">
                            <div className="progress">
                                <img src={ProgressImg} alt="Imagen no disponible" />
                                <div className="progress-container" style={{ width: Module.sessions[0].progress + "%" }}></div>
                                <div className="progress-container shadow" style={{ width: (74.3 * (Module.sessions[0].progress / 100)) + "px", position: "absolute" }}></div>
                            </div>
                            <div>
                                <p>Sesión</p>
                            </div>
                            <Link to={`/aprender/modules/${level}/${module}/session/${1}`}><img className="SesionLogo" src={LogoSesion1} alt="Imagen no disponible" /></Link>
                            <p className="sessionNumber">1</p>
                        </div>
                        <div>
                            <div className="progress">
                                <img src={ProgressImg} alt="Imagen no disponible" />
                                <div className="progress-container" style={{ width: Module.sessions[1].progress + "%" }}></div>
                                <div className="progress-container shadow" style={{ width: (74.3 * (Module.sessions[0].progress / 100)) + "px", position: "absolute" }}></div>
                            </div>
                            <div>
                                <p>Sesión</p>
                            </div>
                            <Link to={`/aprender/modules/${level}/${module}/session/${2}`}><img className="SesionLogo" src={LogoSesion2} alt="Imagen no disponible" /></Link>
                            <p className="sessionNumber">2</p>
                        </div>
                        <div>
                            <div className="progress">
                                <img src={ProgressImg} alt="Imagen no disponible" />
                                <div className="progress-container" style={{ width: Module.sessions[2].progress + "%" }}></div>
                                <div className="progress-container shadow" style={{ width: (74.3 * (Module.sessions[0].progress / 100)) + "px", position: "absolute" }}></div>
                            </div>
                            <div>
                                <p>Sesión</p>
                            </div>
                            <Link to={`/aprender/modules/${level}/${module}/session/${3}`}><img className="SesionLogo" src={LogoSesion3} alt="Imagen no disponible" /></Link>
                            <p className="sessionNumber">3</p>
                        </div>
                        <div>
                            <div className="progress">
                                <img src={ProgressImg} alt="Imagen no disponible" />
                                <div className="progress-container" style={{ width: Module.sessions[3].progress + "%" }}></div>
                                <div className="progress-container shadow" style={{ width: (74.3 * (Module.sessions[0].progress / 100)) + "px", position: "absolute" }}></div>
                            </div>
                            <div>
                                <p>Sesión</p>
                            </div>
                            <Link to={`/aprender/modules/${level}/${module}/session/${3}`}><img className="SesionLogo" src={LogoSesion4} alt="Imagen no disponible" /></Link>
                            <p className="sessionNumber">4</p>
                        </div>
                    </div>
                    <div className="Modules-footer">
                        <img className="ImgFooter1" src={LogoMedallas} alt="Imagen no disponible" />
                        <p>100%</p>
                        <img className="ImgFooter2" src={LogoFooter} alt="Imagen no disponible" />
                    </div>
                    <div className="CardGoal">
                        <ModuleGoal initialState={{restante:'2 Horas',tiempo:14,meta:'Completa una sesión en 5 min'}} />
                    </div>
                </div>
            </div>
        </div>
    )
}
