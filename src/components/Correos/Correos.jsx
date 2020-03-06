import React from 'react'
import Redactar from '../Redactar/Redactar'
import BandejaEntrada from '../Entrada/BandejaEntrada'
import { Route } from 'react-router-dom'
import CorreoMensaje from './CorreoMensaje/CorreoMensaje'

const Correos = () => {
    return (
        <div className="correos-component">
            <Redactar></Redactar>
            <Route  exact path='/messages' component={ BandejaEntrada } />
            <Route  exact path='/messages/new' component={ CorreoMensaje } />
        </div>
    )
}

export default Correos
