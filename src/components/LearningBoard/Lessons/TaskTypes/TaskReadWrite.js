import React, { useEffect, useState } from 'react'
import LogoSound from './../../../../assets/img/Lessons/volume-2.svg'


export default function TaskReadWrite({ props, currentTask, setCurrentTask }) {
    const [taks, setTaks] = useState("incorrect")

    const checkTask = (e) => {

        let result = (e.target.value.toLowerCase()) === props.answer ? "success" : "incorrect"
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
                status:"wrong"
            })

    }, [currentTask.status])

    return (
        <div className="TaskType-sound TaskType-ListenWrite TaskType-ReadWrite">
            <div className="TaskType-ReadWrite-header">
                <p>{props.text}</p>
                <p className="header">¿Comó se comen generalmente las papas fritas?</p>
            </div>
            <div className="TaskType-ListenWrite-text">
                <textarea type="text" placeholder="Escribe algo..." onChange={checkTask}></textarea>
            </div>
        </div>
    )
}
