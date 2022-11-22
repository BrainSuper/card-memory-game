import React, {useState} from 'react';
import styles from '../styles/Card.module.css';
import {CardListProps} from "./CardsList";
import {ICard} from "../types/types";

interface CardProps {
    card: ICard;
    cards: ICard[];
    setCards: (cards: ICard[]) => void;
    selectedCards: number;
    setSelectedCards: (number: number) => void;
    compareCards: object[];
    setCompareCards: (arr: object[]) => void;
}

const Card = (props: CardProps) => {

    let rootClass = styles.card;
    if (!props.card.active) {
        rootClass = rootClass + ' ' + styles.solid
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
                 props.setCompareCards([...props.compareCards, {...props.card, active: true}])
             }}>
            {props.card.active && <img src={props.card.image} alt=""/>}

        </div>
    );
};

export default Card;