import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarOfDavid } from '@fortawesome/free-solid-svg-icons';
import { Checkbox } from 'primereact/checkbox';

const Inbox = ({messages, applyStar, applyCheckBox}) => messages.map((msg, i) => 
    {
        return(
            <div className="row" key={i}>
                <div className="col-1">
                    <FontAwesomeIcon fixedWidth={true} 
                                    icon={msg.star ? faStar : faStarOfDavid } 
                                    color={"blue"} 
                                    onClick={() => applyStar(msg.id_message)}/>
                </div>
                <div className="col-1">
                    <Checkbox onChange={e => applyCheckBox(e.checked, msg.id_message)} checked={msg.selected}></Checkbox>
                </div>
                <div className="col-10">
                    {msg.title} - {msg.description} - {msg.date}
                </div>
            </div>
        )
    }
)

export default Inbox;