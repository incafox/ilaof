import React from 'react';
import Chart from "react-apexcharts";

const IconPendiente = ({pendiente}) => {

    const state = {
        series: [   
            { 
                data: pendiente
            }
        ],
        options: {
            chart: { type: 'bar', height: '50px' },
            plotOptions: {  
                            bar: {
                                barHeight: '15%',
                                distributed: true,
                                horizontal: true,
                                dataLabels: { position: 'right' },
                            }
            },
            colors: ['#F55B3C'],
            dataLabels: {
                enabled: false,
                textAnchor: "start",
                style: { colors: ['#000000'] },
                formatter: val  => val,
                offsetX: 0,
                dropShadow: { enabled: false }
            },
            stroke: {
                width: 1,
                colors: ['#fff']
            },
            // xaxis: {
            //     categories: "",
            // },
            // yaxis: {
            //     labels: { show: true }
            // },
            // title: {
            //     text: 'Actividad Mensual',
            //     align: 'start',
            //     floating: true
            // },
            // subtitle: {
            //     text: 'Category Names as DataLabels inside bars',
            //     align: 'center',
            // },
            
            // tooltip: {
            //     theme: 'dark', 
            //     x: { show: false },
            //     y: { title: { formatter: () => "" } }
            // }
        }
    };

    return (
        <Chart  options={state.options}
                series={state.series}
                type="bar"
                width="150" />
    )
}

export default IconPendiente;
