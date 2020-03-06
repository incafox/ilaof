import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';
import Chart from "react-apexcharts";

const GananciasMensuales = () => {

    const items = [
        {name: "Actual", icon: faDotCircle, color: "#025EE5"},
        {name: "Pasado", icon: faDotCircle, color: "#f66278"},
        {name: "Antepasado", icon: faDotCircle, color: "#04cb04"}
    ]

    const[mounthsStatics, setMounthsStatics] = useState([
        {mounth: "Marzo", income: 76, color: '#ffa500'}, 
        {mounth: "Febrero", income: 67, color: '#551a8b'}, 
        {mounth: "Enero", income: 61, color: '#ff0000'}
    ]);

    const state = {
            // series: [76, 67, 61],
            series: mounthsStatics.map(m => m.income),
            options: { 
                // chart:  { 
                //         height: 390, 
                //           type: 'radialBar' 
                //         },
                // plotOptions:    {  
                //                     radialBar: {
                //                         offsetY: 0,
                //                         startAngle: 0,
                //                         endAngle: 360,
                //                         hollow: {   margin: 5,
                //                                     size: '45%',
                //                                     background: 'transparent',
                //                                     image: undefined },
                //                         dataLabels: {   name: { show: true }, 
                //                                         value: { show: true, } }
                //                     }
                //                 },

                colors: mounthsStatics.map(m => m.color),
                // colors: ['#ffa500', '#551a8b', '#ff0000'],
                
                labels: mounthsStatics.map(m => m.mounth),
                // labels: ['Marzo', 'Febrero', 'Enero'],
                legend: {   show: true,
                            // floating: true,
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
                        Ganancias Mensuales
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

export default GananciasMensuales;
