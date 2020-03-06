import React, { useEffect, useState } from 'react'
import LogoStart from './../../../assets/img/Lessons/estrella@2x.png'
import { Link } from 'react-router-dom'

export default function LessonCompleted({ lessonStatus, link }) {

    return (
        <div className="Lessons-Completed">
            <p className="title">¡Felicidades!</p>
            <img src={LogoStart} alt="Imagen no disponible" />
            <p>Completaste {lessonStatus.title} al %{Math.trunc((lessonStatus.taskCompleted / (lessonStatus.totalTask-1)) * 100)}</p>
            <p className="numeroftaks">{lessonStatus.taskCompleted}/{lessonStatus.totalTask-1}</p>
            <Link to={link}><button>Continuar</button></Link>
        </div>
    )
}
