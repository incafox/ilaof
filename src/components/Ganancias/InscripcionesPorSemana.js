import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';
import Chart from "react-apexcharts";

const InscripcionesPorSemana = () => {

    const items = [
        { name: "Semana actual", icon: faDotCircle, color: "#C27AEB" },
        { name: "Semaan pasada", icon: faDotCircle, color: "#FDAC41" },
        // {name: "Antepasado", icon: faDotCircle, color: "#04cb04"}
    ]

    const state = {
        series: [
            {
                name: 'Semana actual',
                type: 'column',
                data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
            },
            {
                name: 'Semana pasada',
                type: 'column',
                data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
            },
            // {
            //     name: 'Revenue',
            //     type: 'line',
            //     data: [20, 29, 37, 36, 44, 45, 50, 58]
            // }
        ],
        options: {
            chart: {
                height: 450,
                type: 'line',
                stacked: false
            },
            dataLabels: { enabled: false },
            stroke: { width: [1, 1, 4] },
            // title: {
            //     text: 'XYZ - Stock Analysis (2009 - 2016)',
            //     align: 'left',
            //     offsetX: 110
            // },
            xaxis: {
                categories: ["Luners 6, 13", 2010, 2011, 2012, 2013, 2014, 2015, 2016],
            },
            yaxis: [
                {
                    axisTicks: {
                        show: true,
                    },
                    axisBorder: {
                        show: true,
                        color: '#008FFB'
                    },
                    labels: {
                        style: { color: 'black' }
                    },
                    title: {
                        text: "Estudiantes",
                        style: {
                            color: 'transparent',
                        }
                    },
                    tooltip: {
                        enabled: true
                    }
                },
                {
                    seriesName: 'Income',
                    opposite: true,
                    axisTicks: {
                        show: true,
                    },
                    axisBorder: {
                        show: true,
                        color: '#00E396'
                    },
                    labels: {
                        style: {
                            color: '#00E396',
                        }
                    },
                    // title: {
                    //     text: "Operating Cashflow (thousand crores)",
                    //     style: {
                    //         color: '#00E396',
                    //     }
                    // }
                },
                // {
                //     seriesName: 'Revenue',
                //     opposite: true,
                //         axisTicks: {
                //         show: true,
                //     },
                //     axisBorder: {
                //         show: true,
                //         color: '#FEB019'
                //     },
                //     labels: {
                //         style: { color: '#FEB019' },
                //     },
                //     title: {
                //         text: "Revenue (thousand crores)",
                //         style: { color: '#FEB019' }
                //     }
                // },
            ],
            // tooltip: {
            //     fixed: {
            //         enabled: true,
            //         position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
            //         offsetY: 30,
            //         offsetX: 60
            //     },
            // },
            // legend: {
            //     horizontalAlign: 'left',
            //     offsetX: 40
            // }
        },
    }

    return (
        <div className="card">
            <div className="card-header ">
                <div className="row">
                    <div className="col-4">
                        Inscripciones por semana
                    </div>
                    <div className="col d-flex justify-content-center">
                        {
                            items.map((item, i) => {
                                return (
                                    <div key={i} style={{ marginLeft: "1rem" }}>
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
                <Chart options={state.options}
                    series={state.series}
                    type="bar"
                    width="800"
                />
            </div>
        </div>
    )
}

export default InscripcionesPorSemana;