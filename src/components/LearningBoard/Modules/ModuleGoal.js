import React, { useState } from 'react'
import GoalProgress from './../../Dashboards/DashboardAlumnos/GoalProgress'

export default function ModuleGoal({initialState}) {
    const [Goal, setGoal] = useState(initialState)
    return (
        <div className="Goals cards">
            <p>{Goal.meta}</p>
            <div>
                <GoalProgress tiempo={Goal.tiempo} progress={70}/>
            </div>
            <p>Tiempo restante</p>
            <p style={{color:'#49AFFC'}}>{Goal.restante}.</p>
        </div>
    )
}
  