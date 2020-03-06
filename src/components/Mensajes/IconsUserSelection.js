import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Checkbox } from 'primereact/checkbox';

function IconsUserSelection({globalSelection, applyGlobalSelection, deleteSelectedMessages, searchTitle}) {

    const[search, setSearch] = useState({title: ""});

    const handleChange = e => {
        searchTitle(search.title);
        setSearch({...search, [e.target.name]: e.target.value});
        
    }

    return (
        <form style={{marginBottom:"10px"}}>
            <div className="form-row">
                <div className="col-1">
                    <Checkbox onChange={e => applyGlobalSelection(e.checked)} checked={globalSelection}></Checkbox>
                </div>
                <div className="col-1">
                    <FontAwesomeIcon fixedWidth={true} 
                            icon={faTrash} 
                            color={"red"} 
                            onClick={() => deleteSelectedMessages()}/>
                </div>
                <div className="col-10">
                    <input type="text" 
                        onChange={handleChange} 
                        value={search.title} 
                        name="title"
                        className="form-control" 
                        placeholder="Buscar..." />
                </div>
            </div>
        </form>
    )
}

export default IconsUserSelection;
