import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {DataTable, Column} from 'primereact/datatable';
import IconInfo from "./IconInfo";
import IconImage from "./IconImage";
import IconConnection from "./IconConnection";
import IconPendiente from "./IconPendiente";
import IconAvance from "./IconAvance";

// import "./Students.css";

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const Alumnos = () => {

    // useEffect(() => {

    //     const studentsList = [
    //         {id: 5000, actualLevel: 5, pendiente: 20, avance: 3,  name: "rodrigo", avg: 5, birth: "10/10/2010", status: "Conectado", hrsOn: "15 Hrs", pago: "20/10/2010"},
    //         {id: 5001, actualLevel: 5, pendiente: 18, avance: 9,  name: "fernando", avg: 5, birth: "10/10/2010", status: "Conectado", hrsOn: "15 Hrs", pago: "20/10/2010"},
    //         {id: 5002, actualLevel: 6, pendiente: 10, avance: 2,  name: "marcos", avg: 3, birth: "11/10/2010", status: "Desconectado", hrsOn: "11 Hrs", pago: "21/10/2010"},
    //         {id: 5003, actualLevel: 6, pendiente: 15, avance: 12, name: "adrian", avg: 3, birth: "11/10/2010", status: "Desconectado", hrsOn: "11 Hrs", pago: "21/10/2010"},
    //         {id: 5004, actualLevel: 2, pendiente: 8,  avance: 2,  name: "jose", avg: 7, birth: "12/10/2010", status: "Desconectado", hrsOn: "12 Hrs", pago: "22/10/2010"},
    //         {id: 5005, actualLevel: 2, pendiente: 15, avance: 5,  name: "charly", avg: 7, birth: "12/10/2010", status: "Desconectado", hrsOn: "12 Hrs", pago: "22/10/2010"},
    //         {id: 5006, actualLevel: 9, pendiente: 25, avance: 2,  name: "sebastian", avg: 1, birth: "15/10/2010", status: "Conectado", hrsOn: "10 Hrs", pago: "23/10/2010"},
    //         {id: 5007, actualLevel: 9, pendiente: 30, avance: 10, name: "oscar", avg: 1, birth: "15/10/2010", status: "Conectado", hrsOn: "10 Hrs", pago: "23/10/2010"},
    //         {id: 5008, actualLevel: 2, pendiente: 13, avance: 14, name: "pablo", avg: 8, birth: "14/10/2010", status: "Conectado", hrsOn: "14 Hrs", pago: "24/10/2010"},
    //         {id: 5009, actualLevel: 2, pendiente: 16, avance: 3,  name: "sergio", avg: 8, birth: "14/10/2010", status: "Conectado", hrsOn: "14 Hrs", pago: "24/10/2010"},
    //         {id: 5010, actualLevel: 4, pendiente: 33, avance: 12, name: "esteban", avg: 5, birth: "10/10/2010", status: "Conectado", hrsOn: "15 Hrs", pago: "20/10/2010"},
    //         {id: 5011, actualLevel: 4, pendiente: 27, avance: 20, name: "sergio", avg: 5, birth: "10/10/2010", status: "Conectado", hrsOn: "15 Hrs", pago: "20/10/2010"},
    //         {id: 5012, actualLevel: 6, pendiente: 19, avance: 38, name: "franco", avg: 3, birth: "11/10/2010", status: "Desconectado", hrsOn: "11 Hrs", pago: "21/10/2010"},
    //         {id: 5013, actualLevel: 6, pendiente: 15, avance: 3,  name: "fede", avg: 3, birth: "11/10/2010", status: "Desconectado", hrsOn: "11 Hrs", pago: "21/10/2010"},
    //         {id: 5014, actualLevel: 3, pendiente: 5,  avance: 3,  name: "guille", avg: 7, birth: "12/10/2010", status: "Desconectado", hrsOn: "12 Hrs", pago: "22/10/2010"}
    //     ]
    
    //     const list = studentsList.map(x => {
    //         return {
    //             name :<IconImage project={x.name}/>, 
    //             status: <IconConnection status={x.status}/>, 
    //             iconInfo: <IconInfo idStudent={x.id} />, 
    //             iconPendiente: <IconPendiente pendiente={x.pendiente} />, 
    //             iconAvance: <IconAvance avance={x.avance} />, 
    //             actualLevel: x.actualLevel,
    //             id: x.id, 
    //             avg: x.avg, 
    //             birth: x.birth
    //             // birthCorte: x.birthCorte, 
    //             // qualification: x.qualification, 
    //             // groups: x.groups
    //         }
    //     });

    //     setStudentsList(list)
    
    // }, [])

    const [studentsList, setStudentsList] = useState([
        { id: 5000, actualLevel: 5, pendiente: [20], avance: 3, name: "rodrigo", avg: 5, birth: "10/10/2010", status: "Conectado", hrsOn: "15 Hrs", pago: "20/10/2010" },
        { id: 5001, actualLevel: 5, pendiente: [18], avance: 9, name: "fernando", avg: 5, birth: "10/10/2010", status: "Conectado", hrsOn: "15 Hrs", pago: "20/10/2010" },
        { id: 5002, actualLevel: 6, pendiente: [10], avance: 2, name: "marcos", avg: 3, birth: "11/10/2010", status: "Desconectado", hrsOn: "11 Hrs", pago: "21/10/2010" },
        { id: 5003, actualLevel: 6, pendiente: [15], avance: 12, name: "adrian", avg: 3, birth: "11/10/2010", status: "Desconectado", hrsOn: "11 Hrs", pago: "21/10/2010" },
        { id: 5004, actualLevel: 2, pendiente: [8], avance: 2, name: "jose", avg: 7, birth: "12/10/2010", status: "Desconectado", hrsOn: "12 Hrs", pago: "22/10/2010" },
        { id: 5005, actualLevel: 2, pendiente: [15], avance: 5, name: "charly", avg: 7, birth: "12/10/2010", status: "Desconectado", hrsOn: "12 Hrs", pago: "22/10/2010" },
        { id: 5006, actualLevel: 9, pendiente: [25], avance: 2, name: "sebastian", avg: 1, birth: "15/10/2010", status: "Conectado", hrsOn: "10 Hrs", pago: "23/10/2010" },
        { id: 5007, actualLevel: 9, pendiente: [30], avance: 10, name: "oscar", avg: 1, birth: "15/10/2010", status: "Conectado", hrsOn: "10 Hrs", pago: "23/10/2010" },
        { id: 5008, actualLevel: 2, pendiente: [13], avance: 14, name: "pablo", avg: 8, birth: "14/10/2010", status: "Conectado", hrsOn: "14 Hrs", pago: "24/10/2010" },
        { id: 5009, actualLevel: 2, pendiente: [16], avance: 3, name: "sergio", avg: 8, birth: "14/10/2010", status: "Conectado", hrsOn: "14 Hrs", pago: "24/10/2010" },
        { id: 5010, actualLevel: 4, pendiente: [33], avance: 12, name: "esteban", avg: 5, birth: "10/10/2010", status: "Conectado", hrsOn: "15 Hrs", pago: "20/10/2010" },
        { id: 5011, actualLevel: 4, pendiente: [27], avance: 20, name: "sergio", avg: 5, birth: "10/10/2010", status: "Conectado", hrsOn: "15 Hrs", pago: "20/10/2010" },
        { id: 5012, actualLevel: 6, pendiente: [19], avance: 38, name: "franco", avg: 3, birth: "11/10/2010", status: "Desconectado", hrsOn: "11 Hrs", pago: "21/10/2010" },
        { id: 5013, actualLevel: 6, pendiente: [15], avance: 3, name: "fede", avg: 3, birth: "11/10/2010", status: "Desconectado", hrsOn: "11 Hrs", pago: "21/10/2010" },
        { id: 5014, actualLevel: 3, pendiente: [5], avance: 3, name: "guille", avg: 7, birth: "12/10/2010", status: "Desconectado", hrsOn: "12 Hrs", pago: "22/10/2010" }
    ]);




    const onSearchStudent = search => console.log(studentsList.filter(st => st.name.includes(search)));
    const list = studentsList.map(x => {
        return {
            name: <IconImage project={x.name} />,
            status: <IconConnection status={x.status} />,
            iconInfo: <IconInfo idStudent={x.id} />,
            iconPendiente: <IconPendiente pendiente={x.pendiente} />,
            iconAvance: <IconAvance avance={x.avance} />,
            actualLevel: x.actualLevel,
            id: x.id,
            avg: x.avg,
            birth: x.birth
            // birthCorte: x.birthCorte, 
            // qualification: x.qualification, 
            // groups: x.groups
        }
    });

    return (
        <div className="row">
            <div className="col-9">
                <div className="container" style={{boxShadow: "3px 3px 21px 1px rgba(0,0,0,0.25)", borderRadius: "45px 45px 45px 45px", height:"76vh", background:"white", paddingTop:"1.5rem", paddingLeft:"0px", paddingRight:"0px"}}>
                    {/* <div className="card" style={{margin:"2vh"}}>
                        <SearchStudent onSearchStudent={onSearchStudent}/>
                    </div> */}
                    <div>
                        <div>
                            <div className="row d-flex justify-content-between">
                                <div style={{fontSize:"1.5rem", marginLeft:"2.8rem"}}>Alumnos</div>
                                <Link to={`/students/createStudent`}>
                                    {/* <button type="button" className="btn btn-outline-success">Nuevo Alumno</button> */}
                                    <button type="button" style={{fontSize:"1rem", marginRight:"2.5rem", marginBottom:"2rem"}} className="btn btn-outline-dark">Nuevo Alumno</button>
                                </Link>
                            </div>
                        </div>
                        <DataTable paginator={true} value={list} rows={5}>
                            <Column sortable="true" field="name"        style={{textAlign:"center", color:"black", fontSize: "0.8vw", borderStyle: "none", height: "2rem"}} header="PROJECT" />
                            <Column sortable="true" field="actualLevel" style={{textAlign:"center", color:"black", fontSize: "0.8vw", borderStyle: "none", height: "2rem"}} header="NIVEL ACTUAL" />
                            <Column sortable="true" field="status"      style={{textAlign:"center", color:"black", fontSize: "0.8vw", borderStyle: "none", height: "2rem"}} header="STATUS" />
                            <Column                 field="birth"       style={{textAlign:"center", color:"black", fontSize: "0.8vw", borderStyle: "none", height: "2rem"}} header="CREATED AT" />
                            <Column                 field="avg"         style={{textAlign:"center", color:"black", fontSize: "0.8vw", borderStyle: "none", height: "2rem"}} header="AVG" />
                            <Column                 field="iconPendiente"   style={{textAlign:"center", color:"black", fontSize: "0.8vw", borderStyle: "none", height: "2rem"}} header="PENDIENTE" />
                            <Column                 field="iconAvance"      style={{textAlign:"center", color:"black", fontSize: "0.8vw", borderStyle: "none", height: "2rem"}} header="AVANCE" />
                            <Column                 field="iconInfo"    style={{textAlign:"center", color:"black", fontSize: "0.8vw", borderStyle: "none", height: "2rem"}} header="INFO" />
                        </DataTable>
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}

export default Alumnos;