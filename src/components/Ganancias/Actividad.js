import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faDollarSign, faVolumeUp, faCog } from '@fortawesome/free-solid-svg-icons';
import Chart from "react-apexcharts";

const Actividad = () => {

    const[activityList, setActivityList] = useState([
        {itemCategory: <FontAwesomeIcon fixedWidth={true} icon={faHome} color={'#F41F0A'} /> , category: "Ingresos", value: 170, color: '#F41F0A'},
        {itemCategory: <FontAwesomeIcon fixedWidth={true} icon={faDollarSign} color={'#028044'} /> , category: "Gastos", value: 300, color: '#028044'},
        {itemCategory: <FontAwesomeIcon fixedWidth={true} icon={faVolumeUp} color={'#1DCAE9'} /> , category: "Total ganancias", value: 200, color: '#1DCAE9'},
        {itemCategory: <FontAwesomeIcon fixedWidth={true} icon={faCog} color={'#E3A010'} /> , category: "Presupuesto", value: 350, color: '#E3A010'},
    ])

    const state = {
        series: [   
            { 
                data: activityList.map(a => a.value)
            }
        ],
        options: {
            chart: { type: 'bar', height: 380 },
            plotOptions: {  
                            bar: {
                                barHeight: '15%',
                                distributed: true,
                                horizontal: true,
                                dataLabels: { position: 'right' },
                            }
            },
            colors: activityList.map(a => a.color.toString()),
            dataLabels: {
                enabled: true,
                textAnchor: "start",
                style: { colors: ['#000000'] },
                formatter: val  => val,
                offsetX: 0,
                dropShadow: { enabled: true }
            },
            stroke: {
                width: 1,
                colors: ['#fff']
            },
            xaxis: {
                categories: activityList.map(a => a.category),
            },
            // yaxis: {
            //     labels: { show: true }
            // },
            title: {
                text: 'Actividad Mensual',
                align: 'start',
                floating: true
            },
            // subtitle: {
            //     text: 'Category Names as DataLabels inside bars',
            //     align: 'center',
            // },
            
            tooltip: {
                theme: 'dark', 
                x: { show: false },
                y: { title: { formatter: () => "" } }
            }
        }
    };

    return (
        <div className="card">
            <div className="card-header">
                Actividad
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-2">
                        {
                            activityList.map((activity, i) => {
                                return(
                                    <div key={i}>
                                        {activity.itemCategory}
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="col-10">
                        <Chart  options={state.options}
                                series={state.series}
                                type="bar"
                                width="550" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Actividad;