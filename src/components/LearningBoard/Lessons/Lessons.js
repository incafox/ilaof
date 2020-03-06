import React, { useState, useEffect } from 'react'
import './../../../dist/css/Lessons.min.css'
import { Link, useParams } from 'react-router-dom'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'



import LogoArrow from './../../../assets/img/LearnBoard/arrow_left.svg'
import LogoSucess from './../../../assets/img/Lessons/sucess.svg'
import TaskSpeak from './TaskTypes/TaskSpeak'
import LessonResponse from './LessonResponse'

import taksProps from './Tasks.json'
import TaskSort_Speak from './TaskTypes/TaskSort_Speak'
import TaskImg_Sort from './TaskTypes/TaskImg_sort'
import Task_Soup from './TaskTypes/Task_soup'
import TaskListen_sort from './TaskTypes/TaskListen_sort'
import TaskCrossword from './TaskTypes/TypeCrossword'
import TaskListen_write from './TaskTypes/TaskListen_write'
import TaskListen_Select from './TaskTypes/TaskListen_Select'
import TaksListen_writeType2 from './TaskTypes/TaksListen_write2'
import TaskListenWrongWord from './TaskTypes/TaskListenWrongWord'
import TaskSort from './TaskTypes/TaskSort'
import TaskWriteOrder from './TaskTypes/TaskWrite_order'
import TaskListen_Select2 from './TaskTypes/TaskListen_select2'
import TaskReadWrite from './TaskTypes/TaskReadWrite'
import TaskListen_write3 from './TaskTypes/TaskListen_write3'
import LessonCompleted from './LessonComplet'

