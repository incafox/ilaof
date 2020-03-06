import React, { useState } from 'react'
import LogoHeader from './../../../assets/img/Dashboard/Header@2x.png'
import LogoDiploma from './../../../assets/img/header/diploma@2x.png'
import LogoMedalla from './../../../assets/img/header/medallas@2x.png'
import LogoTrofeo from './../../../assets/img/header/trofeo@2x.png'

const ToggleMessage = (id, action) => {
    switch (action) {
        case "show":
            document.getElementById(id).style.display = "block"
            document.getElementById(id).style.opacity = "1"
            break;
        case "hidde":
            document.getElementById(id).style.display = "none"
            document.getElementById(id).style.opacity = "0"
            break;
        default:
            break;
    }
}

export default function UserAverage() {
    const [average, setAverage] = useState({ average: '9.1', diplomas: 3, medallas: 15, trofeo: 0 })
    return (
        <div className="Average cards">
            <div>
                <div className="background-shadow">
                    <p className="title">Promedio</p>
                    <p className="content">{average.average}</p>
                </div>
                <img src={LogoHeader} className="imgHeader" alt="Imagen no disponible" />
            </div>
            <div className="Average-sections" style={{ marginTop: -20 + "px" }}>
                <img src={LogoDiploma} onMouseOver={() => ToggleMessage("DiplomaMessage", "show")} onMouseOut={() => ToggleMessage("DiplomaMessage", "hidde")} id="ImgDiploma" alt="Imagen no disponible" />
                <div className="Message" id="DiplomaMessage"><p>Completa tus exámenes para obtener diplomas</p></div>
                <p>Diplomas <span>{average.diplomas}</span></p>
            </div>
            <div className="Average-sections">
                <img src={LogoMedalla} alt="Imagen no disponible" onMouseOver={() => ToggleMessage("MedallaMessage", "show")} onMouseOut={() => ToggleMessage("MedallaMessage", "hidde")}/>
                <div className="Message" id="MedallaMessage"><p>Completa los módulos para obtener medallas</p></div>
                <p>Medallas <span>{average.medallas}</span></p>
            </div>
            <div className="Average-sections">
                <img src={LogoTrofeo} alt="Imagen no disponible" onMouseOver={() => ToggleMessage("TrofeoMessage", "show")} onMouseOut={() => ToggleMessage("TrofeoMessage", "hidde")}/>
                <div className="Message" id="TrofeoMessage"><p>Completa las metas para obtener trofeos</p></div>
                <p>Trofeos <span>{average.trofeo}</span></p>
            </div>
        </div>
    )
}
