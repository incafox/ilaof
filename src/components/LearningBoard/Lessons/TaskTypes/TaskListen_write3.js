import React, { useEffect, useState } from 'react'
import LogoSound from './../../../../assets/img/Lessons/volume-2.svg'


export default function TaskListen_write3({ props, currentTask, setCurrentTask }) {
    const [taks, setTaks] = useState("incorrect")

    const checkTask = (e) => {

        let result = (e.target.value.toLowerCase()) === (props.answer.toLowerCase()) ? "success" : "incorrect"
        console.log(e.target.value);
        console.log(result);

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
        <div className="TaskType-sound TaskType-ListenWrite TaskType-ListenWrite3">
            <div className="header">
                <div className="TaskType-ListenWrite-reproductor">
                    <img src={LogoSound} alt="" />
                    <audio src="" style={{ display: "none" }} />
                </div>
                <p>{props.question}</p>
            </div>
            <div className="TaskType-ListenWrite-text">
                <textarea type="text" placeholder="Escribe algo..." onChange={checkTask}></textarea>
            </div>
        </div>
    )
}
