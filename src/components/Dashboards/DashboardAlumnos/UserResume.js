import React, { useState } from 'react'
import LogoProgress from './../../../assets/img/Dashboard/Shape.svg'
import LogoDate from './../../../assets/img/Dashboard/Oval.svg'
import { Link } from 'react-router-dom'

export default function UserResume() {
    const [UserResume, setUserResume] = useState({ level: 4, modul: 4, progress: 89, date: 'May 12, 12:30 am' })
    return (
        <div className="Dashboard-Section1-userResumen">
            <div>
                <p className="Level">Nivel {UserResume.level}</p>
                <div className="ResumeContainer">
                    <div>
                        <img src={LogoProgress} alt="Imagen no disponible" />
                    </div>
                    <div>
                        <p className="Modul">Modulo {UserResume.modul} <span className="progress">({UserResume.progress}%)</span></p>
                        <p className="date"><img src={LogoDate} id="LogoDate" alt="Imagen no disponible" /> {UserResume.date}</p>
                    </div>
                </div>
            </div>
            <div className="userResumen">
                <button><Link to="/aprender">Continuar</Link></button>
                <div className="userResumen-container">
                    <div className="userResumen-shape shape1"></div>
                    <div className="userResumen-shape shape2">
                    </div>

                </div>
                <div className="userResumen-container">
                    <div className="userResumen-shape shape3"></div>
                    <div className="userResumen-shape shape4">
                    </div>
                </div>
            </div>
        </div>
    )
}
