import React from 'react';

const StudentDataInfo = ({student}) => {
    return (
        <div className="card" style={{width:"30rem", padding:"1rem"}}>
            <div className="row d-flex flex-row-reverse bd-highlight">
                <p style={{color:"blue"}}>Eliminar</p>
            </div>
            <div className="row d-flex justify-content-center">
                <img alt="..." style={{borderRadius:"30rem", height:"7rem", width:"7rem"}}
                        src={`https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQik0Z3ue9vXp_lrGo4KqzUNxGlmc0bsZaSgw3nOnKEw68-VJIf`} />
            </div>
            <div className="row d-flex justify-content-center">
                <p>Profesor: {student.name}</p>
            </div>
            <div className="row d-flex justify-content-center">
                <p>Alumno desde: {student.birth}</p>
            </div>
            <div className="row" style={{textAlign:"center"}}>
                <div className="col">
                    <button type="button" className="btn btn-success">Habilitado</button>
                </div>
                <div className="col">
                    <button type="button" className="btn btn-outline-danger">Deshabilitar</button>
                </div>
            </div>
            <hr/>
                <div className="row">
                    <div className="col">
                        Promedio gral
                    </div>
                    <div className="col">
                        Curso
                    </div>
                    <div className="col">
                        Cursado
                    </div>
                </div>
            <hr/>
                <div className="row">
                    <div className="col">
                        Writting
                    </div>
                    <div className="col">
                        Web
                    </div>
                    <div className="col">
                        Vocabulary
                    </div>
                </div>
        </div>
    )
}

export default StudentDataInfo;
