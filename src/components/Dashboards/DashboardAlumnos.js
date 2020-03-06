import React from 'react'
import './../../dist/css/dashboard.min.css'
import UserResume from './DashboardAlumnos/UserResume'
import UserStats from './DashboardAlumnos/UserStats'
import UserCard from './DashboardAlumnos/UserCard'
import UserPlanExpiration from './DashboardAlumnos/UserPlanExpiration'
import UserLogros from './DashboardAlumnos/UserLogros'
import UserAverage from './DashboardAlumnos/UserAverage'
import UserLastLevel from './DashboardAlumnos/UserLastLevel'
import UserGoal from './DashboardAlumnos/UserGoal'
import UserMessage from './DashboardAlumnos/UserMessage'

function DashboardAlumnos() {
    return (
        <div className="Dashboard">
            <div className="Dashboard-Section1">
                <UserResume />
                <UserStats />
                <div className="Dashboard-Section1--bottom">
                    <UserCard />
                    <UserPlanExpiration />
                    <UserLogros />
                    <UserMessage />
                </div>
            </div>
            <div className="Dashboard-Section2">
                <UserAverage />
                <UserLastLevel />
                <UserGoal initialState={{ restante: 'En linea 100 min', tiempo: 62, meta: 'Meta del día' }} />
            </div>
        </div>
    )
}

export default DashboardAlumnos
