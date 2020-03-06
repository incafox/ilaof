import React, { useState } from 'react';
import Form from './Form';
import List from './List';

export default function Comunicados() {

    const[comunicados, setComunicados] = useState(
        [
            {title: "Comer", description: "Hay que comer"},
            {title: "Dormir", description: "Hay que dormir"},
            {title: "Correr", description: "Hay que correr"},
            {title: "Almorzar", description: "Hay que almorzar"},
            {title: "Cenar", description: "Hay que cenar"},
        ]
    );

    const onSubmitCom = newComunication => setComunicados([...comunicados, newComunication]);

    const onDelete = index => setComunicados(comunicados.filter((com, i) => index !== i));

    return (
        <div className="row">
            <div className="col-6">
                <Form onSubmitCom={onSubmitCom}/>
            </div>
            <div className="col-6">
                <List comunicados={comunicados} onDelete={onDelete}/>
            </div>
        </div>
    )
}