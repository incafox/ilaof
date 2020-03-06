import React from 'react'
import DiplomaBackground from './../../assets/img/Dashboard/Diplomaback.svg'
import LogoArrow from './../../assets/img/LearnBoard/arrow_left.svg'
import LogoDown from './../../assets/img/Dashboard/download.svg'
import LogoSite from './../../assets/img/Dashboard/logo_ilaofmexico@2x.png'
import LogoCorona from './../../assets/img/Dashboard/coronas@2x.png'


import { Link, useParams } from 'react-router-dom'
export default function Diploma() {
    const { level, name } = useParams()
    return (
        <div className="Diploma">
            <div className="Diploma-options">
                <div className="backPage">
                    <Link to='/logros'><img src={LogoArrow} alt="Imagen no disponible" /></Link>
                </div>
                <div className="backPage download">
                    <img src={LogoDown} alt="Imagen no disponible" />
                </div>
            </div>
            <div className="Diploma-container" style={{ backgroundImage: "url('" + DiplomaBackground + "')" }}>
                <div className="content">
                    <div className="content-header">
                        <img src={LogoCorona} alt="Imagen no disponible" />
                        <h1>¡Felicidades!</h1>
                    </div>
                    <div className="content-description">
                        <p>Haz completano el</p>
                        <p className="level">Nivel {level}</p>
                        <p>Satisfactoriamente</p>
                    </div>
                    <div className="content-footer">
                        <p>{name}</p>
                    </div>
                    <img src={LogoSite} alt="Imagen no disponible" />
                </div>
            </div>
        </div>
    )
}
