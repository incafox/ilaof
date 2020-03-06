import React, { useEffect, useState } from 'react'
import MessageLogo from './../../../assets/img/Dashboard/Mensaje.svg'

export default function UserMessage() {
    const [message, setMessage] = useState("Puedes repasar las lecciones cuantas veces necesites")
    return (
        <div className="MessageContainer">
            <img src={MessageLogo} alt="Imagen no disponible" />
            <p>{message}</p>
        </div>
    )
}
