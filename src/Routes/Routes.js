import React from 'react';
import Home from "../components/Home/Home";

// import Login from "../components/Login/Login";

import Mensajes from "../components/Mensajes/Mensajes";
// import CreateMessage from "../components/Mensajes/CreateMessage";

import Alumnos from "../components/Alumnos/Alumnos";
import CreateStudent from "../components/Alumnos/CreateStudent";
import InfoStudent from "../components/Alumnos/InfoStudent";

import Profesores from "../components/Profesores/Profesores";
import InfoProfesor from "../components/Profesores/InfoProfesor";
import EvaluacionesProfesor from "../components/EvaluacionesProfesor/EvaluacionesProfesor";
import CreateProfesor from "../components/Profesores/CreateProfesor";

import Ganancias from "../components/Ganancias/Ganancias";
import Calendario from "../components/Calendario/Calendario";

import PagosPendientes from "../components/Pagos/PagosPendientes";
import Pagos from "../components/Pagos/Pagos";

import Comunicados from "../components/Comunicados/Comunicados";
import Cursos from "../components/Cursos/Cursos";

import Foro from "../components/Foro/Foro";
import OneForo from "../components/Foro/OneForo";

import Pregunta from '../components/PerfilAlumno/Pregunta/Pregunta';
import ListaAlumno from '../components/PerfilAlumno/Lista/ListaAlumno';
import ListaProfesor from '../components/PerfilProfesor/ListaProfesor/ListaProfesor';
import ReporteEjercicios from '../components/ReporteEjercicios/ReporteEjercicios';
import ReportePregunta from '../components/ReportePregunta/ReportePregunta';
import HomeForoProfesor from '../components/ForoProfesor/HomeForoProfesor/HomeForoProfesor';

import Evaluations from "../components/Evaluations/Evaluations";
import Setting from "../components/Setting/Setting";
import { Switch, Route } from 'react-router-dom';
import Thread from '../components/ForoProfesor/Thread/Thread';
import Correos from '../components/Correos/Correos';
import CorreoMensaje from '../components/Correos/CorreoMensaje/CorreoMensaje';


export default function Routes() {

    return (
        <Switch>
            <Route exact path='/evaluations' component={ EvaluacionesProfesor } />
            {/* <Route exact path='/login' component={ Login } /> */}
            <Route exact path='/inicio' component={ Home } />
            {/* <Route exact path='/inicio' component={ Home } /> */}
            {/* <Route path='/messages/create' component={ CreateMessage } /> */}
            {/* <Route path='/messages' component={ Mensajes } /> */}
            <Route path='/messages' component={ Correos } />
            <Route path='/messages/new' component={ CorreoMensaje } />

            <Route path='/students/createStudent' component={ CreateStudent } />
            <Route path='/students/:id' component={ InfoStudent } />
            <Route path='/students' component={ Alumnos } />
            {/* <Route exact path='/students' component={ ReporteEjercicios } /> */}

            <Route path='/profesores/createProfesor' component={ CreateProfesor } />
            <Route path='/profesores/:id/evaluaciones' component={ EvaluacionesProfesor } />
            <Route path='/profesores/:id' component={ InfoProfesor } />
            <Route path='/profesores' component={ Profesores } />
            {/* <Route path='/profesores' component={ ListaProfesor } /> */}

            <Route path='/ganancias' component={ Ganancias } />
            <Route path='/calendario' component={ Calendario } />


            <Route path='/pagos/pendientes' component={ PagosPendientes } />
            <Route path='/pagos' component={ Pagos } />
            
            <Route path='/comunicados' component={ Comunicados } />
            {/* <Route path='/cursos' component={ Cursos } /> */}
            <Route path='/cursos' component={ ReporteEjercicios } />
            {/* <Route exact path='/foro/profesor/:id' component={ HomeForoProfesor } /> */}
            <Route exact path='/foro/profesor/:id/comentarios' component={ Thread } />

            <Route path='/foro/:id' component={ OneForo } />
            {/* <Route path='/foro' component={ Foro } /> */}
            <Route path='/foro' component={ HomeForoProfesor } />

            {/* <Route path='/evaluations' component={ Evaluations } /> */}
            <Route exact path='/evaluations' component={ ReporteEjercicios } />
            <Route path='/setting' component={ ListaProfesor } />

            <Route exact path='/alumno/:id' component={ ListaAlumno } />
            <Route exact path='/reporte' component={ ReporteEjercicios } />
            <Route exact path='/reporte/preguntas/:id' component={ ReportePregunta } />
            <Route exact path='/profesor/:id' component={ ListaProfesor } />
            <Route exact path='/alumno/pregunta/:id' component={ Pregunta } />
            <Route exact path='/correo' component={ Correos } />
            <Route exact path='/correo/redactar' component={ CorreoMensaje } />
            
        </Switch>
    )
}
// Barra actividades alumnos
// alumno/1   perfil alumno profesor 1 

// administrador actividades, profesor administrador barra de actividades esta no esta ligada 
// profesor/1  poner en setting 

//falta calendario
//falta redactar 