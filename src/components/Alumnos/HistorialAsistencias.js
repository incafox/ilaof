import React from 'react';

const HistorialAsistencias = ({asistencias, idStudent}) => {
    
    return (
        <div className="card" style={{width:"60vh", height:"40vh", overflow:"auto"}}>
            {
                asistencias.map((asistenciaFecha, i) => {
                    return(
                        <div key={i}>
                            <div>
                                {asistenciaFecha.fecha}
                            </div>
                            <div>
                                {
                                    asistenciaFecha.ausentes.includes(parseInt(idStudent)) ?
                                    "Presente":"Ausente"
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default HistorialAsistencias;