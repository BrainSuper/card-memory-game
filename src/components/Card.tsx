import React, {useEffect, useState} from 'react';
import styles from '../styles/Card.module.css';
import {CardListProps} from "./CardsList";
import {ICard} from "../types/types";
import {checkCards} from "../utils/checkCards";

export interface CardProps {
    card: ICard;
    cards: ICard[];
    setCards: (cards: ICard[]) => void;
    selectedCards: number;
    setSelectedCards: (number: number) => void;
    compareCards: ICard[];
    setCompareCards: (arr: ICard[]) => void;
    setWrongTries: (wrongTries: number) => void;
    wrongTries: number;
    rightTries: number;
    setRightTries: (rightTries: number) => void;
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
        checkCards({...props});

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