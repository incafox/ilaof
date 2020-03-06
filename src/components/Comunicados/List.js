import React from 'react';

export default function List({comunicados, onDelete}) {

    return (
        <div className="card container" style={{padding:"0px"}}>
            <div className="card-header" style={{borderStyle:"none"}}>
                <h3 className="card-title" style={{height:"50px", fontSize:"1.4rem"}}>Ultimos Comunicados</h3>
            </div>
            <div className="card-body" style={{padding:"0px"}}>
                <div className="form-group">
                    { 
                        comunicados.map((com, i) => 
                            <Comunicado item={com} 
                                        index={i} 
                                        key={i} 
                                        onDelete={onDelete}/>) 
                    }
                </div>
            </div>
        </div>
    )
}

// *********************************************************************

const Comunicado = ({item, index, onDelete}) => {

    return(
        <div className="d-flex justify-content-center" style={{background: index % 2 == 0 ? "#F2F3F5" : "white", height:"5rem",}}>
            <div class="d-flex align-items-start flex-column bd-highlight mb-3">
                <div class="mb-auto bd-highlight">{item.title}</div>
                <div class="bd-highlight">{item.description}</div>
            </div>
        </div>
    )
}