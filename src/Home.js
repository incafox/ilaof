import React from 'react'
import { Link } from 'react-router-dom'

import './dist/css/Home.min.css'

import LogoSite from './assets/img/Home/logo_ilaofmexico_transparent@2x.png'
import Section1Background from './assets/img/Home/header@2x.png'
import LogoSearch from './assets/img/Home/search.svg'
import LogoDiploma from './assets/img/Dashboard/diploma.svg'

import LogoSection2_1 from './assets/img/Home/contacto@2x.png'
import LogoSection2_2 from './assets/img/Home/buzon@2x.png'
import LogoSection2_3 from './assets/img/Home/direccion@2x.png'
import LogoSection2_4 from './assets/img/Home/online-question@2x.png'
import LogoMessageBox from './assets/img/Home/Unión 34.svg'

import LogoSection4_1 from './assets/img/Home/Polígono 3.svg'
import LogoSection4_section2_1 from './assets/img/Home/viajar@2x.png'
import LogoSection4_section2_2 from './assets/img/Home/hotel@2x.png'
import LogoSection4_section2_3 from './assets/img/Home/palillos@2x.png'

import LogoSection5_section1_1 from './assets/img/Home/computer.svg'
import LogoSection5_section1_2 from './assets/img/Home/cup@2x.png'
import LogoSection5_section1_3 from './assets/img/Home/hat@2x.png'
import LogoSection5_section1_4 from './assets/img/Home/knife@2x.png'
import LogoSection5_bigArrow from './assets/img/Home/big_arrow@2x.png'
import LogoSection5_smallArrow from './assets/img/Home/small_arrow@2x.png'

import LogoCanada from './assets/img/Home/bandera_canada@2x.png'

export default function Home() {
    return (
        <div className="Home">
            <header className="Home-header">
                <div>
                    <img src={LogoSite} alt="" />
                </div>
                <nav className="Home-header-links">
                    <div className="section1">
                        <Link to="/login" className="Login-link">Log in</Link>
                        <Link to="/login" className="Singup-link">Sing up</Link>
                    </div>
                    <div className="section2">
                        <p>¿Nuevo estudiante? <Link to="/login">Registrate</Link></p>
                    </div>
                </nav>
            </header>
            <section className="Home-section1" style={{ backgroundImage: "url('" + Section1Background + "')" }}>
                <div className="Home-section1-container">
                    <p className="paragraph1">¿Tienes alguna</p>
                    <p className="paragraph2">duda?</p>
                    <div className="searchContainer">
                        <input type="text" placeholder="Escribenos tus comentarios" />
                        <img src={LogoSearch} alt="" />
                    </div>
                </div>
            </section>
            <section className="Home-section2">
                <div className="Home-section2-container">
                    <div className="item">
                        <p className="bold">18</p>
                        <p>Niveles</p>
                    </div>
                    <div className="item">
                        <p className="bold">+ 5M</p>
                        <p>Actividades</p>
                    </div>
                    <div className="item">
                        <img src={LogoDiploma} alt="" />
                    </div>
                    <div className="item">
                        <p className="bold">+ 20</p>
                        <p>Profesores <br /> Certificados</p>
                    </div>
                    <div className="item">
                        <p className="bold">+ 5M</p>
                        <p>Estudiantes</p>
                    </div>
                </div>
            </section>
            <section className="Home-section3">
                <div className="Home-section3-container">
                    <div className="item">
                        <img src={LogoSection2_1} alt="" />
                        <p className="bold">¡Llamanos!</p>
                        <p>+52 1 624 157 470</p>
                    </div>
                    <div className="item">
                        <img src={LogoSection2_2} alt="" />
                        <p className="bold">Envianos un correo</p>
                        <p>ilaofmexico@gmail.com</p>
                    </div>
                    <div className="item messageBox" style={{ backgroundImage: "url('" + LogoMessageBox + "')" }}>
                        <p>Aprende Ingles de manera garantizada</p>
                    </div>
                    <div className="item">
                        <img src={LogoSection2_3} alt="" />
                        <p className="bold">Conocenos</p>
                        <p>Dirección física de matriz y
                            sucursales: Campus Buena
                            Vista: Calle Mero Mz.10 Lte.19,
                            Col.Buena Vista, Cabo San Lucas,
                            23473 Campus Plaza Golden.
                            Local 527</p>
                    </div>
                    <div className="item">
                        <img src={LogoSection2_4} alt="" />
                        <p className="bold">Dudas</p>
                        <p>Mándanos tus preguntas</p>
                    </div>
                </div>
            </section>
            <section className="Home-section4">
                <div className="section1">
                    <h2>Una nueva forma de aprender Ingles de manera fácil y rapida</h2>
                    <p>Con ILA of México aprender Ingles es muy divertido, gana puntos, trofeos y
                    diplomas a medida que vas avanzando, divirtiéndote mientras juegas
                    con una diversa cantidad de actividades que estimularan tu aprendizaje.</p>
                    <div className="section1-section1">
                        <img src={LogoSection4_1} alt="" />
                        <p>¿Cómo se hace?</p>
                    </div>
                    <img className="canadaLogo" src={LogoCanada} alt="" />
                    <div className="section1-section1">
                        <img src={LogoSection4_1} alt="" />
                        <p>¿Mi futuro en Canadá?</p>
                    </div>
                </div>
                <div className="divisor"></div>
                <div className="section2">
                    <div className="section2-section1">
                        <div>
                            <img src={LogoSection4_section2_1} alt="" />
                        </div>
                        <div>
                            <img src={LogoSection4_section2_2} alt="" />
                        </div>
                        <div>
                            <img src={LogoSection4_section2_3} alt="" />
                        </div>
                    </div>
                    <p>CURSOS ESPECIALIZADOS</p>
                    <small>para llegar justo a dónde quieres estar</small>
                </div>
                <div className="divisor"></div>
                <div className="section3">
                    <div className="section3-section1">
                        <div className="section3-section1-img0">
                            <img src={LogoSection5_section1_1} alt="" />
                        </div>
                        <div className="section3-section1-img1">
                            <img src={LogoSection5_section1_2} alt="" />
                        </div>
                        <div className="section3-section1-img2">
                            <img src={LogoSection5_bigArrow} alt="" />
                        </div>
                        <div className="section3-section1-img3">
                            <img src={LogoSection5_section1_3} alt="" />
                        </div>
                        <div className="section3-section1-img4">
                            <img src={LogoSection5_smallArrow} alt="" />
                        </div>
                        <div className="section3-section1-img5">
                            <img src={LogoSection5_section1_4} alt="" />
                        </div>
                    </div>
                    <div className="section3-section2">
                        <button>¡Conoce tu nivel!</button>
                    </div>
                </div>
            </section>
            <section className="Home-section5">
                <h3>¿Quiénes somos?</h3>
                <p>ILA of México es una institución educativa con más de 20 años de experiencia
                en el ámbito educativo, especializados en el método educativo
                didáctico. Con más de 5 mil alumnos y 3 sucursales en toda la republica, nos dedicamos
                a enseñarte una lengua más y así incrementar tus oportunidades laborales
                tu desempeño en el día a día e la superación personal.</p>
            </section>
            <footer className="Home-footer">
                <div>
                    <img src={LogoSite} alt="" />
                </div>
                <div className="Home-footer-links">
                    <Link>About</Link>
                    <Link>Privacy policy</Link>
                    <Link>Terms & condition</Link>
                    <Link to="/login">Login</Link>
                </div>
            </footer>
        </div>
    )
}
