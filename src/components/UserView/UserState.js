import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const UserState = ({user}) => {

    const[stateUser, setStateUser] = useState("Conectado");

    const statesConnection = [
        {state: "Conectado", color :"#35EA50"},
        {state: "Desconectado", color :"#F1331D"},
        {state: "Ausente", color :"#F1B11D"},
    ];

    const changeState = json => setStateUser(json.state);

    return (
        <div>
            <a data-toggle="collapse" style={{color:"black"}} href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                {user.userEmail}
                <FontAwesomeIcon fixedWidth={true} 
                        icon={faCircle} 
                        color={statesConnection.find(s => s.state === stateUser).color} 
                        style={{height:"14px"}}
                        />
            </a>
            <div className="collapse" id="collapseExample" style={{flexDirection:"column"}}>
                { 
                    statesConnection.map((x, i) => <UserConnection key={i} json={x} changeState={changeState}/>)
                }
            </div>
        </div>
    )
}

export default UserState;

const UserConnection = ({json, changeState}) => {

    return(
        <div onClick={() => changeState(json)} className=" view2 d-flex flex-row bd-highlight">
            <FontAwesomeIcon fixedWidth={true} 
                        icon={faCircle} 
                        color={json.color} 
                        style={{height:"14px"}}
                        />
            <div style={{height:"4px"}}>{json.state}</div>
        </div>
    )
}