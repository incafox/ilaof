import React from 'react'
import './../../dist/css/achievements.min.css'
import Logocorona from './../../assets/img/Dashboard/coronas@2x.png'
import Logodiploma from './../../assets/img/Dashboard/diploma.svg'

import props from './AchievementsProps.json'
import { Link } from 'react-router-dom'

const userInfo = {
    name: 'Jorge Test'
}

export default function Achievements() {
    return (
        <div className="Achievements">
            <div className="Achievements-container">
                <div className="Achievements-container-header">
                    <div>
                        <img src={Logocorona} alt="Imagen no disponible" />
                    </div>
                    <h2>TUS LOGROS</h2>
                </div>
                <p className="subtitle">Diplomas</p>
                <img src={Logodiploma} alt="Imagen no disponible" />
                <div className="Achievements-container-print">
                    {props.achievements.map((item, key) => {
                        return (
                            <Link to={item.state==="done"?`/logros/diploma/${item.level}/${userInfo.name}`:"/logros"}> <div className="item" style={{ opacity: item.state === "done" ? 1 : 0.5, cursor: item.state === "done" ? "pointer" : "default" }}>
                                <div className="logo">
                                    <img src={Logodiploma} alt="Imagen no disponible" />
                                </div>
                                <p>Nivel {item.level}</p>
                            </div>
                            </Link>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}
