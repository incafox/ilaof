import React, { useState } from 'react';
import FormComunidados from "../Comunicados/Form";
import Alumnos from "../Alumnos/Alumnos";
import Profesores from "../Profesores/Profesores";
import GananciasMensuales from "../Ganancias/GananciasMensuales";
// import PagosPendientes from '../Pagos/PagosPendientes';
import SearchStudent from './../Alumnos/SearchStudent';
import Ranking from './../Alumnos/Ranking';
import IconInfo from "./../Alumnos/IconInfo";
import IconImage from "./../Alumnos/IconImage";
import IconConnection from "./../Alumnos/IconConnection";
import IconPendiente from "./../Alumnos/IconPendiente";
import IconAvance from "./../Alumnos/IconAvance";

export default function Home() {
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
    const urlImageUp = `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9jipXTZzQkthFOXc-cDQ20U7EjEmkvSW98SiaZQrw_en1BaAG`;
    const rankingBest = studentsList.sort((a, b) => b.avg - a.avg).splice(0, 10);

    const urlImageDown = `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQFnI0zesqWJqjuQx0jQl9uoyqxTm9NVU8MJtqy-H_TmhwzJpPP`;
    const rankingWorst = studentsList.sort((a, b) => a.avg - b.avg).splice(0, 10);


    return (
        <div className="DashboardAdmin">
            <div className="DashboardAdmin-section1">
                <Alumnos />
                <Profesores />
                {/* <PagosPendientes /> Rehacer */}
                <div className="col-3" style={{ paddingRight: "80px" }}>
                    <div className="row">
                        <div className="col">
                            <Ranking rankingStudents={rankingBest} url={urlImageUp} />
                        </div>
                        <div className="col">
                            <Ranking rankingStudents={rankingWorst} url={urlImageDown} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="DashboardAdmin-section2">
                <div className="DashboardAdmin-section2-Summary Cards">
                    <div className="header">
                        Alumnos en total Diciembre: 87
                    </div>
                    <div className="row d-flex justify-content-center">
                        Nuevo ingreso 30
                    </div>
                    <div className="row d-flex justify-content-center">
                        Bajas 10
                    </div>
                </div>
                <FormComunidados />
                <GananciasMensuales />
            </div>
        </div>
    )
}