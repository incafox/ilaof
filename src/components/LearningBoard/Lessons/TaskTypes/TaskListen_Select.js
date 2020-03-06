import React, { useEffect, useState } from 'react'
import LogoSound from './../../../../assets/img/Lessons/volume-2.svg'

export default function TaskListen_Select({ props, currentTask, setCurrentTask }) {
    const [taks, setTaks] = useState("incomplete")

    const checkTask = (e) => {
        let items = document.querySelectorAll(".wordContainer")
        let selected = document.getElementById(e);
        let value = selected.dataset.info
        let result = value === props.answer ? "success" : "incomplete"


        items.forEach(item => {item.style.background = "white"; item.style.color="black"})

        selected.style.background = "#49AFFC"
        selected.style.color = "white"

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
            <div className="words">
                {props.words.map((item, key) => {
                    return (
                        <div className="wordContainer" key={key} id={"Elemnt_" + item} data-info={"" + item + ""} onClick={() => checkTask("Elemnt_" + item)}>
                            <p>{item}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
