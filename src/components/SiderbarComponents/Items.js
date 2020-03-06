import React from 'react';
import Item from "./Item";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LogoHome from './../../assets/img/DashboardAdmin/Menu/home.svg'
import LogoMail from './../../assets/img/DashboardAdmin/Menu/mail.svg'
import LogoUsers from './../../assets/img/DashboardAdmin/Menu/users.svg'
import LogoUser from './../../assets/img/DashboardAdmin/Menu/user.svg'
import LogoTrending from './../../assets/img/DashboardAdmin/Menu/trending-up.svg'
import LogoCalendar from './../../assets/img/DashboardAdmin/Menu/calendar.svg'
import LogoDollar from './../../assets/img/DashboardAdmin/Menu/dollar-sign.svg'
import LogoMessage from './../../assets/img/DashboardAdmin/Menu/message-square.svg'
import LogoCopy from './../../assets/img/DashboardAdmin/Menu/copy.svg'
import LogoVol from './../../assets/img/DashboardAdmin/Menu/volume-2.svg'
import LogoSettings from './../../assets/img/DashboardAdmin/Menu/settings.svg'
import { 
    faHome,
    faEnvelope,
    faUserFriends,
    faChalkboardTeacher,
    faChartLine,
    faCalendarMinus,
    faDollarSign,
    faCommentAlt,
    faChalkboard,
    faVolumeUp,
    faCog
 } from '@fortawesome/free-solid-svg-icons';

export default function Items() {

    const token = localStorage.getItem('token');
    const jsonToken = JSON.parse(token);
    const roleUser = jsonToken.role;
    console.log("roleUser",roleUser);
    const items = [
        {url: "/inicio",name: "Inicio", icon: LogoHome, color: "#025EE5" , role: [1]},
        {url: "/messages",name: "Mensajes", icon: LogoMail, color: "#f66278", role: [1, 2]},
        {url: "/students",name: "Alumnos", icon: LogoUsers, color: "#04cb04", role: [1]},
        {url: "/profesores",name: "Profesores", icon: LogoUser, color: "#40d6f2", role: [1]},
        {url: "/ganancias",name: "Ganancias", icon: LogoTrending, color: "#172b4d", role: [1]},
        {url: "/calendario",name: "Calendario", icon: LogoCalendar, color: "#f66278", role: [1]},
        {url: "/pagos",name: "Pagos", icon: LogoDollar, color: "#04cb04", role: [1]},
        {url: "/comunicados",name: "Comunicados", icon: LogoMessage, color: "#fec686", role: [1]},
        {url: "/cursos",name: "Cursos", icon: LogoCopy, color: "#312563", role: [1]},
        {url: "/foro",name: "Foro", icon: LogoVol, color: "#172b4d", role: [1]},
        {url: "/evaluations",name: "Evaluaciones", icon: LogoSettings, color: "#f66278", role: [2]},
        {url: "/setting",name: "Settings", icon: LogoSettings, color: "#fa8065", role: [1]},
    ]

    const data = items.map(reg => {
        if(reg.role.includes(roleUser)){
            return {url: reg.url, name: reg.name, icon: reg.icon, color: reg.color}
        } else {
            return {};
        }
    }).filter(element => element.url);

    return (
        <div className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            {
                data.map((item, idx) => <Item item={item} key={idx}/> )
            }
        </div>
    )
}
