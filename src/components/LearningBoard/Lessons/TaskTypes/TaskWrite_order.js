import React, { useState, useEffect } from 'react'
import LogoSound from './../../../../assets/img/Lessons/volume-2.svg'

export default function TaskWriteOrder({ props, currentTask, setCurrentTask }) {
    const [cards, setCards] = useState(props.textWrong)
    const [taskWords, setTaskWords] = useState(props.result)

    const checkTask = (e) => {
        let inputs = document.querySelectorAll(".inputsWriteOrder");
        let result = 0
        let total = 0

        inputs.forEach(item => {
            let value =
                item.value !== "" &&
                    item.value <= props.words.length
                    && item.value >= 1 ? item.value : false

            let text = item.dataset.text

            if (value !== false) {
                total = text === props.words[value - 1].text ? total + 1 : total >= 1 ? total - 1 : 0
            }

            result = total
        })

        setTaskWords(result)

        console.log(result)


    }

    useEffect(() => {

        if (taskWords === props.words.length && currentTask.status === "checking")
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
        <div className="TaskType-sound TaskType-sort2 TaskType-WriteOrder">
            <div className="TaskType-sort2-reproductor">
                <div className="TaskType-sound-reproductor">
                    <img src={LogoSound} alt="" />
                    <audio src="" style={{ display: "none" }} />
                </div>
            </div>
            <div className="TaskType-sort">
                {props.words.map((item, key) => {
                    return (
                        <div className="sentences">
                            <input type="text" onInput={() => checkTask("input" + key)} className="inputsWriteOrder" id={"input" + key} data-text={"" + item.text + ""} />
                            <div className="wordContainer" key={key}>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
