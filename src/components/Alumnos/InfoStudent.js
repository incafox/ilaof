import React, { useState, useEffect } from 'react';
import HistorialAsistencias from './HistorialAsistencias';
import StudentDataInfo from './StudentDataInfo';

const InfoStudent = (props) => {

    const[studentsList, setStudentsList] = useState(
        [
            {id: 1000, name: "rodrigo", image:"...", avg: 5, birth: "10/10/2010", status: "Conectado", hrsOn: "15 Hrs", pago: "20/10/2010", urlImage: ""},
            {id: 1001, name: "adrian", image:"...", avg: 3, birth: "11/10/2010", status: "Desconectado", hrsOn: "11 Hrs", pago: "21/10/2010", urlImage: ""},
            {id: 1002, name: "charly", image:"...", avg: 7, birth: "12/10/2010", status: "Desconectado", hrsOn: "12 Hrs", pago: "22/10/2010", urlImage: ""},
            {id: 1003, name: "oscar", image:"...", avg: 1, birth: "15/10/2010", status: "Conectado", hrsOn: "10 Hrs", pago: "23/10/2010", urlImage: ""},
            {id: 1004, name: "sergio", image:"...", avg: 8, birth: "14/10/2010", status: "Conectado", hrsOn: "14 Hrs", pago: "24/10/2010", urlImage: ""},
            {id: 1005, name: "rodrigo", image:"...", avg: 5, birth: "10/10/2010", status: "Conectado", hrsOn: "15 Hrs", pago: "20/10/2010", urlImage: ""},
            {id: 1006, name: "adrian", image:"...", avg: 3, birth: "11/10/2010", status: "Desconectado", hrsOn: "11 Hrs", pago: "21/10/2010", urlImage: ""},
            {id: 1007, name: "pedro", image:"...", avg: 7, birth: "12/10/2010", status: "Desconectado", hrsOn: "12 Hrs", pago: "22/10/2010", urlImage: ""},
            {id: 1008, name: "carlos", image:"...", avg: 4, birth: "12/10/2010", status: "Desconectado", hrsOn: "12 Hrs", pago: "22/10/2010", urlImage: ""},
            {id: 1009, name: "adrian", image:"...", avg: 7, birth: "12/10/2010", status: "Desconectado", hrsOn: "12 Hrs", pago: "22/10/2010", urlImage: ""},
            {id: 1010, name: "mariano", image:"...", avg: 1, birth: "12/10/2010", status: "Desconectado", hrsOn: "12 Hrs", pago: "22/10/2010", urlImage: ""},
            {id: 1011, name: "jorge", image:"...", avg: 2, birth: "12/10/2010", status: "Desconectado", hrsOn: "12 Hrs", pago: "22/10/2010", urlImage: ""},
            {id: 1012, name: "fede", image:"...", avg: 9, birth: "12/10/2010", status: "Desconectado", hrsOn: "12 Hrs", pago: "22/10/2010", urlImage: ""},
            {id: 1013, name: "ezequiel", image:"...", avg: 7, birth: "12/10/2010", status: "Desconectado", hrsOn: "12 Hrs", pago: "22/10/2010", urlImage: ""},
            {id: 1014, name: "gabriel", image:"...", avg: 4, birth: "12/10/2010", status: "Desconectado", hrsOn: "12 Hrs", pago: "22/10/2010", urlImage: ""},
            {id: 1015, name: "nicolas", image:"...", avg: 7, birth: "12/10/2010", status: "Desconectado", hrsOn: "12 Hrs", pago: "22/10/2010", urlImage: ""},
            {id: 1016, name: "omar", image:"...", avg: 5, birth: "12/10/2010", status: "Desconectado", hrsOn: "12 Hrs", pago: "22/10/2010", urlImage: ""},
            {id: 1017, name: "patricio", image:"...", avg: 7, birth: "12/10/2010", status: "Desconectado", hrsOn: "12 Hrs", pago: "22/10/2010", urlImage: ""},
            {id: 1018, name: "camila", image:"...", avg: 2, birth: "12/10/2010", status: "Desconectado", hrsOn: "12 Hrs", pago: "22/10/2010", urlImage: ""},
            {id: 1019, name: "nahuel", image:"...", avg: 3, birth: "12/10/2010", status: "Desconectado", hrsOn: "12 Hrs", pago: "22/10/2010", urlImage: ""},
            {id: 1020, name: "lucas", image:"...", avg: 1, birth: "12/10/2010", status: "Desconectado", hrsOn: "12 Hrs", pago: "22/10/2010", urlImage: ""},
            {id: 1021, name: "alma", image:"...", avg: 7, birth: "12/10/2010", status: "Desconectado", hrsOn: "12 Hrs", pago: "22/10/2010", urlImage: ""},
            {id: 1022, name: "milagros", image:"...", avg: 7, birth: "12/10/2010", status: "Desconectado", hrsOn: "12 Hrs", pago: "22/10/2010", urlImage: ""},
            {id: 1023, name: "diego", image:"...", avg: 9, birth: "12/10/2010", status: "Desconectado", hrsOn: "12 Hrs", pago: "22/10/2010", urlImage: ""},
            {id: 1024, name: "martin", image:"...", avg: 9, birth: "12/10/2010", status: "Desconectado", hrsOn: "12 Hrs", pago: "22/10/2010", urlImage: ""},
            {id: 1025, name: "charly", image:"...", avg: 5, birth: "12/10/2010", status: "Desconectado", hrsOn: "12 Hrs", pago: "22/10/2010", urlImage: ""},
            {id: 1026, name: "juan", image:"...", avg: 8, birth: "12/10/2010", status: "Desconectado", hrsOn: "12 Hrs", pago: "22/10/2010", urlImage: ""},
            {id: 1027, name: "hernan", image:"...", avg: 3, birth: "12/10/2010", status: "Desconectado", hrsOn: "12 Hrs", pago: "22/10/2010", urlImage: ""},
            {id: 1028, name: "horacio", image:"...", avg: 7, birth: "12/10/2010", status: "Desconectado", hrsOn: "12 Hrs", pago: "22/10/2010", urlImage: ""},
            {id: 1029, name: "miguel", image:"...", avg: 7, birth: "12/10/2010", status: "Desconectado", hrsOn: "12 Hrs", pago: "22/10/2010", urlImage: ""},
            {id: 1030, name: "franco", image:"...", avg: 7, birth: "12/10/2010", status: "Desconectado", hrsOn: "12 Hrs", pago: "22/10/2010", urlImage: ""},
            {id: 1031, name: "sebastian", image:"...", avg: 7, birth: "12/10/2010", status: "Desconectado", hrsOn: "12 Hrs", pago: "22/10/2010", urlImage: ""},
            {id: 1032, name: "emanuel", image:"...", avg: 7, birth: "12/10/2010", status: "Desconectado", hrsOn: "12 Hrs", pago: "22/10/2010", urlImage: ""},
            {id: 1033, name: "damaris", image:"...", avg: 7, birth: "12/10/2010", status: "Desconectado", hrsOn: "12 Hrs", pago: "22/10/2010", urlImage: ""},
            {id: 1034, name: "ramiro", image:"...", avg: 1, birth: "15/10/2010", status: "Conectado", hrsOn: "10 Hrs", pago: "23/10/2010", urlImage: ""},
            {id: 1035, name: "fabricio", image:"...", avg: 8, birth: "14/10/2010", status: "Conectado", hrsOn: "14 Hrs", pago: "24/10/2010", urlImage: ""},
            {id: 1036, name: "rodrigo", image:"...", avg: 5, birth: "10/10/2010", status: "Conectado", hrsOn: "15 Hrs", pago: "20/10/2010", urlImage: ""},
            {id: 1037, name: "adrian", image:"...", avg: 3, birth: "11/10/2010", status: "Desconectado", hrsOn: "11 Hrs", pago: "21/10/2010", urlImage: ""},
            {id: 1038, name: "charly", image:"...", avg: 7, birth: "12/10/2010", status: "Desconectado", hrsOn: "12 Hrs", pago: "22/10/2010", urlImage: ""},
            {id: 1039, name: "oscar", image:"...", avg: 10, birth: "15/10/2010", status: "Conectado", hrsOn: "10 Hrs", pago: "23/10/2010", urlImage: ""},
            {id: 1040, name: "goliat", image:"...", avg: 8, birth: "14/10/2010", status: "Conectado", hrsOn: "14 Hrs", pago: "24/10/2010", urlImage: ""},
            {id: 1041, name: "rodrigo", image:"...", avg: 5, birth: "10/10/2010", status: "Conectado", hrsOn: "15 Hrs", pago: "20/10/2010", urlImage: ""},
            {id: 1042, name: "adrian", image:"...", avg: 3, birth: "11/10/2010", status: "Desconectado", hrsOn: "11 Hrs", pago: "21/10/2010", urlImage: ""},
            {id: 1043, name: "charly", image:"...", avg: 7, birth: "12/10/2010", status: "Desconectado", hrsOn: "12 Hrs", pago: "22/10/2010", urlImage: ""},
            {id: 1044, name: "julian", image:"...", avg: 10, birth: "15/10/2010", status: "Conectado", hrsOn: "10 Hrs", pago: "23/10/2010", urlImage: ""},
            {id: 1045, name: "lucas", image:"...", avg: 8, birth: "14/10/2010", status: "Conectado", hrsOn: "14 Hrs", pago: "24/10/2010", urlImage: ""},
        ]
    )

    const[asistencias, setAsistencias] = useState([
        {fecha: "10/01/20", ausentes: [1000, 1001, 1002, 1003]},
        {fecha: "11/01/20", ausentes: [1004, 1005, 1006, 1007]},
        {fecha: "12/01/20", ausentes: [1000, 1001, 1002, 1003]},
        {fecha: "13/01/20", ausentes: [1004, 1005, 1006, 1007]},
        {fecha: "14/01/20", ausentes: [1020, 1021, 1022, 1023]},
        {fecha: "15/01/20", ausentes: [1000, 1001, 1002, 1003]},
        {fecha: "16/01/20", ausentes: [1000, 1001, 1002, 1003]},
        {fecha: "17/01/20", ausentes: [1000, 1001, 1002, 1003]},
        {fecha: "18/01/20", ausentes: [1000, 1001, 1002, 1003]},
        {fecha: "19/01/20", ausentes: [1000, 1001, 1002, 1003]},
        {fecha: "20/01/20", ausentes: [1000, 1001, 1002, 1003]},
        {fecha: "21/01/20", ausentes: [1000, 1001, 1002, 1003]},
        {fecha: "22/01/20", ausentes: [1000, 1001, 1002, 1003]},
        {fecha: "23/01/20", ausentes: [1000, 1001, 1002, 1003]},
    ])

    const[student, setStudent] = useState({});

    useEffect(() => { 
        setStudent(studentsList.find(student => student.id == props.match.params.id)) 
    }, [])

    return (
        <div className="row">
            <div className="col">
                <StudentDataInfo student={student}/>
            </div>
            <div className="col">
                <HistorialAsistencias asistencias={asistencias} idStudent={props.match.params.id}/>
            </div>
        </div>
    )
}

export default InfoStudent;
