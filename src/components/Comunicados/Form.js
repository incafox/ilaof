import React, { useState } from 'react';

export default function Form({ onSubmitCom }) {

    const [message, setMessage] = useState({ title: "", description: "" });
    const handleChange = e => {
        e.preventDefault();
        setMessage({ ...message, [e.target.name]: e.target.value });
    }

    const onSubmit = e => {
        e.preventDefault();
        const { title, description } = message;
        if (title === "" || description === "") {
            alert("Datos incompletos")
        } else {
            onSubmitCom(message);
            setMessage({ title: "", description: "" })
        }
    }

    return (
        <div className="Cards Releases">
            <div className="d-flex justify-content-end">
                <h3 className="card-title" style={{ marginRight: "20px", fontSize: "1.5rem", paddingTop: "1rem" }}>Comunicados</h3>
            </div>
            <form onSubmit={onSubmit} role="form">
                <div className="card-body">
                    <label htmlFor="title" style={{ fontWeight: "normal" }}>Titulo</label>
                    <div className="section1">
                        <div className="d-flex justify-content-between">
                            <div>
                                <input type="text" onChange={handleChange} value={message.title} style={{ background: "#F2F3F5", width: "20vw", boxShadow: "0.5px 1px 1px 1px #CCCAC7" }}
                                    className="form-control" id="title" name="title" placeholder="Titulo de comunicado" />
                            </div>
                            <div>
                                <div className="btnAll">
                                    <p>TODOS</p>
                                    <div className="sectionHidde">
                                        <p>Todos</p>
                                        <p>Alumnos</p>
                                        <p>Profesores</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className="col">
                                <label htmlFor="description" style={{ fontWeight: "normal" }}>Descripción</label>
                                <textarea name="textarea" style={{ background: "#F2F3F5", boxShadow: "0.5px 1px 1px 1px #CCCAC7" }} onChange={handleChange} value={message.description} className="form-control"
                                    id="description" name="description" placeholder="Ingrese descripcion" rows="5" cols="50"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex flex-row bd-highlight mb-3">
                    <button type="submit" className="btn btn-primary" style={{ marginRight: "10px", width: "7rem", marginLeft: "1.3rem" }}>Enviar</button>
                    <button type="submit" className="btn btn-outline-danger" style={{ width: "7rem", }}>Eliminar</button>
                </div>
            </form>
        </div>
    )
}