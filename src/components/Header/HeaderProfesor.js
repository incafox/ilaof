import React from 'react';


export default function HeaderProfesor() { 
    return (
        <div className="ila-header header-admin">
            <div className="container" style={{ "display": "flex", "height": "100%" }}>
                <div className="ila-header-logo">
                    <img src="/images/ila_logo.png" width="64px" style={{ "borderRadius": "8px" }} alt="Imagen no disponible" />
                </div>
                <p className="ila-header-timeLine">ILA OF MEXICO</p>
            </div>
        </div>
    )
}