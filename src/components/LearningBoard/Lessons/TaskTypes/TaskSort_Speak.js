import React, { useState, useEffect } from 'react'
import LogoSound from './../../../../assets/img/Lessons/volume-2.svg'
import LogoMicrofone from './../../../../assets/img/Lessons/microfone.svg'
import Words from './Shor_Words/words'


export default function TaskSort_Speak({ props, currentTask, setCurrentTask }) {

    const [cards, setCards] = useState(props.textWrong)
    let taksAudio = "success"

    const RecordingAudio = (e) => {

        taksAudio = "success"

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

    useEffect(() => {
        let checkOrder = async () => {
            let result = true
            await cards.forEach((element, index) => {

                if (result)
                    result = element.id === props.textCorrect[index].id ?
                        true : false

            })

            if (result && taksAudio === "success" && currentTask.status === "checking")

                setCurrentTask({
                    ...currentTask,
                    status: "success"
                })

            else if (currentTask.status === "checking" && taksAudio === "success") {
                setCurrentTask({
                    ...currentTask,
                    status: "wrong"
                })
            }
            else if (taksAudio === "incomplete")
                setCurrentTask({
                    ...currentTask,
                    status: "incomplete",
                    error: "Falta grabar audio"
                })
        }
        checkOrder()
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
            <div className="TaskType-sort">
                <Words cards={cards} setCards={setCards} />
            </div>
        </div>
    )
}
