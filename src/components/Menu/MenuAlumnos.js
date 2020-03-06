import React, { useState } from 'react'
import LogoDash from './../../assets/img/header/dash@2x.png'
import LogoLearn from './../../assets/img/header/aprender@2x.png'
import LogoLogros from './../../assets/img/header/star@2x.png'
import LogoApuntes from './../../assets/img/header/apuntes@2x.png'
import LogoForos from './../../assets/img/header/volume-2@2x.png'
import LogoPago from './../../assets/img/header/pagos@2x.png'
import LogoMail from './../../assets/img/header/mail@2x.png'
import LogoCalendar from './../../assets/img/header/calendar@2x.png'
import LogoNotification from './../../assets/img/header/notification@2x.png'
import { Link } from 'react-router-dom'
import UserApuntes from '../Dashboards/DashboardAlumnos/UserApuntes'

function MenuAlumnos() {
    const [notifications, setNotifications] = useState({ mail: 0, calendar: 0, alerts: 3 })
    const OpenAPuntes = (e, action) => {
        let apuntes = document.getElementById("Dashboar_Apuntes")
        switch (action) {
            case "open":
                if (apuntes.style.display !== "block") { CloseApuntes(); }
                apuntes.style.display = "block"

                break;
            case "":
                apuntes.style.display = "none";
                document.querySelector("body").removeEventListener("click", OpenAPuntes)
                break;
            default:
                if (e !== null && e.target.id !== "Dashboar_Apuntes") {
                    console.log(e)
                    apuntes.style.display = "none";
                    document.querySelector("body").removeEventListener("click", OpenAPuntes)
                }
                return false
        }
    }
    const CloseApuntes = () => {
        document.querySelector("body").addEventListener("click", OpenAPuntes)
    }
    return (
        <div className="MenuAlumnos">
            <div className="MenuAlumnos-container">
                <div className="MenuAlumnos-container--links">
                    <div>
                        <img src={LogoDash} alt="Imagen no disponible" />
                        <Link to="/dashboard"><p>Dashboard</p></Link>
                    </div>
                    <div>
                        <img src={LogoLearn} alt="Imagen no disponible" />
                        <Link to="/aprender"><p>Aprender</p></Link>
                    </div>
                    <div>
                        <img src={LogoLogros} alt="Imagen no disponible" />
                        <Link to="/logros"><p>Logros</p></Link>
                    </div>
                    <div>
                        <img onClick={() => { OpenAPuntes(null, "open") }} src={LogoApuntes} alt="Imagen no disponible" />
                        <p onClick={() => { OpenAPuntes(null, "open") }}>Apuntes</p>
                    </div>
                    <div>
                        <img src={LogoForos} alt="Imagen no disponible" />
                        <Link to="/foros"><p>Foros</p></Link>
                    </div>
                    <div>
                        <img src={LogoPago} alt="Imagen no disponible" />
                        <p>Pagos</p>
                    </div>
                </div>
                <div className="MenuAlumnos-container--notifications">
                    <div>
                        <img src={LogoMail} alt="Imagen no disponible" />
                        {notifications.mail > 0 ? <div className="notification">
                            <p>{notifications.mail}</p>
                        </div> : null}
                    </div>
                    <div>
                        <img src={LogoCalendar} alt="Imagen no disponible" />
                        {notifications.calendar > 0 ? <div className="notification">
                            <p>{notifications.calendar}</p>
                        </div> : null}
                    </div>
                    <div>
                        <img src={LogoNotification} alt="Imagen no disponible" />
                        {notifications.alerts > 0 ? <div className="notification">
                            <p>{notifications.alerts}</p>
                        </div> : null}
                    </div>
                    <UserApuntes/>
                </div>
            </div>
        </div>
    )
}

export default MenuAlumnos
