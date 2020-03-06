import React, { useState } from 'react'

export default function UserLastLevel() {
    const [Level, setLevel] = useState({level:4,progress:89})
    return (
        <div className="LastLevel cards">
            <div className="LastLevel-content">
                <div>
                    <p className="title">Ultimo nivel cursado</p>
                    <small>Nivel {Level.level}</small>
                </div>
                <div>
                    <p className="progress">{Level.progress}%</p>
                </div>
            </div>
        </div>
    )
}
