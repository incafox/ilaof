import React from 'react'
import Sidebar from "../SiderbarComponents/Sidebar";
import Nav from "../Nav/Nav";
import Routes from "../../Routes/Routes";
import UserView from '../UserView/UserView';
import './../../dist/css/dashboardAdmin.min.css'

function BodyAdministrador({ user }) {
    return (
        <div>
            <div>
                <Nav />
                <Sidebar />
            </div>
            <div className="content-wrapper" style={{ "minHeight": "640px", padding: "10px" }}>
                <div className="d-flex flex-row-reverse bd-highlight">
                    <UserView user={user} />
                </div>
                <Routes />
            </div>
        </div>
    )
}

export default BodyAdministrador
