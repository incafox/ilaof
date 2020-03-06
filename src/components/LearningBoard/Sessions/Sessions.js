import React from 'react'
import './../../../dist/css/sessions.min.css'
import LogoSession from './../../../assets/img/LearnBoard/Level_1/sesion1.svg'
import LogoLesson1 from './../../../assets/img/LearnBoard/Level_1/session1/secion1-1@2x.png'
import LogoLesson2 from './../../../assets/img/LearnBoard/Level_1/session1/session1-2@2x.png'
import LogoLesson3 from './../../../assets/img/LearnBoard/Level_1/session1/session1-3@2x.png'
import LogoLesson4 from './../../../assets/img/LearnBoard/Level_1/session1/session1-4@2x.png'
import LogoLesson5 from './../../../assets/img/LearnBoard/Level_1/session1/session1-5@2x.png'
import LogoLesson6 from './../../../assets/img/LearnBoard/Level_1/session1/session1-6@2x.png'
import LogoLesson7 from './../../../assets/img/LearnBoard/Level_1/session1/session1-7@2x.png'
import LogoLesson8 from './../../../assets/img/LearnBoard/Level_1/session1/session1-8@2x.png'
import LogoLesson9 from './../../../assets/img/LearnBoard/Level_1/session1/session1-9@2x.png'
import LogoLesson10 from './../../../assets/img/LearnBoard/Level_1/session1/session1-10@2x.png'
import LogoArrow from './../../../assets/img/LearnBoard/arrow_left.svg'

import { useParams, Link } from 'react-router-dom'

export default function Sessions() {
    const { level, module, session } = useParams()
    const props = {
        session: 1,
        progress: 68,
        lessons: [
            { id: 1, img: LogoLesson1, title: 'Wach out!', progress: 100 },
            { id: 2, img: LogoLesson2, title: 'Who is the chef?', progress: 100 },
            { id: 3, img: LogoLesson3, title: 'That\'s a lemon', progress: 100 },
            { id: 4, img: LogoLesson4, title: 'What do you want?', progress: 100 },
            { id: 5, img: LogoLesson5, title: 'Water o milk?', progress: 100 },
            { id: 6, img: LogoLesson6, title: 'My roll is...', progress: 100 },
            { id: 7, img: LogoLesson7, title: 'Let\'s cook', progress: 80 },
            { id: 8, img: LogoLesson8, title: 'Were is the salt?', progress: 0 },
            { id: 9, img: LogoLesson9, title: 'That\'s lemon 2', progress: 0 },
            { id: 10, img: LogoLesson10, title: 'Do you want something', progress: 0 },
        ]
    }
    const claseName = (progress) => {
        progress = progress / 100
        progress = Math.trunc(100 * progress)


        return `c100 p${progress} big session`
    }
    return (
        <div className="Sessions">
            <div className="Sessions-container">
                <div className="backPage">
                    <Link to={`/aprender/modules/${level}/${module}/`}><img src={LogoArrow} alt="Imagen no disponible" /></Link>
                </div>
                <p className="Sessions-container-title">Sesión</p>
                <img src={LogoSession} alt="" />
                <p className="Sessions-container-number">{session}</p>
                <p className="Sessions-container-progress">{props.progress}%</p>
                <div className="Sessions-container-Lessons">
                    <div className="Lessons-container type1">
                        {
                            props.lessons.map((item, index) => {
                                let lessonType = "Lesson "

                                lessonType =
                                    (index + 1) === props.lessons.length ? lessonType = "Lesson type4" :
                                        (index + 1) % 3 === 0 ? lessonType += "type3" :
                                            (index % 3) === 0 ? lessonType += "type1" :
                                                lessonType += "type2"
                                let previousLesson = index === 0 ? 0 : index - 1
                                let opacity = props.lessons[previousLesson].progress < 100 ? 0.5 : 1
                                let cursor = props.lessons[previousLesson].progress < 100 ? 'default' : 'pointer'
                                return (
                                    <div className={lessonType} style={{ opacity: opacity }}>
                                        {
                                            props.lessons[previousLesson].progress < 100 ?
                                                <img src={item.img} alt="Imagen no disponible" style={{ cursor: cursor }} />
                                                :
                                                <Link to={`/aprender/modules/${level}/${module}/session/${props.session}/lesson/${item.id}/1`}>
                                                    <img src={item.img} alt="Imagen no disponible" style={{ cursor: cursor }} />
                                                </Link>
                                        }
                                        <div class={claseName(item.progress)}>
                                            <div class="slice">
                                                <div class="bar"></div>
                                                <div class="fill"></div>
                                            </div>
                                        </div>
                                        <p>{item.title}</p>

                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="Sessions-container-footer">
                    <p>About</p>
                    <p>Privacy policy</p>
                    <p>Terms & condition</p>
                    <p>Login</p>
                </div>
            </div>
        </div>
    )
}
