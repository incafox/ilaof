import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const IconInfo = ({idStudent}) => {

    return (
        <div className="d-flex justify-content-around">
            {/* <div>
                {qualifGroup}
            </div> */}
            <div className="icon-profe">
                <Link to={`/students/${idStudent}`}>
                    <FontAwesomeIcon fixedWidth={true} 
                                    icon={faEllipsisV} 
                                    color={"black"} 
                                    />
                </Link>
            </div>
        </div>
        
    )
}

export default IconInfo;
