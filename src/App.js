import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from "./components/Login/Login";
import Header from './components/Header/Header';

import './dist/css/main.min.css';
import BodyAdministrador from './components/Content/BodyAdministrador';
import BodyAlumnos from './components/Content/BodyAlumnos';
import BodyProfesores from './components/Content/BodyProfesores';
import Home from './Home';

export default function App() {

  const token = localStorage.getItem('token');

  const [user, setUser] = React.useState({});

  React.useEffect(() => {
    function determinataUser() {
      if (localStorage.getItem('token')) {
        const token = localStorage.getItem('token');
        const userEmail = JSON.parse(token).email;
        const role = JSON.parse(token).role;
        const image = JSON.parse(token).image;
        let response;
        switch (role) {
          case 1: response = "Administrador"; break;
          case 2: response = "Profesor"; break;
          case 3: response = "Alumno"; break;
          default: break;
        }
        return { userEmail, role: response, image };
      }
    }
    setUser(determinataUser());
  }, []);

  return (
    <div className="App">
      <Router>
        {
          token ?
            <div>
              <Header user={user} />
              {
                user.role === "Administrador" ? <BodyAdministrador user={user} /> :
                  user.role === "Alumno" ? <BodyAlumnos user={user} /> :
                    user.role === "Profesor" ? <BodyProfesores user={user} /> : null
              }
            </div>
            :
            <div>
              <Route exact path='/login' component={Login} />
              <Route exact path='/' component={Home} />
            </div>
        }
      </Router>
    </div>
  );
}