import React from 'react'
import LogoMedallas from './../../../assets/img/Dashboard/medallas.svg'


export default function ModulesImages({modules}) {
    let i = [0,1,2,3]

        return i.map((item,index) => index < modules ? <img src={LogoMedallas} alt={modules} /> : <img style={{ opacity: 0.5 }} src={LogoMedallas} alt="Imagen no disponible" />)


}
