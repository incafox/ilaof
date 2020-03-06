import React, { useState, useEffect } from 'react'
import Words from './Img_Short/words'

import Img1 from './../../../../assets/img/Lessons/Cheese@2x.png';
import Img2 from './../../../../assets/img/Lessons/Chef@2x.png';
import Img3 from './../../../../assets/img/Lessons/Knife@2x.png';
import Img4 from './../../../../assets/img/Lessons/Stove@2x.png';



export default function TaskImg_Sort({ Backend, props, currentTask, setCurrentTask }) {

    const [cards, setCards] = useState(props.Order_Text_wrong)
    const [taksAudio, setTaksAudio] = useState("success")

    const Logos = [
        { img: Img1 },
        { img: Img2 },
        { img: Img3 },
        { img: Img4 }
    ]

    useEffect(() => {
        let checkOrder = async () => {
            let result = true
            await cards.forEach((element, index) => {

                if (result)
                    result = element.id === props.Order_Text_correct[index].id ?
                        true : false
            })
            if (result && taksAudio === "success" && currentTask.status === "checking") {
                setCurrentTask({
                    ...currentTask,
                    status: "success"
                })
            }
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
                    error: "Orden incorrecto"
                })
        }
        checkOrder()


    }, [currentTask.status])

    return (
        <div className="TaskType-ImgSort TaskType-sound ">
            <div className="TaskType-ImgSort-Cards">
                <Words props={props} cards={cards} setCards={setCards} Logos={Logos} />
            </div>
        </div>
    )
}
