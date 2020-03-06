import React from 'react';
import ItemPanel from "./ItemPanel";
import { 
    faHome,
    faEnvelope,
    faUserFriends,
    faChalkboardTeacher,
    faChartLine
 } from '@fortawesome/free-solid-svg-icons';

export default function LeftPanel({onChangeUrl}) {

    const mainUrl = "/messages";

    const items = [
        {url: "/inbox",name: "Entrada", icon: faHome, color: "#025EE5"},
        {url: "/sent",name: "Enviados", icon: faEnvelope, color: "#f66278"},
        {url: "/drafts",name: "Borradores", icon: faUserFriends, color: "#04cb04"},
        {url: "/trash",name: "Eliminados", icon: faChalkboardTeacher, color: "#40d6f2"},
        {url: "/favs",name: "Favoritos", icon: faChartLine, color: "#172b4d"}
    ]

    return (
        <div className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="true">
            {items.map(i => <ItemPanel item={i} key={i.url} mainUrl={mainUrl} onChangeUrl={onChangeUrl}/>)}
        </div>
    )
}
