import React, { useState } from 'react'
import LogoCard from './../../../assets/img/Dashboard/tarjeta@2x.png'
import LogoMaster from './../../../assets/img/Dashboard/mastercard@2x.png'

export default function UserCard() {
    const [cardInfo, setcardInfo] = useState({ date: '16-06-2019', number: '1234 - 5678- 9012 - 3456' })
    return (
        <div className="CreditCard">
            <div className="CreditCard-container">
                <div>
                    <p className="title">Último pago</p>
                    <p className="date">{cardInfo.date}</p>
                    <img src={LogoMaster} alt="" className="mastercard" />
                    <p className="titleCardNumber">CARD NUMBER</p>
                    <p className="cardNumber">{cardInfo.number}</p>
                </div>
            </div>
            <img src={LogoCard} alt="" className="background" />
        </div>
    )
}
