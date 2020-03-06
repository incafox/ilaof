import React, { useState } from 'react';
import {Dropdown} from 'primereact/dropdown';

export default function CreateProfesor() {

    const[coach, setCoach] = useState({ name: "", email: "", firstName: "", lastName: "", address: "", city: "", country: "", postalCode: "", notes: "" })
    const handleChange = e => {
        e.preventDefault();
        setCoach({...coach, [e.target.name]: e.target.value})
    }

    const onSubmit = e => {
        e.preventDefault();
        const { name, email, firstName, lastName, address, city, country, postalCode, notes } = coach;
        // FORMAR UN OBJETO PARA HACER UN PUSH/ AXIOS.POST !!!!!!!!!!!!!
        (name === "" || email === "" || firstName === "" || lastName === "" ||
            address === "" || city === "" || country === "" || postalCode === "" || notes === "") 
        ? alert("Datos incompletos") : console.log(coach) 
        setCoach({ name:"", email:"", firstName:"", lastName:"", address: "", city: "", country: "", postalCode: "", notes })
    }

    // ********************************************************************************************************************************************************

    const[conditions, setConditions] = useState({ pago: "", salary: "", comision: "", group: "", history: ""})
    const handleCondition = e => {
        e.preventDefault();
        setConditions({...conditions, [e.target.name]: e.target.value})
    }

    const pagos = [ {label: 'Pago Diario', value: 1}, {label: 'Pago Semanal', value: 2}, {label: 'Pago Mensual', value: 3} ];
    const[pago, setPago] = useState(0);
    const changePago = e => {
        setPago(e.value);
        setConditions({...conditions, [e.target.name] : e.value})
    }
    
    const comisiones = [ {label: '5%', value: 1}, {label: '10%', value: 2}, {label: '15%', value: 3} ];
    const[comision, setComision] = useState(0);
    const changeComision = e => {
        setComision(e.value);
        setConditions({...conditions, [e.target.name] : e.value})
    }

    const groups = [ {label: 'Grupo Cali', value: 1}, {label: 'Grupo Green', value: 2}, {label: 'Grupo Red', value: 3} ];
    const[group, setGoup] = useState(0);
    const changeGroup = e => {
        setGoup(e.value);
        setConditions({...conditions, [e.target.name] : e.value})
    }
    

    return (
        <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
                <div className="card" style={{textAlign:"center", background:"lightBlue"}}>
                    <div className="card-body">
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="name">Nombre</label>
                                    <input type="text" className="form-control" id="name" name="name" value={coach.name} onChange={handleChange}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="email" name="email" value={coach.email} onChange={handleChange}/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="firstName">Primer Apellido</label>
                                    <input type="text" className="form-control" id="firstName" name="firstName" value={coach.firstName} onChange={handleChange}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="lastName">Segundo Apellido</label>
                                    <input type="text" className="form-control" id="lastName" name="lastName" value={coach.lastName} onChange={handleChange}/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-10">
                                    <label htmlFor="address">Direccion</label>
                                    <input type="text" className="form-control" id="address" name="address" value={coach.address} onChange={handleChange}/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label htmlFor="city">Ciudad</label>
                                    <input type="text" className="form-control" id="city" name="city" value={coach.city} onChange={handleChange}/>
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="country">Pais</label>
                                    <input type="text" className="form-control" id="country" name="country" value={coach.country} onChange={handleChange}/>
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="postalCode">Codigo Postal</label>
                                    <input type="number" className="form-control" id="postalCode" name="postalCode" value={coach.postalCode} onChange={handleChange}/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-10">
                                    <label htmlFor="notes">notes</label>
                                    <textarea type="text" className="form-control" id="notes" name="notes" rows="5" cols="50" placeholder="..." value={coach.notes} onChange={handleChange}/>
                                </div>
                            </div>
                            {/* <div className="card-footer">
                                <button type="submit" className="btn btn-primary">Crear</button>
                            </div> */}
                        </form>
                    </div>
                </div>
                <div className="card" style={{textAlign:"center", background:"lightBlue"}}>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-4">
                                <div className="form-group col-md-6">
                                    <label htmlFor="pago">* Pago</label>
                                    <Dropdown value={pago} options={pagos} 
                                            onChange={changePago} id="pago" name="pago"
                                            placeholder="Tipo De Pago"/>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-group col-md-6">
                                    <label htmlFor="salary">Salario</label>
                                    <input type="text" className="form-control" id="salary" name="salary" value={conditions.salary} onChange={handleCondition}/>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-group col-md-6">
                                    <label htmlFor="comision">* Comision</label>
                                    <Dropdown value={comision} options={comisiones} 
                                            onChange={changeComision} id="comision" name="comision"
                                            placeholder="Comision"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <div className="form-group col-md-6">
                                    <label htmlFor="group">* Grupo</label>
                                    <Dropdown value={group} options={groups} 
                                            onChange={changeGroup} id="group" name="group"
                                            placeholder="Tipo De Grupo"/>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-group col-md-6">
                                    <label htmlFor="history">Historial</label>
                                    <input type="text" className="form-control" id="history" name="history" value={conditions.history} onChange={handleCondition}/>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-group col-md-6">
                                    <label htmlFor="comision">* Pago Mensual</label>
                                    <Dropdown value={comision} options={comisiones} 
                                            onChange={changeComision} id="comision" name="comision"
                                            placeholder="Pago"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card" style={{textAlign:"center", background:"lightBlue"}}>
                    <div className="card-body">
                        <div className="row">
                            Horario (Calendar View)
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <button type="submit" onClick={onSubmit} className="btn btn-primary">Crear</button>
                </div>
            </div>
            <div className="col-2"></div>
        </div>
    )
}