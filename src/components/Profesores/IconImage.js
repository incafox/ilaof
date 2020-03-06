import React from 'react';

const IconImage = ({project}) => {

    const urlImageUp = `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQik0Z3ue9vXp_lrGo4KqzUNxGlmc0bsZaSgw3nOnKEw68-VJIf`;

    return (
        <div className="row">
            <div style={{margin:"1rem"}}>
                <img src={urlImageUp} style={{height:"1.7vw", width:"1.7vw", borderRadius:"30rem"}} alt="..."/>
            </div>
            <div style={{paddingTop:"1rem"}}>
                {project}
            </div>
        </div>
    )
}

export default IconImage;
