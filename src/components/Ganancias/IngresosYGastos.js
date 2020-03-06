import React, { useState, useEffect } from 'react';
import {Dropdown} from 'primereact/dropdown';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const IngresosYGastos = () => {

    useEffect(() => {
        setData(info_chart[0])
    },[])

    const years = [ {label: '2019', value: '2019'}, {label: '2020', value: '2020'}, {label: '2021', value: '2021'} ];
    const info_chart = [
        {
            year: 2019, 
            data: [
                {name: 'Enero', uv: 300, pv: 500, amt: 2400},
                {name: 'Febrero', uv: 500, pv: 200, amt: 300},
                {name: 'Marzo', uv: 300, pv: 100, amt: 2000},
                {name: 'Abril', uv: 600, pv: 300, amt: 1500},
                {name: 'Mayo', uv: 100, pv: 500, amt: 500},
                {name: 'Junio', uv: 200, pv: 200, amt: 900},
                {name: 'Julio', uv: 100, pv: 300, amt: 100},
                {name: 'Agosto', uv: 500, pv: 400, amt: 2000},
                {name: 'Septiembre', uv: 700, pv: 100, amt: 2500},
                {name: 'Octubre', uv: 400, pv: 800, amt: 2000},
                {name: 'Noviembre', uv: 800, pv: 600, amt: 3000},
                {name: 'Diciembre', uv: 100, pv: 400, amt: 500}
            ]
        },
        {
            year: 2020, 
            data: [
                {name: 'Enero', uv: 100, pv: 700},
                {name: 'Febrero', uv: 200, pv: 800},
                {name: 'Marzo', uv: 300, pv: 700},
                {name: 'Abril', uv: 200, pv: 800},
                {name: 'Mayo', uv: 100, pv: 700},
                {name: 'Junio', uv: 200, pv: 800},
                {name: 'Julio', uv: 300, pv: 700},
                {name: 'Agosto', uv: 200, pv: 800},
                {name: 'Septiembre', uv: 100, pv: 700},
                {name: 'Octubre', uv: 200, pv: 800},
                {name: 'Noviembre', uv: 300, pv: 700},
                {name: 'Diciembre', uv: 200, pv: 800}
            ]
        },
        {
            year: 2021, 
            data: [
                {name: 'Enero', uv: 800, pv: 100},
                {name: 'Febrero', uv: 900, pv: 200},
                {name: 'Marzo', uv: 700, pv: 300},
                {name: 'Abril', uv: 800, pv: 200},
                {name: 'Mayo', uv: 700, pv: 100},
                {name: 'Junio', uv: 800, pv: 200},
                {name: 'Julio', uv: 900, pv: 300},
                {name: 'Agosto', uv: 700, pv: 200},
                {name: 'Septiembre', uv: 900, pv: 100},
                {name: 'Octubre', uv: 800, pv: 200},
                {name: 'Noviembre', uv: 700, pv: 100},
                {name: 'Diciembre', uv: 800, pv: 300}
            ]
        },
    ];

    const[year, setYear] = useState("2019");
    const[data, setData] = useState([]);

    const changeYear = e => {
        const new_year = e.value;
        const selected_info = info_chart.filter(data_year => data_year.year === parseInt(new_year));
        setData(selected_info[0]);
        setYear(new_year);
    }

    return (
        <div className="card">
            <div className="card-header">
                <Dropdown   value={year} 
                            options={years} 
                            onChange={changeYear} 
                            placeholder="Seleccione año"/>
            </div>
            <div>
                <LineChart width={800} height={400} data={data.data}>
                    <Line type="monotone" dataKey="uv" stroke="green" />
                    <Line type="monotone" dataKey="pv" stroke="red" />
                    <Line type="monotone" dataKey="amt" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                </LineChart>
            </div>
        </div>
    )
}

export default IngresosYGastos;
