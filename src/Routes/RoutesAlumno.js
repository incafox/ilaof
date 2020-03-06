import React from 'react';
import HomeAlumnos from "../components/Home/HomeAlumnos";

import { Switch, Route } from 'react-router-dom';
import Learnboard from '../components/LearningBoard/Learnboard';
import Modules from '../components/LearningBoard/Modules/Modules';
import Sessions from '../components/LearningBoard/Sessions/Sessions';
import Lessons from '../components/LearningBoard/Lessons/Lessons';
import Achievements from '../components/Achievements/Achievements';
import Diploma from '../components/Achievements/Diploma';
import Forums from '../components/Forum/Forums';
import Forum from '../components/Forum/Forum';

export default function RoutesAlumnos() {

    return (
        <Switch>
            <Route exact path='/dashboard' component={ HomeAlumnos } />
            <Route exact path='/aprender' component={ Learnboard } />
            <Route exact path='/logros' component={ Achievements } />
            <Route exact path='/logros/diploma/:level/:name' component={ Diploma } />
            <Route exact path='/foros' component={ Forums } />
            <Route exact path='/foros/foro/:forum' component={ Forum } />
            <Route exact path='/aprender/modules/:level/:module' component={ Modules } />
            <Route exact path='/aprender/modules/:level/:module/session/:session' component={ Sessions } />
            <Route exact path='/aprender/modules/:level/:module/session/:session/lesson/:lesson/:task' component={ Lessons } />
        </Switch>
    )
}