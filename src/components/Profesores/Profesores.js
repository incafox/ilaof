import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DataTable, Column } from 'primereact/datatable';
import IconInfo from "./IconInfo";
import IconImage from "./IconImage";
import IconConnection from "./IconConnection";

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export default function Profesores() {

    useEffect(() => {

        const profesList = [
            { id: 1004, alumnos: 15, project: "lucas", birth: "14/10/2010", birthCorte: "23/10/2011", status: "Conectado", qualifGroup: 7, qualification: "14", groups: 10 },
            { id: 1000, alumnos: 15, project: "rodri", birth: "10/10/2010", birthCorte: "23/10/2011", status: "Conectado", qualifGroup: 7, qualification: "15", groups: 10 },
            { id: 1002, alumnos: 15, project: "charly", birth: "12/10/2010", birthCorte: "23/10/2011", status: "Desconectado", qualifGroup: 7, qualification: "12", groups: 100 },
            { id: 1001, alumnos: 15, project: "adrian", birth: "11/10/2010", birthCorte: "23/10/2011", status: "Desconectado", qualifGroup: 7, qualification: "11", groups: 100 },
            { id: 1009, alumnos: 15, project: "lucas", birth: "14/10/2010", birthCorte: "23/10/2011", status: "Conectado", qualifGroup: 7, qualification: "14", groups: 10 },
            { id: 1003, alumnos: 15, project: "oscar", birth: "15/10/2010", birthCorte: "23/10/2011", status: "Conectado", qualifGroup: 7, qualification: "10", groups: 10 },
            { id: 1007, alumnos: 15, project: "charly", birth: "12/10/2010", birthCorte: "23/10/2011", status: "Desconectado", qualifGroup: 7, qualification: "12", groups: 100 },
            { id: 1006, alumnos: 15, project: "adrian", birth: "11/10/2010", birthCorte: "23/10/2011", status: "Desconectado", qualifGroup: 7, qualification: "11", groups: 10 },
            { id: 1008, alumnos: 15, project: "oscar", birth: "15/10/2010", birthCorte: "23/10/2011", status: "Conectado", qualifGroup: 7, qualification: "10", groups: 10 },
            { id: 1005, alumnos: 15, project: "rodri", birth: "10/10/2010", birthCorte: "23/10/2011", status: "Conectado", qualifGroup: 7, qualification: "15", groups: 10 },
            { id: 1011, alumnos: 15, project: "adrian", birth: "11/10/2010", birthCorte: "23/10/2011", status: "Desconectado", qualifGroup: 7, qualification: "11", groups: 10 },
            { id: 1016, alumnos: 15, project: "adrian", birth: "11/10/2010", birthCorte: "23/10/2011", status: "Desconectado", qualifGroup: 7, qualification: "11", groups: 10 },
            { id: 1012, alumnos: 15, project: "charly", birth: "12/10/2010", birthCorte: "23/10/2011", status: "Desconectado", qualifGroup: 7, qualification: "12", groups: 100 },
            { id: 1014, alumnos: 15, project: "lucas", birth: "14/10/2010", birthCorte: "23/10/2011", status: "Conectado", qualifGroup: 7, qualification: "14", groups: 10 },
            { id: 1013, alumnos: 15, project: "oscar", birth: "15/10/2010", birthCorte: "23/10/2011", status: "Conectado", qualifGroup: 7, qualification: "10", groups: 10 },
            { id: 1017, alumnos: 15, project: "charly", birth: "12/10/2010", birthCorte: "23/10/2011", status: "Desconectado", qualifGroup: 7, qualification: "12", groups: 100 },
            { id: 1018, alumnos: 15, project: "oscar", birth: "15/10/2010", birthCorte: "23/10/2011", status: "Conectado", qualifGroup: 7, qualification: "10", groups: 10 },
            { id: 1015, alumnos: 15, project: "rodri", birth: "10/10/2010", birthCorte: "23/10/2011", status: "Conectado", qualifGroup: 7, qualification: "15", groups: 10 },
            { id: 1019, alumnos: 15, project: "lucas", birth: "14/10/2010", birthCorte: "23/10/2011", status: "Conectado", qualifGroup: 7, qualification: "14", groups: 10 },
            { id: 1010, alumnos: 15, project: "rodri", birth: "10/10/2010", birthCorte: "23/10/2011", status: "Conectado", qualifGroup: 7, qualification: "15", groups: 10 }
        ]

        const list = profesList.map(p => {
            return {
                project: <IconImage project={p.project} />,
                status: <IconConnection status={p.status} />,
                qualifGroup: <IconInfo idProfesor={p.id} qualifGroup={p.qualifGroup} />,
                id: p.id,
                alumnos: p.alumnos,
                birth: p.birth,
                birthCorte: p.birthCorte,
                qualification: p.qualification,
                groups: p.groups
            }
        });

        setProfes(list)

    }, [])

    const [profes, setProfes] = useState([]);

    return (
        <div className="container" style={{ boxShadow: "3px 3px 21px 1px rgba(0,0,0,0.25)", borderRadius: "45px 45px 45px 45px", height: "76vh", background: "white", paddingTop: "1.5rem", paddingLeft: "0px", paddingRight: "0px" }}>
            {/* <div className="row">
                <input type="text" placeholder="Buscar..."/>
            </div> */}
            <div >
                <div>
                    <div className="row d-flex justify-content-between">
                        <div style={{ fontSize: "1.5rem", marginLeft: "2.8rem" }}>Profesores</div>
                        <Link to={`/profesores/createProfesor`}>
                            <button type="button" style={{ fontSize: "1rem", marginRight: "2.5rem", marginBottom: "2rem" }} className="btn btn-outline-dark">Nuevo Profesor</button>
                        </Link>
                    </div>
                </div>
                <DataTable paginator={true} value={profes} rows={5}>
                    <Column sortable="true" style={{ textAlign: "center", color: "black", fontSize: "0.8vw", borderStyle: "none", height: "2rem" }} field="project" header="PROJECT" />
                    <Column className="nsort" style={{ textAlign: "center", color: "black", fontSize: "0.8vw", borderStyle: "none", height: "2rem" }} field="birth" header="CREATED AT" />
                    <Column sortable="true" style={{ textAlign: "center", color: "black", fontSize: "0.8vw", borderStyle: "none", height: "2rem" }} field="status" header="STATUS" />
                    <Column className="nsort" style={{ textAlign: "center", color: "black", fontSize: "0.8vw", borderStyle: "none", height: "2rem" }} field="alumnos" header="ALUMNOS" />
                    <Column className="nsort" style={{ textAlign: "center", color: "black", fontSize: "0.8vw", borderStyle: "none", height: "2rem" }} field="groups" header="GRUPOS" />
                    <Column sortable="true" style={{ textAlign: "center", color: "black", fontSize: "0.8vw", borderStyle: "none", height: "2rem" }} field="birthCorte" header="FECHA CORTE" />
                    <Column sortable="true" style={{ textAlign: "center", color: "black", fontSize: "0.8vw", borderStyle: "none", height: "2rem" }} field="qualification" header="CALIFICACION" />
                    <Column sortable="true" style={{ textAlign: "center", color: "black", fontSize: "0.8vw", borderStyle: "none", height: "2rem" }} field="qualifGroup" header="CALIFICACION POR GRUPO" />
                </DataTable>
            </div>
        </div>
    )
}