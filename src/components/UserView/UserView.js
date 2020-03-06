import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCalendar, faBell } from '@fortawesome/free-solid-svg-icons';
import UserState from "./UserState";
import "./UserView.css";

const UserView = ({ user }) => {

    const logoutUser = () => {
        localStorage.removeItem("token");
        window.location.href = "/";
    }

    return (
        <div className="card card-danger" style={{ width: "35rem", borderBottomLeftRadius: "30rem", borderBottomRightRadius: "30rem", borderTopLeftRadius: "30rem", borderTopRightRadius: "30rem" }}>
            <div className="card-body d-flex justify-content-center">
                <Link to={`/messages`}>
                    <FontAwesomeIcon fixedWidth={true}
                        icon={faEnvelope}
                        color={"gray"} style={{ marginRight: "1rem" }} />
                </Link>
                <Link to={`/calendario`}>
                    <FontAwesomeIcon fixedWidth={true}
                        icon={faCalendar}
                        color={"gray"} style={{ marginRight: "1rem" }} />
                </Link>
                {user.role}
                <FontAwesomeIcon fixedWidth={true}
                    icon={faBell}
                    color={"gray"} style={{ marginRight: "1rem" }} />
                <UserState user={user} />
                <img src={user.image}
                    style={{ height: "2rem", marginLeft: "1rem", width: "2rem", borderRadius: "30rem" }}
                    alt="user..."
                    onClick={() => logoutUser()} />
            </div>
        </div>
    )
}

export default UserView;
