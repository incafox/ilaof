import React from 'react';
import HeaderAlumnos from './HeaderAlumno';
import HeaderProfesor from './HeaderProfesor';
import MenuAlumnos from '../Menu/MenuAlumnos';
import './../../dist/css/header.min.css'



const Header = ({ user }) => {
    return ( 
        <div>
            {
                user.role === "Alumno" ? <div><HeaderAlumnos user={user} /><MenuAlumnos/> </div> : <HeaderProfesor />
            }
        </div>
    )
}

export default Header