import React from 'react'

function Ranking({rankingStudents, url}) {
    return (
        <div className="card" style={{textAlign:"center", boxShadow: "3px 3px 21px 1px rgba(0,0,0,0.25)", borderRadius: "45px 45px 45px 45px", height:"76vh", background:"white", paddingTop:"1.5rem", paddingLeft:"0px", paddingRight:"0px"}}>
            <div className="row d-flex justify-content-center">
                <img style={{height:"5rem", width:"5rem"}} src={url}/>
            </div>
            <hr/>
            <div className="row d-flex justify-content-center" style={{overflow:"auto"}}>
                {
                rankingStudents.map((student, i) => {
                        return(
                            <div className="d-flex justify-content-center flex-column bd-highlight mb-3" style={{width: "10rem"}}>
                                <div className="row d-flex justify-content-center">
                                    <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQik0Z3ue9vXp_lrGo4KqzUNxGlmc0bsZaSgw3nOnKEw68-VJIf`} className="card-img-top" style={{height:"3rem", width:"3rem", borderRadius:"30rem"}} alt="..."/>
                                </div>
                                <div class="card-body d-flex justify-content-center flex-column bd-highlight mb-3">
                                    <h5 class="card-title">{student.name}</h5>
                                    <p class="card-text">Promedio: {student.avg}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Ranking;
