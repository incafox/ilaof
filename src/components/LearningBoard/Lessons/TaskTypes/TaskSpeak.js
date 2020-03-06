import React, { useEffect, useState } from 'react'
import LogoSound from './../../../../assets/img/Lessons/volume-2.svg'
import LogoMicrofone from './../../../../assets/img/Lessons/microfone.svg'

export default function TaskSpeak({ props, currentTask, setCurrentTask }) {
    const RecordingAudio = (e) => {
        e.target.className === "imageRecording" && e.target.parentNode.style.background !== "red"
            ?
            e.target.parentNode.style.background = "red"
            :
            e.target.className === "imageRecording" && e.target.parentNode.style.background === "red"
                ?
                e.target.parentNode.style.background = "#025ee5"
                :
                e.target.className !== "imageRecording" && e.target.style.background !== "red" ?
                    e.target.style.background = "red"
                    :
                    e.target.style.background = "#025ee5"
    }
    const [taks, setTaks] = useState("success")

    useEffect(() => {
        if (taks === "success" && currentTask.status === "checking")
            setCurrentTask({
                ...currentTask,
                status: "success"
            })
        else if (currentTask.status === "checking")
            setCurrentTask({
                ...currentTask,
                error: "Falta grabar tu audio"
            })

    }, [currentTask.status])

    return (
        <div className="TaskType-sound">
            <div className="TaskType-sound-reproductor">
                <img src={LogoSound} alt="" />
                <audio src="" style={{ display: "none" }} />
            </div>
            <div className="TaskType-sound-recording" onClick={RecordingAudio}>
                <img src={LogoMicrofone} className="imageRecording" alt="" />
                <audio src={props.audio} />
            </div>
            <div className="TaskType-sound-text">
                <input type="text" readOnly value={props.text} />
            </div>
        </div>
    )
}
