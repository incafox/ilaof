import React, { useState, useEffect } from 'react'
import LogoCorona from './../../../assets/img/Dashboard/coronas@2x.png'
import LogoMedallas from './../../../assets/img/header/medallas@2x.png'
import LogoDiploma from './../../../assets/img/header/diploma@2x.png'
import LogoTrofeo from './../../../assets/img/header/trofeo@2x.png'

export default function UserLogros() {
    const [Logros, setLogros] = useState({ modules: { module: 4, level: 4, progress: 87 }, level: { level: 4, progress: 95 }, mind: { mind: 100, progress: 70 } })
    useEffect(() => {
        let progressModules = document.getElementById("progressModule")
        let progressLevel = document.getElementById("progressLevel")
        let progressMind = document.getElementById("progressMind")

        progressModules.style.width = Logros.modules.progress + "%"
        progressLevel.style.width = Logros.level.progress + "%"
        progressMind.style.width = Logros.mind.progress + "%"

    }, [])
    return (
        <div className="Logros cards">
            <div className="Logros-header"><img src={LogoCorona} alt="" /><p>TUS PROXIMOS LOGROS</p> </div>
            <div className="Logros-modules flex">
                <div>
                    <div className="progress--border">
                        <div className="progress--fill" id="progressModule" style={{ width: (Logros.modules.progress - 20) + "%" }}>
                            <div className="progress--shadow"></div>
                        </div>
                    </div>

                    <p>Completa el Modulo 4 - nivel 4</p>

                </div>
                <img src={LogoMedallas} alt="" />
            </div>
            <div className="Logros-level flex">
                <div>
                    <div className="progress--border">
                        <div className="progress--fill" id="progressLevel" style={{ width: (Logros.level.progress - 20) + "%" }}>
                            <div className="progress--shadow"></div>
                        </div>
                    </div>
                    <p>Completa el nivel 4</p>
                </div>
                <img src={LogoDiploma} alt="" />
            </div>
            <div className="Logros-mind flex">
                <div>
                    <div className="progress--border">
                        <div className="progress--fill" id="progressMind" style={{ width: (Logros.mind.progress - 20) + "%" }}>
                            <div className="progress--shadow"></div>
                        </div>
                    </div>
                    <p>Ejercita tu mente 100 min</p>
                </div>
                <img src={LogoTrofeo} alt="" />
            </div>
        </div>
    )
}
