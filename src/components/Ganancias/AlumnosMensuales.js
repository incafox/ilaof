import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';
import Chart from "react-apexcharts";

const AlumnosMensuales = () => {

    const items = [
        {name: "Actual", icon: faDotCircle, color: "#025EE5"},
        {name: "Pasado", icon: faDotCircle, color: "#f66278"},
        {name: "Antepasado", icon: faDotCircle, color: "#04cb04"}
    ]

    const[mounthsStatics, setMounthsStatics] = useState([
        {mounth: "Marzo", quantity: 30, color: '#EA5737'}, 
        {mounth: "Febrero", quantity: 45, color: '#0EEC7D'}, 
        {mounth: "Enero", quantity: 35, color: '#C019CB'}
    ]);

    const state = {
            series: mounthsStatics.map(m => m.quantity),
            options: { 
                colors: mounthsStatics.map(m => m.color),
                labels: mounthsStatics.map(m => m.mounth),
                legend: {   
                            show: true,
                            fontSize: '20px',
                            position: 'left',
                            offsetX: 160,
                            offsetY: 10,
                            labels: { useSeriesColors: true },
                            markers: { size: 0 },
                            formatter: (seriesName, opts) => seriesName + ": " + opts.w.globals.series[opts.seriesIndex],
                            itemMargin: { horizontal: 0 }
                        },
                responsive: [{
                        breakpoint: 480,
                        options: { legend: { show: true } }
                    }]
            }
        }

    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col">
                        Alumnos Mensuales
                    </div>
                    <div className="col d-flex justify-content-center">
                        {
                            items.map((item, i) => {
                                return(
                                    <div key={i} style={{marginLeft:"1rem"}}>
                                        {item.name}
                                        <FontAwesomeIcon fixedWidth={true} key={i}
                                                        icon={item.icon} 
                                                        color={item.color} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="card-body">
                <Chart options={state.options} series={state.series} type="radialBar" height={390} />
            </div>
        </div>
    )
}

export default AlumnosMensuales;