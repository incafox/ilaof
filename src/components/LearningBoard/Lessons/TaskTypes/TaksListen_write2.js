import React, { useEffect, useState } from 'react'
import LogoSound from './../../../../assets/img/Lessons/volume-2.svg'

export default function TaksListen_writeType2({ props, currentTask, setCurrentTask }) {
    const [taks, setTaks] = useState("incomplete")

    const checkTask = (e) => {
        let value = e.target.value.toLowerCase();
        let result = value === props.answer.toLowerCase() ? "success" : "incomplete"

        setTaks(result)

    }

    useEffect(() => {
        if (taks === "success" && currentTask.status === "checking")
            setCurrentTask({
                ...currentTask,
                status: "success"
            })
        else if (currentTask.status === "checking")
            setCurrentTask({
                ...currentTask,
                status: "wrong"
            })

    }, [currentTask.status])

    return (
        <div className="TaskType-sound TaskType-ListenSelect">
            <div className="header">
                <div className="TaskType-sound-reproductor">
                    <img src={LogoSound} alt="" />
                    <audio src="" style={{ display: "none" }} />
                </div>
                <div className="TaskType-sound-text">
                    <p>{props.text}</p>
                </div>
            </div>
            <div className="TaskType-ListenWrite2-text">
                <textarea type="text" placeholder="Escribe algo..." onChange={checkTask}></textarea>
            </div>
        </div>
    )
}
