import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function LessonResponse({ response, currentTask, setCurrentTask }) {
    const { level, module, session, lesson, task } = useParams()
    const [report, setReport] = useState({display:"none"})
    const ReportTask = () => {
        return(
            <div className="modalReport" style={{display:report.display}}>
                <div className="modalReport-container">
                    <p className="title">¿Qué anda mal?</p>
                    <p className="message">Escribe un comentario</p>
                    <textarea placeholder="Escribe tu comentario"></textarea>
                    <div className="modalReport-container-footer">
                        <button onClick={()=>setReport({...report,display:"none"})}>Cancelar</button>
                        <button onClick={()=>setReport({...report,display:"none"})}>Enviar</button>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className={"Task-response Task-" + response.type} style={{ display: response.display }}>
            <div className="Task-response-header">
                <Link to={`/aprender/modules/${level}/${module}/session/${session}`}><button className="leave">Salir</button></Link>
                <img src={response.ImgResponse} alt="" />
                <button className="next" onClick={() => setCurrentTask({ ...currentTask, id: currentTask.id + 1, status: "incomplete" })}>Siguiente</button>
            </div>
            <div className="Task-response-content">
                <p className="title">{response.title}</p>
                <p className="message">{response.message}</p>
            </div>
            <div className="Task-response-footer">
                <p className="report" onClick={()=>setReport({...report,display:"fixed"})}>Reportar pregunta</p>
            </div>
            <ReportTask/>
        </div>
    )
}
