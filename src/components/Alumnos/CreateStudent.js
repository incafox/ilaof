import React, { useState } from 'react'

export default function CreateStudent() {

    const[student, setStudent] = useState({ name: "", email: "", firstName: "", lastName: "",
                                            address: "", city: "", country: "", postalCode: "", notes: "" })
    const handleChange = e => {
        e.preventDefault();
        setStudent({...student, [e.target.name]: e.target.value})
    }

    const onSubmit = e => {
        e.preventDefault();
        const { name, email, firstName, lastName, address, city, country, postalCode, notes } = student;
        // FORMAR UN OBJETO PARA HACER UN PUSH/ AXIOS.POST !!!!!!!!!!!!!
        (name === "" || email === "" || firstName === "" || lastName === "" ||
            address === "" || city === "" || country === "" || postalCode === "" || notes === "") 
        ? alert("Datos incompletos") : console.log(student) 
        setStudent({ name:"", email:"", firstName:"", lastName:"", address: "", city: "", country: "", postalCode: "", notes })
    }

    return (
        <div className="row">
            <div className="col-2"></div>
            <div className="col-8 card" style={{textAlign:"center"}}>
                <div className="card-body">
                    <form onSubmit={onSubmit}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="name">Nombre</label>
                                <input type="text" className="form-control" id="name" name="name" value={student.name} onChange={handleChange}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" name="email" value={student.email} onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="firstName">Primer Apellido</label>
                                <input type="text" className="form-control" id="firstName" name="firstName" value={student.firstName} onChange={handleChange}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="lastName">Segundo Apellido</label>
                                <input type="text" className="form-control" id="lastName" name="lastName" value={student.lastName} onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-10">
                                <label htmlFor="address">Direccion</label>
                                <input type="text" className="form-control" id="address" name="address" value={student.address} onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label htmlFor="city">Ciudad</label>
                                <input type="text" className="form-control" id="city" name="city" value={student.city} onChange={handleChange}/>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="country">Pais</label>
                                <input type="text" className="form-control" id="country" name="country" value={student.country} onChange={handleChange}/>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="postalCode">Codigo Postal</label>
                                <input type="number" className="form-control" id="postalCode" name="postalCode" value={student.postalCode} onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-10">
                                <label htmlFor="notes">notas</label>
                                <textarea type="text" className="form-control" id="notes" name="notes" rows="5" cols="50" placeholder="..." value={student.notes} onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Crear</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-2"></div>
        </div>
    )
}