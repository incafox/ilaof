import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown } from 'primereact/dropdown';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import LogoSite from './../../assets/img/Home/logo_ilaofmexico_transparent@2x.png'
import LogoHome from './../../assets/img/Home/home (1)@2x.png'
import './../../dist/css/Login.min.css'

import './Login.scss';

export default function Login() {

    const [user, setUser] = useState({ email: "", password: "", role: "", image: "" });

    const handleChange = e => {
        e.preventDefault();
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const roles = [{ label: "Administrador", value: 1 }, { label: "Profesor", value: 2 }, { label: "Alumno", value: 3 }];
    const [role, setRole] = useState("");
    const changeRole = e => { setRole(e.value); setUser({ ...user, role: e.value }) };

    const onSubmit = e => {
        e.preventDefault();
        const { email, password } = user;
        if (email === "" || password === "") {
            alert("Datos incompletos");
        } else {
            console.log(user);
            // Backend data send
            const userLogin = { email: user.email, password: user.password, role: role, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSuJl8lKnQDTFubVf8xMgpvXZ8I2MInSE7hJbb42ORRSjI1Ntzf" }
            localStorage.setItem("token", JSON.stringify(userLogin))
            setUser({ email: "", password: "", role: "", image: "" });
            if (localStorage.getItem("token")) window.location.href = "/inicio";
        }
    }

    return (
        <div className="Login">
            <header className="Home-header">
                <div>
                    <img src={LogoSite} alt="" />
                </div>
            </header>
            <nav className="Login-navbar">
                <div className="Login-navbar-container">
                    <img src={LogoHome} alt="" /> / Login
                </div>
            </nav>
            <div className="card container ila-login-container">
                <div className="card-header">
                    <div className="d-flex justify-content-center ila-login-title">
                        <h1 className="card-title">ILA OF MEXICO</h1>
                    </div>
                    <div className="d-flex justify-content-center ila-login-subtitle">
                        <h5 className="card-title">Welcome back! Please login to continue</h5>
                    </div>
                </div>
                <form onSubmit={onSubmit} role="form">
                    <div className="card-body">
                        <div className="form-group">
                            <div className="row">
                                <div className="col">
                                    <div className="card">
                                        <div className="d-flex justify-content-end ila-login-container-input">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text ila-login-icon"><FontAwesomeIcon icon={faEnvelope} /></div>
                                            </div>
                                            <input type="email" onChange={handleChange} value={user.email} className="form-control ila-login-input" name="email" placeholder="Usuario o E-mail" />
                                            <Dropdown className="ila-login-dropdown" name="role" options={roles} onChange={changeRole} value={role} placeholder="Select Role" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="row">
                                <div className="col">
                                    <div className="d-flex justify-content-end ila-login-container-input">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text ila-login-icon"><FontAwesomeIcon icon={faLock} /></div>
                                        </div>
                                        <input type="password" onChange={handleChange} value={user.password} className="form-control ila-login-input" name="password" placeholder="Contraseña" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="row">
                                <div className="col">
                                    <div className="form-group form-check">
                                        <div class="page__toggle">
                                            <label class="toggle">
                                                <input class="toggle__input" type="checkbox" name="checkBox" id="checkBox" />
                                                <span class="toggle__label">
                                                    <span class="toggle__text ila-login-remember">Recuerdame</span>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="d-flex justify-content-end">
                                        <label className="ila-login-remember" >¿ Olvidaste tu contraseña ?</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer ila-login-footer" >
                        <button type="submit" className="btn ila-login-botton">Entrar</button>
                    </div>
                </form>
            </div>
            <footer className="Login-footer">

            </footer>
        </div>
    )
}