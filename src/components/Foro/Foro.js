import React, { useState } from 'react';
import CreateNewForoButton from "./CreateNewForoButton";
import ForoList from "./ForoList";

export default function Foro() {

    const[foroList, setForoList] = useState([
        {id: 1, day: 3, hour: 2, minute: 5, group: 10, title: "titulo 10", description: "Bla bla bla"},
        {id: 2, day: 2, hour: 7, minute: 2, group: 7, title: "titulo 7", description: "pe pe pe"},
        {id: 3, day: 4, hour: 3, minute: 6, group: 2, title: "titulo 2", description: "cok cok cok"},
        {id: 4, day: 1, hour: 1, minute: 2, group: 4, title: "titulo 4", description: "loco loco loco"},
        {id: 5, day: 2, hour: 4, minute: 7, group: 8, title: "titulo 8", description: "pa pa pa"},
        {id: 6, day: 5, hour: 5, minute: 2, group: 5, title: "titulo 5", description: "iru iru iru"},
    ]);

    const onSubmit = foro => setForoList([...foroList, foro]);
    
    const onDelete = index => setForoList(foroList.filter((x, i) => index !== i));

    return (
        <div className="card card-primary container">
            <div className="card-header">
                <div className="row">
                    <div className="col-2"><h3 className="card-title">Nuevo Foro</h3></div>
                    <div className="col-9"></div>
                    <div className="col-1"><CreateNewForoButton onSubmit={onSubmit}/></div>
                </div>
            </div>
            <div className="card-body">
                <ForoList foroList={foroList} onDelete={onDelete}/>
            </div>
        </div>
    )
}