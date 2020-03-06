import React, {useState  } from 'react';

export default function OneForo(props) {

    const [comments, setComments] = useState(
        [
            {date:"21/01/99", author: 1, message: "Que hambre que tengo", foroId: 1},
            {date:"22/01/99", author: 2, message: "Que sueño que tengo", foroId: 1},
            {date:"23/01/99", author: 3, message: "Que locura que tengo", foroId: 1},
            {date:"24/01/99", author: 4, message: "Que cagazo que tengo", foroId: 1},
            {date:"25/01/99", author: 5, message: "Que paja que tengo", foroId: 1},
    
            {date:"11/01/99", author: 1, message: "Hay que estudiar", foroId: 2},
            {date:"12/01/99", author: 3, message: "Hay que programar", foroId: 2},
            {date:"13/01/99", author: 4, message: "Hay que trabajar", foroId: 2},
        ]
    
    )
    
    const idForo = props.match.params.id;

    const messagesForo = comments.filter(c => c.foroId === idForo);

    const[message, setMessage] = useState({description: ""});
    const handleChange = e => {
        e.preventDefault();
        setMessage({...message, [e.target.name]: e.target.value});
    }

    const onSubmit = e => {
        e.preventDefault();
        const { description } = message;
        if(description === ""){
            alert("Datos incompletos")
        }else{
            setComments([...comments, message])
            setMessage({description:""})
        }
    }

    return(
        <div className="card card-primary container" style={{maxWidth:"700px", paddingTop:"10px"}}>
            {
                messagesForo.length !== 0 ?
                    messagesForo.map((msg, index) => {
                        return(
                            <div className="alert alert-info" role="alert" key={index}>
                                {msg.message} - {msg.date}
                            </div>
                        )
                    })
                :
                <div> {`El foro ${idForo} aun no ha sido comentado por nadie.`} </div>
            }

            <div className="card" style={{height:"375px"}}>
                <div className="card-header">
                    Ingrese comentario
                </div>
                <div className="card-body">
                    <form onSubmit={onSubmit} role="form">
                        <div className="card-body">
                            <div className="form-group">
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="description">Descripcion</label>
                                        <textarea name="textarea" onChange={handleChange} value={message.description} className="form-control" id="description" name="description" placeholder="Ingrese descripcion" rows="5" cols="50"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Enviar</button>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    )
}
