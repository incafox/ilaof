import React, { useState, useEffect } from 'react';
import ProfeDataInfo from './ProfeDataInfo';

const InfoProfesor = (props) => {

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

    const[profesor, setProfesor] = useState({});

    useEffect(() => { 
        setProfesor(profesList.find(p => p.id == props.match.params.id)) 
    }, [])

    return (
        <div className="row">
            <div className="col">
                <ProfeDataInfo profesor={profesor}/>
            </div>
            <div className="col">
                CALENDARIO PROFESOR
                {/* <HistorialAsistencias asistencias={asistencias} idStudent={props.match.params.id}/> */}
            </div>
        </div>
    )
}

export default InfoProfesor;
