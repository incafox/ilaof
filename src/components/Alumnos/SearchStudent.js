import React, { useState } from 'react';
import {Button} from "primereact/button";
import {InputText} from "primereact/inputtext";

const SearchStudent = ({onSearchStudent}) => {

    const[student, setStudent] = useState({name: ""});

    const handleChange = e => {
        onSearchStudent(e.target.value);
        setStudent({...student, [e.target.name]: e.target.value});
    }

    return (
        <div className="row">
            <div className="col">
                <div className="p-col-12 p-md-4">
                    <div className="p-inputgroup">
                        <input placeholder="Buscar alumno" name="name" value={student.name} onChange={handleChange}/>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="p-col-12 p-md-4">
                    <div className="p-inputgroup">
                        <Button label="Buscar" icon="pi pi-search" className="p-button-raised p-button-rounded"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchStudent;
