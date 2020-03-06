import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Styles.css";

export default function Item({item}) {

    return(
        <div className="nav-link">
            <Link to={item.url}>
                <i style={{"textAlign" : "center"}}>
                    <img src={item.icon} alt="Imagen no disponible"/>
                </i>
                <p style={{"color": "#455571", "marginLeft": "15px"}}>{item.name}</p>
            </Link>
        </div>
    )
}