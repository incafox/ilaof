import React, { useState, useEffect } from 'react'
import LogoSound from './../../../../assets/img/Lessons/volume-2.svg'
import Words from './Shor_Words/words'

export default function TaskSort({ props, currentTask, setCurrentTask }) {
    const [cards, setCards] = useState(props.textWrong)
    const [taksAudio, setTaksAudio] = useState("success")

    useEffect(() => {
        let checkOrder = async () => {
            let result = true
            await cards.forEach((element, index) => {

                if (result)
                    result = element.id === props.textCorrect[index].id ?
                        true : false

            })

            if (result && currentTask.status === "checking")

                setCurrentTask({
                    ...currentTask,
                    status: "success"
                })

            else if (!result && currentTask.status === "checking") {
                setCurrentTask({
                    ...currentTask,
                    status: "wrong"
                })
            }
        }
        checkOrder()


    }, [currentTask.status])

    return (
        <div className="TaskType-sound TaskType-sort2">
            <div className="TaskType-sort2-reproductor">
                <div className="TaskType-sound-reproductor">
                    <img src={LogoSound} alt="" />
                    <audio src="" style={{ display: "none" }} />
                </div>
            </div>
            <div className="TaskType-sort">
                <Words cards={cards} setCards={setCards} />
            </div>
        </div>
    )
}
