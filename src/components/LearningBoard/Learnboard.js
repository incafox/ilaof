import React, { useState } from 'react'
import './../../dist/css/learningboard.min.css'
import Medallas from './../../assets/img/Dashboard/medallas.svg'
import Diploma from './../../assets/img/Dashboard/diploma.svg'
import ProgressImg from './../../assets/img/LearnBoard/progress.svg'
import { initialState } from './LearnboardProps'
import { Link } from 'react-router-dom'

export default function Learnboard() {

    const [levels, setLevels] = useState(initialState)

    var moduleOpacity = 1;
    var classNameOfLevel = (status) => {

        switch (status) {
            case "Available":
                return "level "

            case 'Locked':
                return "level locked"

            default:
                break;
        }
    }


    const ChangeOpacity = (progress) => {
        if (progress < 100)
            moduleOpacity = '0.5'
        else if (progress === 100)
            moduleOpacity = '1'
    }
    return (
        <div className="LearningBoard">
            <div className="LearningBoard-container">
                {
                    levels.map(level => {
                        return (
                            <div className={classNameOfLevel(level.status)}>
                                <p className="level-title">Nivel</p>
                                <img src={level.imageLevel} alt="Imagen no disponible" />
                                <p className="level-number">{level.level}</p>
                                <p className="level-name">{level.title}</p>
                                <div className="clases">
                                    {
                                        level.modules.map(
                                            module => {
                                                return (
                                                    <div className="clases-item">
                                                        <div className="progress">
                                                            <img src={ProgressImg} alt="Imagen no disponible" />
                                                            <div className="progress-container" style={{ width: module.progress + "%" }}></div>
                                                            <div className="progress-container shadow" style={{ width: (74.3*(module.progress/100)) + "px",position:"absolute" }}></div>
                                                        </div>
                                                        <div>
                                                            <Link to="/aprender/modules/1/1"><img className="ImgModule" src={module.Logo} alt="Imagen no disponible" /></Link>
                                                        </div>
                                                        <div>
                                                            {ChangeOpacity(module.progress)}
                                                            <img className="medallas" src={Medallas} style={{ opacity: moduleOpacity }} alt="Imagen no disponible" />
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        )
                                    }
                                </div>
                                <img className="ImgCompletado" style={{ opacity: moduleOpacity }} src={Diploma} alt="Imagen no disponible" />
                                <p className="ClassMenssage">{level.menssage}</p>
                                <p className="ClassAverage">{level.average}</p>
                                <div className="divisor"></div>
                            </div>

                        )
                    })
                }
            </div>
        </div>
    )
}
