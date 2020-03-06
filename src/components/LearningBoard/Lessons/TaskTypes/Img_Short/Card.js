import React, { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import ItemTypes from './ItemTypes'

import LogoCantSpeak from './../../../../../assets/img/Lessons/Cant_speak.svg'
import LogoMicrofone from './../../../../../assets/img/Lessons/microfone.svg'


const Card = ({ id, text, index, moveCard, props, Logo }) => {
  const ref = useRef(null)
  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    hover(item, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current.getBoundingClientRect()
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      // Determine mouse position
      const clientOffset = monitor.getClientOffset()
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex)
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex
    },
  })

  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.CARD, id, index },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const opacity = isDragging ? 0 : 1

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
  const Microfone = (props) => {
    return (
        <div className="TaskType-sound-recording" onClick={RecordingAudio}>
            <img src={LogoMicrofone} className="imageRecording" alt="" />
        </div>
    )
}
  const Item = (props) => {
    return (
        <div className="TaskType-ImgSort-container-item" id={id}>
            <div className="Logo">
                <img src={Logo} className="image" alt="" />
            </div>
            <div className="MicrofoneContainer">
                <Microfone props={props} />
                <div className="Logo_CantSpeak">
                    <img src={LogoCantSpeak} alt="" />
                </div>
            </div>
        </div>
    )
}
  drag(drop(ref))
  return (
    <div>
      <Item props={props.Order_Text_correct[id]}/>
      <div className="wordContainer" ref={ref} style={{ opacity }}>
        <p>{text}</p>
      </div>
    </div>
  )
}
export default Card