export default function Lessons() {
    //States
    const { level, module, session, lesson, task } = useParams()
    const [lessonStatus, setLessonStatus] = useState({ taskCompleted: 0, taskIncorrect: 0, totalTask: taksProps.tasks.length, title: "Whact out!" })
    const [taksStatus, setTaksStatus] = useState({ display: "none", type: "sucessfull", ImgResponse: LogoSucess, title: "¡Bien hecho!", message: "Significado: Ten cuidado con el cuchillo", progress: "3" })
    const [currentTask, setCurrentTask] = useState({ id: 0, status: "incomplete", error: "" })

    // Variables
    let skipMessage = ""
    if (currentTask.id < taksProps.tasks.length) {
        skipMessage = taksProps.tasks[currentTask.id].type === "speak" || taksProps.tasks[currentTask.id].type === "sort_and_speak"
            ? "No puedo hablar" : "Saltar"
    }

    useEffect(() => {

        localStorage.removeItem("guesses") // Limpiar la variable del crucigrama

        if (currentTask.status === "success") {
            setTaksStatus({
                ...taksStatus,
                display: "flex",
                title: "¡Bien hecho!",
                message: taksProps.tasks[currentTask.id].message,
                type: "sucessfull"
            })
            setLessonStatus({
                ...lessonStatus,
                taskCompleted: lessonStatus.taskCompleted+1
            })
        }
        else if (currentTask.status === "incomplete") {
            setTaksStatus({
                ...taksStatus,
                display: "none",
                progress: currentTask.id > 0 ? (((currentTask.id + 1) / (taksProps.tasks.length)) * 100) - 2 : 3
            })
        }
        else if (currentTask.status === "wrong") {
            setTaksStatus({
                ...taksStatus,
                display: "flex",
                type: "wrong",
                title: "¡Es incorrecto!",
                message: taksProps.tasks[currentTask.id].wrong
            })
            setLessonStatus({
                ...lessonStatus,
                taskIncorrect: lessonStatus.taskIncorrect + 1
            })
        }

        console.log(lessonStatus.taskCompleted)


    }, [currentTask.status])

    return (
        <div className="Lessons">
            <div className="backPage">
                <Link to={`/aprender/modules/${level}/${module}/session/${session}`}><img src={LogoArrow} alt="Imagen no disponible" /></Link>
            </div>
            <div className="Lessons-container">

                <div className="Task">
                    <div className="Task-status">
                        <div className="Task-status-progress">
                            <div className="Task-status-progress-bar" style={{ width: taksStatus.progress + "%" }}>
                            </div>
                        </div>
                        <div className="Task-status-title">
                            <p>{currentTask.id < taksProps.tasks.length ? taksProps.tasks[currentTask.id].title : null}</p>
                        </div>
                    </div>

                    {/* Contoneder de tipo de tareas --------------  Task type container */}
                    <div className="Task-container">
                        {
                            currentTask.id < taksProps.tasks.length && taksProps.tasks[currentTask.id].type === "speak" ?

                                <TaskSpeak props={taksProps.tasks[currentTask.id]} currentTask={currentTask} setCurrentTask={setCurrentTask} />

                                :
                                taksProps.tasks[currentTask.id].type === "sort_and_speak" ?

                                    <DndProvider backend={Backend}>
                                        <TaskSort_Speak Backend={Backend} props={taksProps.tasks[currentTask.id]} currentTask={currentTask} setCurrentTask={setCurrentTask} />
                                    </DndProvider>

                                    :
                                    taksProps.tasks[currentTask.id].type === "img__sort_and_speak" ?

                                        <DndProvider backend={Backend}>
                                            <TaskImg_Sort Backend={Backend} props={taksProps.tasks[currentTask.id]} currentTask={currentTask} setCurrentTask={setCurrentTask} />
                                        </DndProvider>

                                        : taksProps.tasks[currentTask.id].type === "alphabet_soup" ?

                                            <Task_Soup props={taksProps.tasks[currentTask.id]} currentTask={currentTask} setCurrentTask={setCurrentTask} />

                                            :
                                            taksProps.tasks[currentTask.id].type === "listen_and_sort" ?

                                                <DndProvider backend={Backend}>
                                                    <TaskListen_sort Backend={Backend} props={taksProps.tasks[currentTask.id]} currentTask={currentTask} setCurrentTask={setCurrentTask} />
                                                </DndProvider>

                                                :
                                                taksProps.tasks[currentTask.id].type === "crossword" ?

                                                    <TaskCrossword props={taksProps.tasks[currentTask.id]} currentTask={currentTask} setCurrentTask={setCurrentTask} />

                                                    :
                                                    taksProps.tasks[currentTask.id].type === "listen_and_write" ?

                                                        <TaskListen_write props={taksProps.tasks[currentTask.id]} currentTask={currentTask} setCurrentTask={setCurrentTask} />

                                                        :
                                                        taksProps.tasks[currentTask.id].type === "listen_and_select" ?

                                                            <TaskListen_Select props={taksProps.tasks[currentTask.id]} currentTask={currentTask} setCurrentTask={setCurrentTask} />

                                                            :

                                                            taksProps.tasks[currentTask.id].type === "listen_and_write_2" ?

                                                                <TaksListen_writeType2 props={taksProps.tasks[currentTask.id]} currentTask={currentTask} setCurrentTask={setCurrentTask} />

                                                                :
                                                                taksProps.tasks[currentTask.id].type === "listen_and_select_wrong_word" ?

                                                                    <TaskListenWrongWord props={taksProps.tasks[currentTask.id]} currentTask={currentTask} setCurrentTask={setCurrentTask} />

                                                                    :
                                                                    taksProps.tasks[currentTask.id].type === "listen_and_sort2" ?

                                                                        <DndProvider backend={Backend}>
                                                                            <TaskSort Backend={Backend} props={taksProps.tasks[currentTask.id]} currentTask={currentTask} setCurrentTask={setCurrentTask} />
                                                                        </DndProvider>

                                                                        :
                                                                        taksProps.tasks[currentTask.id].type === "write_order" ?

                                                                            <TaskWriteOrder props={taksProps.tasks[currentTask.id]} currentTask={currentTask} setCurrentTask={setCurrentTask} />

                                                                            :
                                                                            taksProps.tasks[currentTask.id].type === "listen_and_select2" ?

                                                                                <TaskListen_Select2 props={taksProps.tasks[currentTask.id]} currentTask={currentTask} setCurrentTask={setCurrentTask} />

                                                                                :
                                                                                taksProps.tasks[currentTask.id].type === "read_and_write" ?

                                                                                    <TaskReadWrite props={taksProps.tasks[currentTask.id]} currentTask={currentTask} setCurrentTask={setCurrentTask} />

                                                                                    :
                                                                                    taksProps.tasks[currentTask.id].type === "listen_and_write_3" ?

                                                                                        <TaskListen_write3 props={taksProps.tasks[currentTask.id]} currentTask={currentTask} setCurrentTask={setCurrentTask} />

                                                                                        :
                                                                                        <LessonCompleted lessonStatus={lessonStatus} link={`/aprender/modules/${level}/${module}/session/${session}`} />


                        }
                    </div>
                    {/* Contoneder de tipo de tareas --------------  Task type container */}
                    {
                        taksProps.tasks[currentTask.id].type !== "completed" ?
                            <div className="Task-options">
                                <div className="Task-options-skip">
                                    <button onClick={() => setCurrentTask({ ...currentTask, id: currentTask.id + 1 })}>{skipMessage}</button>
                                </div>
                                <div className="Task-options-check">
                                    <small>{currentTask.error}</small>
                                    <button onClick={() => setCurrentTask({ ...currentTask, status: "checking" })}>
                                        Calificar
                            </button>
                                </div>
                            </div>
                            : null
                    }

                </div>

                <div className="Sessions-container-footer">
                    <p>About</p>
                    <p>Privacy policy</p>
                    <p>Terms & condition</p>
                    <p>Login</p>
                </div>
                <LessonResponse response={taksStatus} currentTask={currentTask} setCurrentTask={setCurrentTask} />
            </div>
        </div>
    )
}
