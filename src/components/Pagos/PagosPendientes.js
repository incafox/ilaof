import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faDollarSign, faVolumeUp, faCog } from '@fortawesome/free-solid-svg-icons';
import Chart from "react-apexcharts";

const PagosPendientes = () => {

    useEffect(() => {
        const pagosList = [
            { invoice: "INV-00046", amount: 345, date: "22/01/2020", user: "Adri", cause: "Colegiatura", status: "Pagado" },
            { invoice: "INV-00045", amount: 430, date: "21/01/2020", user: "Charly", cause: "Colegiatura", status: "Vencido" },
            { invoice: "INV-00048", amount: 637, date: "24/01/2020", user: "Rodrigo", cause: "Colegiatura", status: "Pagado" },
            { invoice: "INV-00047", amount: 253, date: "23/01/2020", user: "Yael", cause: "Colegiatura", status: "Vencido" },
            { invoice: "INV-00049", amount: 578, date: "25/01/2020", user: "Nicolas", cause: "Colegiatura", status: "Vencido" }
        ]

        setPendientes(pagosList.map(p => viewPago(p)));

    }, []);

    const viewPago = p => p;

    const [pendientes, setPendientes] = useState([]);

    const getDiasDifference = f1 => {

        const aFecha1 = f1.split('/');
        const dateNow =
            (new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear()).split("/");

        const fFecha1 = Date.UTC(aFecha1[2], aFecha1[1] - 1, aFecha1[0]);
        const fNow = Date.UTC(dateNow[2], dateNow[1] - 1, dateNow[0]);

        const dif = fNow - fFecha1;
        const dias = Math.floor(dif / (1000 * 60 * 60 * 24));
        return dias;
    }

    const f1 = "21/01/2020";

    const state = {
        series: [
            {
                data: pendientes.map(pago => getDiasDifference(pago.date))
            }
        ],
        options: {
            chart: { type: 'bar', height: 380 },
            plotOptions: {
                bar: {
                    barHeight: '20%',
                    distributed: true,
                    horizontal: true,
                    dataLabels: { position: 'right' },
                }
            },
            // colors: activityList.map(a => a.color.toString()),
            dataLabels: {
                enabled: true,
                textAnchor: "start",
                style: { colors: ['#000000'] },
                formatter: val => val,
                offsetX: 0,
                dropShadow: { enabled: true }
            },
            stroke: {
                width: 1,
                colors: ['#fff']
            },
            xaxis: {
                categories: pendientes.map(a => a.invoice),
            },
            // yaxis: {
            //     labels: { show: true }
            // },
            title: {
                text: 'Retraso en dias',
                align: 'start',
                floating: true
            },
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
        <div className="card" style={{ width: "80rem" }}>
            <div className="card-header d-flex justify-content-between">
                Pendientes de pago
                <button type="button"
                    class="btn btn-info"
                    onClick={() => window.location.href = "/pagos"}>
                    Pagos
                </button>
            </div>
            <div className="card-body">
                <Chart options={state.options}
                    series={state.series}
                    type="bar"
                    width="950" />
            </div>
        </div>
    )
}

export default PagosPendientes;
