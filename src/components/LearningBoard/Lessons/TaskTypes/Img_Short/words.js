import React, { useState, useCallback } from 'react'
import Card from './Card'
import update from 'immutability-helper'

const Container = ({cards,setCards, props, Logos}) => {

        const moveCard = useCallback(
            (dragIndex, hoverIndex) => {
                const dragCard = cards[dragIndex]
                setCards(
                    update(cards, {
                        $splice: [
                            [dragIndex, 1],
                            [hoverIndex, 0, dragCard],
                        ],
                    }),
                )
            },
            [cards],
        )
        const renderCard = (card, index) => {
            return (
                <Card
                    key={card.id}
                    index={index}
                    id={card.id}
                    text={card.text}
                    moveCard={moveCard}
                    props={props}
                    Logo={Logos[index].img}
                />
            )
        }
        return (
            <>
                <div className="TaskType-sort">{cards.map((card, index) => renderCard(card, index))}</div>
            </>
        )
}
export default Container
