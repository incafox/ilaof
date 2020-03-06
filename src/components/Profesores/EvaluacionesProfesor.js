import React from 'react';

const EvaluacionesProfesor = (props) => {

    const profesList = [
        {id: 1004, alumnos: 15, project: "lucas", birth: "14/10/2010", birthCorte: "23/10/2011", status: "Conectado", qualifGroup: 7, qualification: "14", groups: 10},
        {id: 1000, alumnos: 15, project: "rodri", birth: "10/10/2010", birthCorte: "23/10/2011", status: "Conectado", qualifGroup: 7, qualification: "15", groups: 10},
        {id: 1002, alumnos: 15, project: "charly", birth: "12/10/2010", birthCorte: "23/10/2011", status: "Desconectado", qualifGroup: 7, qualification: "12", groups:100},
        {id: 1001, alumnos: 15, project: "adrian", birth: "11/10/2010", birthCorte: "23/10/2011", status: "Desconectado", qualifGroup: 7, qualification: "11", groups:100},
        {id: 1009, alumnos: 15, project: "lucas", birth: "14/10/2010", birthCorte: "23/10/2011", status: "Conectado", qualifGroup: 7, qualification: "14", groups: 10},
        {id: 1003, alumnos: 15, project: "oscar", birth: "15/10/2010", birthCorte: "23/10/2011", status: "Conectado", qualifGroup: 7, qualification: "10", groups: 10},
        {id: 1007, alumnos: 15, project: "charly", birth: "12/10/2010", birthCorte: "23/10/2011", status: "Desconectado", qualifGroup: 7, qualification: "12", groups:100},
        {id: 1006, alumnos: 15, project: "adrian", birth: "11/10/2010", birthCorte: "23/10/2011", status: "Desconectado", qualifGroup: 7, qualification: "11", groups:10},
        {id: 1008, alumnos: 15, project: "oscar", birth: "15/10/2010", birthCorte: "23/10/2011", status: "Conectado", qualifGroup: 7, qualification: "10", groups: 10},
        {id: 1005, alumnos: 15, project: "rodri", birth: "10/10/2010", birthCorte: "23/10/2011", status: "Conectado", qualifGroup: 7, qualification: "15", groups: 10},
        {id: 1011, alumnos: 15, project: "adrian", birth: "11/10/2010", birthCorte: "23/10/2011", status: "Desconectado", qualifGroup: 7, qualification: "11", groups:10},
        {id: 1016, alumnos: 15, project: "adrian", birth: "11/10/2010", birthCorte: "23/10/2011", status: "Desconectado", qualifGroup: 7, qualification: "11", groups:10},
        {id: 1012, alumnos: 15, project: "charly", birth: "12/10/2010", birthCorte: "23/10/2011", status: "Desconectado", qualifGroup: 7, qualification: "12", groups:100},
        {id: 1014, alumnos: 15, project: "lucas", birth: "14/10/2010", birthCorte: "23/10/2011", status: "Conectado", qualifGroup: 7, qualification: "14", groups: 10},
        {id: 1013, alumnos: 15, project: "oscar", birth: "15/10/2010", birthCorte: "23/10/2011", status: "Conectado", qualifGroup: 7, qualification: "10", groups: 10},
        {id: 1017, alumnos: 15, project: "charly", birth: "12/10/2010", birthCorte: "23/10/2011", status: "Desconectado", qualifGroup: 7, qualification: "12", groups:100},
        {id: 1018, alumnos: 15, project: "oscar", birth: "15/10/2010", birthCorte: "23/10/2011", status: "Conectado", qualifGroup: 7, qualification: "10", groups: 10},
        {id: 1015, alumnos: 15, project: "rodri", birth: "10/10/2010", birthCorte: "23/10/2011", status: "Conectado", qualifGroup: 7, qualification: "15", groups: 10},
        {id: 1019, alumnos: 15, project: "lucas", birth: "14/10/2010", birthCorte: "23/10/2011", status: "Conectado", qualifGroup: 7, qualification: "14", groups: 10},
        {id: 1010, alumnos: 15, project: "rodri", birth: "10/10/2010", birthCorte: "23/10/2011", status: "Conectado", qualifGroup: 7, qualification: "15", groups: 10}
    ]

    const profe = profesList.find(p => p.id == props.match.params.id)

    return (
        <div className="row">

            <div className="col">
                <div class="d-flex align-items-center flex-column bd-highlight mb-3" style={{height: "200px"}}>
                    <div class="mb-auto p-2 bd-highlight card" style={{width:"250px", textAlign:"center"}}>
                        <div className="">
                            <img alt="..." style={{borderRadius:"30rem", height:"7rem", width:"7rem"}} src={`https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQik0Z3ue9vXp_lrGo4KqzUNxGlmc0bsZaSgw3nOnKEw68-VJIf`} />
                        </div>
                        <div className="card-body" style={{textAlign:"center"}}>
                        {profe.project}
                        </div>
                    </div>
                    <div class="p-2 bd-highlight card" style={{width:"250px", textAlign:"center", marginTop: "2rem"}}>
                        <div className="card-body">
                            Calificacion: {profe.qualification}
                        </div>
                        <div className="card-body" style={{textAlign:"center"}}>
                            Calificacion anterior: xxx
                        </div>
                        <div className="card-body" style={{textAlign:"center"}}>
                            Ultima evaluacion profesores: xxx
                        </div>
                    </div>
                    <div class="bd-highlight" style={{width:"250px", textAlign:"center", margin:"0.8rem"}}>
                        <button type="button" style={{width:"10rem", width:"250px"}} class="btn btn-primary">Ver Evaluación</button>
                    </div>
                    <div class="bd-highlight" style={{width:"250px", textAlign:"center", margin:"0.8rem"}}>
                        <button type="button" style={{width:"10rem", width:"250px"}} class="btn btn-info">Crear Evaluación</button>
                    </div>
                    <div class="bd-highlight" style={{width:"250px", textAlign:"center", margin:"0.8rem"}}>
                        <button type="button" style={{width:"10rem", width:"250px"}} class="btn btn-dark">Actividades</button>
                    </div>
                </div>
            </div>

            <div className="col card d-flex justify-content-center" style={{height:"70vh", marginRight:"5rem"}}>
                <div className="card-content">

                </div>
            </div>
            
        </div>
    )
}

export default EvaluacionesProfesor;
