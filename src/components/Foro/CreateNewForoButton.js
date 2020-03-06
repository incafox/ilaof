import React, { useState } from 'react';
import {Dropdown} from 'primereact/dropdown';

export default function CreateNewForoButton({onSubmit}) {

    const days = [{label:"1", value:1},{label:"2", value:2},{label:"3", value:3},{label:"4", value:4},{label:"5", value:5}];
    const [day, setDay] = useState("");
    const changeDay = e => {setDay(e.value); setForo({...foro, day: e.value})};

    const hours = [{label:"1", value:1},{label:"2", value:2},{label:"3", value:3},{label:"4", value:4},{label:"5", value:5}];
    const [hour, setHour] = useState("");
    const changeHour = e => {setHour(e.value); setForo({...foro, hour: e.value})};

    const minutes = [{label:"1", value:1},{label:"2", value:2},{label:"3", value:3},{label:"4", value:4},{label:"5", value:5}];
    const [minute, setMinute] = useState("");
    const changeMinute = e => {setMinute(e.value); setForo({...foro, minute: e.value})};

    const groups = [{label:"Magios", value:1},{label:"Epyca", value:2},{label:"Appicardi", value:3},{label:"Brothers", value:4},{label:"Urbetrack", value:5}];
    const [group, setGroup] = useState("");
    const changeGroup = e => {setGroup(e.value); setForo({...foro, group: e.value});};

    const[foro, setForo] = useState({day:"", hour:"", minute:"", group:"", description: ""});
    const handleChange = e => setForo({...foro, [e.target.name]: e.target.value});

    const submit = () => onSubmit(foro)

    return (
        <div>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Foro</button>

            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <div className="alert alert-outline" role="alert" style={{width:"100%"}}>
                            <div className="card">
                                <div className="card-header">
                                    <div className="row">
                                        FOTO
                                    </div>
                                </div>
                                <div className="card-body">
                                    <Dropdown name="day" options={days} onChange={changeDay} value={day} placeholder="Days"/>
                                    <Dropdown name="hour" options={hours} onChange={changeHour} value={hour} placeholder="Hours"/>
                                    <Dropdown name="minute" options={minutes} onChange={changeMinute} value={minute} placeholder="Mins"/>
                                </div>
                                <hr/>
                                <div className="card-body">
                                    <Dropdown name="group" options={groups} onChange={changeGroup} value={group} placeholder="Choose group"/>
                                </div>
                                <div className="card-footer">
                                    <div className="form-group">
                                        <div className="row">
                                            <label htmlFor="title">Titulo</label>
                                            <input onChange={handleChange} type="text" name="title" className="form-control" id="title" placeholder="Ingrese Titulo" ></input>
                                        </div>
                                        <hr/>
                                        <div className="row">
                                            <label htmlFor="description">Description</label>
                                            <textarea onChange={handleChange} type="text" className="form-control" id="description" name="description" placeholder="Ingrese descripcion" rows="5" cols="50"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" onClick={submit} data-dismiss="modal" className="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}