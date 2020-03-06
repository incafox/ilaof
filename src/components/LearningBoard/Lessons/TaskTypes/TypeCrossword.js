import React, { useState, useEffect, useReducer } from 'react'
import Crossword from '@jaredreisinger/react-crossword'



export default function TaskCrossword({ props, currentTask, setCurrentTask }) {

  const reducer = (state, action) => {
    switch (action) {
      case "TasksCorrect":
        return state.completed + 1 === props.crossword_lenght ?
          {
            status: "success",
            completed: state.completed + 1
          }
          :
          {
            ...state,
            completed: state.completed + 1
          }

      default:
        return state
    }
  }

  const [taks, dispatch] = useReducer(reducer, { status: "incomplete", completed: 0 })

  useEffect(() => {
    if (taks.status === "success" && taks.completed === props.crossword_lenght && currentTask.status === "checking")
      setCurrentTask({
        ...currentTask,
        status: "success"
      })
    else if (currentTask.status === "checking") {
      console.log(taks)
      setCurrentTask({
        ...currentTask,
        status: "wrong"
      })
    }

  }, [currentTask.status])

  return (
    <div className="TaskType-sound TaskType-crossword">
      <div className="Crossword-list">
        <h2>Horizontal</h2>
        <ul>
          {props.crossword_horizontal.map((item, key) => <li key={key}>{item.title}</li>)}
        </ul>
      </div>
      <div className="Crossword-list">
        <h2>Vertical</h2>
        <ul>
          {props.crossword_vertical.map((item, key) => <li key={key}>{item.title}</li>)}
        </ul>
      </div>
      <div className="Crossword">
        <Crossword data={props.crossword} gridBackground={"white"} onCorrect={() => { dispatch("TasksCorrect") }} />
      </div>
    </div>
  )
}
