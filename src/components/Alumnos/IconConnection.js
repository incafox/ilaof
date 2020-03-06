import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const IconConnection = ({status}) => {

    return (
        <div className="d-flex justify-content-start">
            <div style={{marginLeft:"10px", borderRadius:"50%"}}>
                <FontAwesomeIcon fixedWidth={true} 
                                icon={faCircle} 
                                color={status === "Conectado" ? "#25F975" : "#F93710"} 
                                />
            </div>
            <div style={{marginLeft:"10px"}}>
                {status}
            </div>
        </div>
    )
}

export default IconConnection;
