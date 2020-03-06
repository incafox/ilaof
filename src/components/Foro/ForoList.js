import React from 'react';
import { Link } from "react-router-dom";

export default function ForoList({foroList, onDelete}) {
    return (
        <div>
            {
                foroList.map((foro, i) => {
                    return(
                        <div className="row" key={i} style={{margin:"10px"}}>
                            <div className="col-2">{foro.title}</div>
                            <div className="col-2">{foro.group}</div>
                            <div className="col-3">{foro.description}</div>
                            <div className="col-2">
                                <button type="button" className="btn btn-outline-danger" onClick={() => onDelete(i)}>Delete</button>
                            </div>
                            <div className="col-3">
                                <Link to={`foro/${foro.id}`}><span className="badge badge-info">...</span></Link>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}