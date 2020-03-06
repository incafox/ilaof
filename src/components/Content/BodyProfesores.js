import React from 'react'
import Sidebar from "../SiderbarComponents/Sidebar";
import Nav from "../Nav/Nav";
import Routes from "../../Routes/Routes";
import UserView from '../UserView/UserView';
import "./BodyProfesor.scss"

export default function BodyProfesores({user}) {
    return (
        <div id="body-profesor">
            <div>
                <Nav />
                <Sidebar />
            </div>
            <div className="content-wrapper bg-layout" style={{ "minHeight": "640px", padding: "10px" }}>
                <div className="d-flex flex-row-reverse bd-highlight">
                    <UserView user={user} />
                </div>
                <Routes />
            </div>
        </div>
    )
}
