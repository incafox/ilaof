import React, { useState, useEffect } from 'react';
import {Dropdown} from 'primereact/dropdown';
import {Checkbox} from 'primereact/checkbox';
import {DataTable, Column} from 'primereact/datatable';
import { ColumnGroup } from 'primereact/columngroup';
import { Row } from 'primereact/row';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faCircle } from '@fortawesome/free-solid-svg-icons';

const Pagos = () => {

    const colegiaturas = [
        {label: "Colegiatura 1", value: "Colegiatura 1"},
        {label: "Colegiatura 2", value: "Colegiatura 2"},
        {label: "Colegiatura 3", value: "Colegiatura 3"},
        {label: "Colegiatura 4", value: "Colegiatura 4"},
        {label: "Colegiatura 5", value: "Colegiatura 5"}
    ]

    const[pagosList, setPagosList] = useState([]);

    useEffect(() => {
        const pagosList = [
            {invoice: "INV-00045", amount: 430, date: "21/01/20", user: "Charly", cause: "Colegiatura", status: "Vencido"},
            {invoice: "INV-00046", amount: 345, date: "22/01/20", user: "Adri", cause: "Colegiatura", status: "Pagado"},
            {invoice: "INV-00047", amount: 253, date: "23/01/20", user: "Yael", cause: "Colegiatura", status: "Vencido"},
            {invoice: "INV-00048", amount: 637, date: "24/01/20", user: "Rodrigo", cause: "Colegiatura", status: "Pagado"},
            {invoice: "INV-00049", amount: 578, date: "25/01/20", user: "Nicolas", cause: "Colegiatura", status: "Vencido"},
            {invoice: "INV-00050", amount: 245, date: "26/01/20", user: "Sebastian", cause: "Colegiatura", status: "Pagado"},
            {invoice: "INV-00051", amount: 164, date: "27/01/20", user: "Marcelo", cause: "Colegiatura", status: "Vencido"},
            {invoice: "INV-00052", amount: 624, date: "28/01/20", user: "Guillermo", cause: "Colegiatura", status: "Pagado"},
            {invoice: "INV-00053", amount: 368, date: "29/01/20", user: "Franco", cause: "Colegiatura", status: "Vencido"},
            {invoice: "INV-00054", amount: 354, date: "30/01/20", user: "Carlos", cause: "Colegiatura", status: "Pagado"},
            {invoice: "INV-00055", amount: 278, date: "31/01/20", user: "Pedro", cause: "Colegiatura", status: "Vencido"},
            {invoice: "INV-00056", amount: 746, date: "01/02/20", user: "Pablo", cause: "Colegiatura", status: "Pagado"},
            {invoice: "INV-00057", amount: 234, date: "02/02/20", user: "Claudio", cause: "Colegiatura", status: "Vencido"}
        ]
        
        const pagosListView = pagosList.map(p => returnView(p));

        setPagosList(pagosListView)
    }, []);

    const onChange = e => {
        pagosList.map(p => {
            if(p.invoice === e.target.name){
                return {
                    check: <Checkbox checked={true} name={p.invoice} onChange={onChange}></Checkbox>,
                    invoice: p.invoice, 
                    amount: `$ ${p.amount}`, 
                    date: p.date, 
                    user: p.user, 
                    cause: <div>
                                <FontAwesomeIcon fixedWidth={true} 
                                                    icon={faCircle} 
                                                    color={"#19CD2C"} />
                                {p.cause}
                            </div>,
                    status: <button style={{pointerEvents:"none"}} 
                                    className={`${p.status==="Pagado" 
                                                    ? 
                                                    "badge badge-pill badge-success" 
                                                    : 
                                                    "badge badge-pill badge-danger"}`}>{p.status}</button>,
                    actions: <div>
                                    <FontAwesomeIcon fixedWidth={true} 
                                                    icon={faEye} 
                                                    color={"#CBCDC9"} />
                                    <FontAwesomeIcon fixedWidth={true} 
                                                    icon={faEdit} 
                                                    color={"#CBCDC9"} />
                            </div>
                }
            }else{
                return{
                    check: <Checkbox checked={false} name={p.invoice} onChange={onChange}></Checkbox>,
                    invoice: p.invoice, 
                    amount: `$ ${p.amount}`, 
                    date: p.date, 
                    user: p.user, 
                    cause: <div>
                                <FontAwesomeIcon fixedWidth={true} 
                                                    icon={faCircle} 
                                                    color={"#19CD2C"} />
                                {p.cause}
                            </div>,
                    status: <button style={{pointerEvents:"none"}} 
                                    className={`${p.status==="Pagado" 
                                                    ? 
                                                    "badge badge-pill badge-success" 
                                                    : 
                                                    "badge badge-pill badge-danger"}`}>{p.status}</button>,
                    actions: <div>
                                    <FontAwesomeIcon fixedWidth={true} 
                                                    icon={faEye} 
                                                    color={"#CBCDC9"} />
                                    <FontAwesomeIcon fixedWidth={true} 
                                                    icon={faEdit} 
                                                    color={"#CBCDC9"} />
                            </div>
                }
            }
        })
    }

    const returnView = p => {
        return {
            check: <Checkbox checked={false} 
                             name={p.invoice} 
                             onChange={onChange}
                             />
                    // </Checkbox>,
                    ,
            invoice: p.invoice, 
            amount: `$ ${p.amount}`, 
            date: p.date, 
            user: p.user, 
            cause: <div>
                        <FontAwesomeIcon fixedWidth={true} 
                                            icon={faCircle} 
                                            color={"#19CD2C"} />
                        {p.cause}
                    </div>,
            status: <button style={{pointerEvents:"none"}} 
                            className={`${p.status==="Pagado" 
                                            ? 
                                            "badge badge-pill badge-success" 
                                            : 
                                            "badge badge-pill badge-danger"}`}>{p.status}</button>,
            actions: <div>
                            <FontAwesomeIcon fixedWidth={true} 
                                            icon={faEye} 
                                            color={"#CBCDC9"} />
                            <FontAwesomeIcon fixedWidth={true} 
                                            icon={faEdit} 
                                            color={"#CBCDC9"} />
                    </div>
        }
    }

    const headerGroup = <ColumnGroup>
                                <Row>
                                    <Column style={{width: '40px', textAlign:"center"}} rowSpan={1} />
                                    <Column header="Invoice" style={{width: '100px'}} colSpan={1} />
                                    <Column header="Monto" style={{width: '100px'}} colSpan={1} />
                                    <Column header="Fecha" style={{width: '100px'}} colSpan={1} />
                                    <Column header="Usuario" style={{width: '100px'}} colSpan={1} />
                                    <Column header="Motivo" style={{width: '100px'}} colSpan={1} />
                                    <Column header="Status" style={{width: '100px'}} colSpan={1} />
                                    <Column header="Action" style={{width: '100px'}} colSpan={1} />
                                </Row>
                            </ColumnGroup>


    return (
        <div className="card" style={{boxShadow: "3px 3px 21px 1px rgba(0,0,0,0.25)", borderRadius: "45px 45px 45px 45px", height:"45vh", background:"white", paddingTop:"1.5rem", paddingLeft:"0px", paddingRight:"0px"}}>
            <div className="card-header d-flex justify-content-between">
                <input type="text" placeholder="Buscar" style={{width:"100vh"}}/>
                <Dropdown   name="colegiatura" 
                            options={colegiaturas} 
                            // onChange={changeDay} 
                            // value={day} 
                            placeholder="Colegiatura"
                />
                <Link to={`/pagos/pendientes`}>
                    <button type="button" class="btn btn-info">Pendientes de pago</button>
                </Link>
            </div>
            <div className="card-body">
                <DataTable paginator={true} rows={10} value={pagosList} headerColumnGroup={headerGroup}>
                    <Column field="check" style={{textAlign:"center"}}/>
                    <Column field="invoice" style={{color:"blue", textAlign:"center"}}/>
                    <Column field="amount" style={{textAlign:"center"}}/>
                    <Column field="date" style={{textAlign:"center"}}/>
                    <Column field="user" style={{textAlign:"center"}}/>
                    <Column field="cause" style={{textAlign:"center"}}/>
                    <Column field="status" style={{textAlign:"center"}}/>
                    <Column field="actions" style={{textAlign:"center"}}/>
                </DataTable>
            </div>
        </div>
    )
}

export default Pagos;