import React, { useState } from 'react'
import LogoDiploma from './../../../assets/img/Dashboard/diploma.svg'
import ModulesImages from './ModulesImages'

export default function UserStats() {
    const initialState = [
        { level: 1, module: 4, claseProgress: 100, speaking: '9.0', listening: '9.7', grammar: '9.7', reading: '9.7', writting: '8.9', verbs: '9.8', vocabulary: '9.0' },
        { level: 2, module: 4, claseProgress: 100, speaking: '9.0', listening: '9.7', grammar: '9.7', reading: '9.7', writting: '8.9', verbs: '9.8', vocabulary: '9.0' },
        { level: 3, module: 4, claseProgress: 100, speaking: '9.0', listening: '9.7', grammar: '9.7', reading: '9.7', writting: '8.9', verbs: '9.8', vocabulary: '9.0' },
        { level: 4, module: 3, claseProgress: 89, speaking: '9.0', listening: '9.7', grammar: '9.7', reading: '9.7', writting: '8.9', verbs: '9.8', vocabulary: '9.0' }
    ]
    const [userStats, setUserStats] = useState(initialState)
    return (
        <div className="UserStats">
            <div className="UserStats-header">
                <div className="Header-item level"><p>Nivel</p></div>
                <div className="Header-item module"><p>Modulo</p></div>
                <div className="Header-item"><p>Clase</p></div>
                <div className="Header-item"><p>Speaking</p></div>
                <div className="Header-item"><p>Listening</p></div>
                <div className="Header-item"><p>Grammar</p></div>
                <div className="Header-item"><p>Reading</p></div>
                <div className="Header-item"><p>Writting</p></div>
                <div className="Header-item"><p>Verbs</p></div>
                <div className="Header-item"><p>Vocabulary</p></div>
            </div>
            <div className="UserStats-progress"><p>Progreso</p></div>
            {userStats.map((item, index) => {
                return (
                    <div className="UserStats-content">
                        <div className="Content-item level">
                            <img src={LogoDiploma} alt="Imagen no disponible" />
                            <p>{item.level}</p>
                        </div>
                        <div className="Content-item module">
                            <ModulesImages modules={item.module} />
                        </div>
                        <div className="Content-item classProgress"><p>{item.claseProgress}%</p></div>
                        <div className="Content-item"><p>{item.speaking}</p></div>
                        <div className="Content-item"><p>{item.listening}</p></div>
                        <div className="Content-item"><p>{item.grammar}</p></div>
                        <div className="Content-item"><p>{item.reading}</p></div>
                        <div className="Content-item"><p>{item.writting}</p></div>
                        <div className="Content-item"><p>{item.verbs}</p></div>
                        <div className="Content-item"><p>{item.vocabulary}</p></div>
                    </div>)
            })}

            <div className="UserStats-footer"><p>Ver más</p></div>
        </div>
    )
}
