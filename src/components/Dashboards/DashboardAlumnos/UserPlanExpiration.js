import React, { useState } from 'react'
import ExpirationProgress from './ExpirationProgress'

export default function UserPlanExpiration() {
    const [dates, setdates] = useState({date:'2 semanas, 5 días',days:19,daysMonth:31})
    return (
        <div className="PlanExpiration">
            <div className="PlanExpiration-header cards">
                <p>Tu membesía expira en...</p>
                <small>{dates.date}</small>
                <ExpirationProgress dates={dates}/>
                <p>Para terminar tu curso</p>
            </div>
            <div className="PlanExpiration-footer cards"><p>RENOVAR</p></div>
        </div>
    )
}
