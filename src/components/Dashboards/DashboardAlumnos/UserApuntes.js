import React, { useState } from 'react'
import LogoCheck from './../../../assets/img/Dashboard/Check.svg'
import './../../../dist/css/apuntes.min.css'

export default function UserApuntes() {
    const initialState = [
        { id: 0, note: 'Hay cosas que se pronuncian diferentes dependiendo si son contables o incontables' }
    ]
    const [notes, setNotes] = useState(initialState)
    return (
        <div className="Apuntes" id="Dashboar_Apuntes">
            <div className="Apuntes-header">
                <img src={LogoCheck} alt="Imagen no disponible" />
                <p>Mis apuntes</p>
            </div>
            <div className="Apuntes-Notes">
                {notes.map(note => {
                    return <p id={"Note" + note.id}>{note.note}</p>
                })}
            </div>
            <div className="Apuntes-scroll">
                <div className="container"></div>
            </div>
        </div>
    )
}
