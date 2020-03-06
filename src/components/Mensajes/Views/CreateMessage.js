import React, { useState } from 'react';
import {Dropdown} from 'primereact/dropdown';

export default function CreateMessage({onSendMessage}) {

    const students = [ 
        {label: 'rodrigo', value: 1}, {label: 'adrian', value: 2}, {label: 'charly', value: 3}, 
        {label: 'camila', value: 4}, {label: 'nahuel', value: 5}, {label: 'lucas', value: 6}, 
    ];

    const[student, setStudent] = useState("");

    const[message, setMessage] = useState({id_student: "", student: "", title: "", description: "", date: ""});

    const changeStudent = e => {
        e.preventDefault();
        setStudent(e.value);
        const mySelectedStudent = students.find(student => e.value === student.value);
        setMessage({...message, id_student:e.value, student: e.value, student: mySelectedStudent.label});
    }

    const handleChange = e => {
        e.preventDefault();
        setMessage({...message, [e.target.name]: e.target.value});
    }

    const onSubmit = e => {
        e.preventDefault();
        const date = new Date();
        message.date = date.getDate() + "/" + date.getMonth() + 1 + "/" + date.getFullYear();
        console.log(message);
        onSendMessage(message);
        setStudent("");
        setMessage({id_student: "", title: "", student:"", description:""});
    }

    return (
        <div className="card" style={{height:"540px"}}>
            <div className="card-header">
                <Dropdown value={student} options={students} onChange={changeStudent} placeholder="Enviar a"/>
            </div>
            <div className="card-body">
                <div className="card card-primary container">
                    <form onSubmit={onSubmit} role="form">
                        <div className="card-body">
                            <div className="form-group">
                                <div className="row">
                                    <div className="col">
                                        <input type="text" onChange={handleChange} value={message.title} className="form-control" id="title" name="title" placeholder="Titulo" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col">
                                        <textarea name="textarea" onChange={handleChange} value={message.description} className="form-control" id="description" name="description" placeholder="..." rows="5" cols="50"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="card-body">
                <div className="card card-primary container">
                    <form role="form">
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="file">Archivo adjunto</label>
                                <input style={{paddingBottom:"0px"}} type="file" onChange={handleChange} className="form-control" id="file" name="file" placeholder="Seleccione archivo"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}