import React, { useState, useEffect } from 'react';
import Chart from "react-apexcharts";

const AlumnosEnLinea = () => {

    useEffect(() => {

        const onlineStudentsHoursStatics = list => list.sort((a, b) => b.hoursOnline - a.hoursOnline);

        const studentsInfo = [
            {category: "S", nameDay:"Domingo",hoursOnline: 44, color: '#F41F0A'},
            {category: "M", nameDay:"Lunes",hoursOnline: 55, color: '#028044'},
            {category: "T", nameDay:"Martes",hoursOnline: 41, color: '#1DCAE9'},
            {category: "W", nameDay:"Miercoles",hoursOnline: 67, color: '#E3A010'},
            {category: "T", nameDay:"Jueves",hoursOnline: 22, color: '#F41F0A'},
            {category: "F", nameDay:"Viernes",hoursOnline: 43, color: '#028044'},
            {category: "S", nameDay:"Sabado",hoursOnline: 21, color: '#1DCAE9'},
        ]

        setOnlineStudents(studentsInfo);

        const list = onlineStudentsHoursStatics(studentsInfo);

        setBestDay(list[0]);
        setWorstDay(list[list.length - 1]);

    }, [])

    const[bestDay, setBestDay] = useState({});
    const[worstDay, setWorstDay] = useState({});

    const[onlineStudents, setOnlineStudents] = useState([]);

    const state = {
        series: [{
                    // name: 'Servings',
                    data: onlineStudents.map(os => os.hoursOnline)
                    // data: [44, 55, 41, 67, 22, 43, 21]
                }],
        options: {
            xaxis: {
                labels: { rotate: -45 },
                categories: onlineStudents.map(os => os.category),
                tickPlacement: 'on'
            },
            // yaxis: {
            //     title: { text: 'Servings' },
            // },
            // annotations: {
            //     points: [{
            //         x: 'Bananas',
            //         seriesIndex: 0,
            //         label: {
            //         borderColor: '#775DD0',
            //         offsetY: 0,
            //         style: {
            //             color: '#fff',
            //             background: '#775DD0',
            //         },
            //         text: 'Bananas are good',
            //         }
            //     }]
            // },
            chart: {
                height: 350,
                type: 'bar',
            },
            plotOptions: {
                bar: {
                    columnWidth: '50%',
                    endingShape: 'rounded'  
                }
            },
            dataLabels: { enabled: false },
            stroke: { width: 2 },
            grid: {
                row: {
                    colors: ['#fff', '#f2f2f2']
                }
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'light',
                    type: "horizontal",
                    shadeIntensity: 0.25,
                    gradientToColors: undefined,
                    inverseColors: true,
                    opacityFrom: 0.85,
                    opacityTo: 0.85,
                    stops: [50, 0, 100]
                }
            }
        }
    }

    return (
        <div className="card">
            <div className="card-header">
                Alumnos en linea
            </div>
            <div className="card-body">
                <div className="row">
                    <Chart  options={state.options}
                            series={state.series}
                            type="bar"
                            width="700"
                    />
                </div>
                <div className="row" style={{textAlign:"center"}}>
                    <div className="col">
                        {`Mas horas en linea: ${bestDay.hoursOnline} Hrs (${bestDay.nameDay})`}
                    </div>
                    <div className="col">
                        {`Menos horas en linea: ${worstDay.hoursOnline} Hrs (${bestDay.nameDay})`}
                    </div>
                </div>
            </div>
        </div>
    )

}

export default AlumnosEnLinea;
