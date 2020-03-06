import React from 'react';
import Items from "./Items"

import LogoMenuPrincipal from './../../assets/img/DashboardAdmin/bar-chart-2@2x.png'

export default function Sidebar() {
    return (
        <aside className="MenuAdmin main-sidebar sidebar-white-primary elevation-4" style={{ position: "fixed", top: "89px", "backgroundColor": "white" }}>
            <span href="" className="brand-link header">
                <span className="brand-text">Menu principal</span>
                <img src={LogoMenuPrincipal} alt="Imagen no disponible" />
            </span>

            <div className="sidebar os-host os-theme-light os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-transition os-host-scrollbar-vertical-hidden"><div className="os-resize-observer-host"><div className="os-resize-observer observed" style={{ left: "0px", right: "auto" }}></div></div><div className="os-size-auto-observer" style={{ height: "calc(100% + 1px)", float: "left" }}><div className="os-resize-observer observed"></div></div><div className="os-content-glue" style={{ margin: "0px -8px", width: "249px", height: "689px" }}></div><div className="os-padding"><div className="os-viewport os-viewport-native-scrollbars-invisible" ><div className="os-content" style={{height: "100%", width: "100%" }}>
                <nav className="mt-2">
                    <Items />
                </nav>

            </div></div></div><div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden"><div className="os-scrollbar-track"><div className="os-scrollbar-handle" style={{ width: "100%", transform: "translate(0px, 0px)" }}></div></div></div><div className="os-scrollbar os-scrollbar-vertical os-scrollbar-auto-hidden os-scrollbar-unusable"><div className="os-scrollbar-track"><div className="os-scrollbar-handle" style={{ height: "100%", transform: "translate(0px, 0px)" }}></div></div></div><div className="os-scrollbar-corner"></div></div>
        </aside>
    )
}