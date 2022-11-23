import React, {useEffect, useState} from 'react';
import styles from '../styles/Card.module.css';
import {CardListProps} from "./CardsList";
import {ICard} from "../types/types";

interface CardProps {
    card: ICard;
    cards: ICard[];
    setCards: (cards: ICard[]) => void;
    selectedCards: number;
    setSelectedCards: (number: number) => void;
    compareCards: ICard[];
    setCompareCards: (arr: ICard[]) => void;
}

const Card = (props: CardProps) => {

    let rootClass = styles.card;
    if (!props.card.active) {
        rootClass = rootClass + ' ' + styles.solid
    }


    useEffect(() => {
        if (!props.card.active) return;
        props.setCompareCards([...props.compareCards, {...props.card}])
    }, [props.card.active])
        if (props.compareCards.length === 2 && props.compareCards[0].name === props.compareCards[1].name) {
            console.log('same');
            props.setSelectedCards(0);
            props.setCompareCards([]);
        } else if (props.compareCards.length === 2 && props.compareCards[0].name !== props.compareCards[1].name) {
            setTimeout(() => {
                props.setCards(props.cards.map(stateCard => {
                    if (props.compareCards[0].id === stateCard.id || props.compareCards[1].id === stateCard.id) {
                        return {...stateCard, active: false}
                    }
                    return {...stateCard}
                }))
                props.setSelectedCards(0);
                props.setCompareCards([]);
            }, 1000)

        }

    return (
        <div className={rootClass}
             onClick={() => {
                 if (props.selectedCards === 2 || props.card.active) return;
                 props.setCards(props.cards.map(stateCard => {
                     if (props.card.id === stateCard.id) {
                         return {...stateCard, active: true}
                     } return {...stateCard}
                 }))
                 props.setSelectedCards(props.selectedCards + 1);
             }}>
            {props.card.active && <img src={props.card.image} alt=""/>}

        </div>
    );
};

export default Card;