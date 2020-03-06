import React, { useState } from 'react';
import diplomaLogo from './../../assets/img/header/diploma@2x.png'
import medallasLogo from './../../assets/img/header/medallas@2x.png'
import trofeoLogo from './../../assets/img/header/trofeo@2x.png'

export default function HeaderAlumnos({ user }) {
    const userInfo = {
        ...user,
        name: 'Jorge Test'
    }
    const logoutUser = () => {
        localStorage.removeItem("token");
        window.location.href = "/";
    }
    const [userStats, setUserStats] = useState({timeLine:"15 Hrs",diplomas:3,medallas:15,trofeos:0});
    return (
        <div className="ila-header">
            <div className="container" style={{ "display": "flex", "height": "100%" }}>
                <div className="ila-header-logo">
                    <img src="/images/ila_logo.png" width="64px" style={{ "borderRadius": "8px" }} alt="Imagen no disponible" />
                </div>
                <div className="ila-header-timeLine"><p><b>Tiempo en linea </b>: {userStats.timeLine}</p></div>
                <div className="ila-header-stats">
                    <div className="ila-header-stats--content">
                        <img src={diplomaLogo} alt="Imagen no disponible" />
                        <p>{userStats.diplomas}</p>
                    </div>
                    <div className="ila-header-stats--content">
                        <img src={medallasLogo} style={{ "borderRadius": "8px" }} alt="Imagen no disponible" />
                        <p>{userStats.medallas}</p>
                    </div>
                    <div className="ila-header-stats--content">
                        <img src={trofeoLogo} style={{ "borderRadius": "8px" }} alt="Imagen no disponible" />
                        <p>{userStats.trofeos}</p>
                    </div>
                </div>
                <div className="ila-header-user">
                    <div className="ila-header-user--section1">
                        <p className="User--name">{userInfo.name}</p>
                        <p className="User--status">Disponible</p>
                    </div>
                    <div className="ila-header-user--section2">
                        <img src={user.image} alt="Imagen no disponible" onClick={()=>logoutUser()}/>
                    </div>
                </div>
            </div>
        </div>
    )
}