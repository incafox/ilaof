import React from 'react';
import IngresosYGastos from './IngresosYGastos';
import GananciasMensuales from './GananciasMensuales';
import AlumnosMensuales from './AlumnosMensuales';
import Actividad from './Actividad';
import AlumnosEnLinea from './AlumnosEnLinea';
import InscripcionesPorSemana from './InscripcionesPorSemana';

import "./Ganancias.css"

export default function Ganancias() {

    return (
        <div>
            <div className="row">
                <div className="col-6" style={{padding:"1px"}}>
                    <IngresosYGastos/>
                </div>
                <div className="col-6">
                    <GananciasMensuales/>
                </div>
                
            </div>
            <div className="row">
                <div className="col">
                    <Actividad/>
                    
                </div>
                <div className="col">
                    <AlumnosMensuales/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <AlumnosEnLinea/>
                </div>
                <div className="col">
                    <InscripcionesPorSemana/>    
                </div>
            </div>
        </div>
    )
}