import React, {useState} from 'react';
import styles from '../styles/CardsList.module.css'
import Card from "./Card";
import {ICard} from "../types/types";

export interface CardListProps {
    cards: ICard[];
    setCards: (cards: ICard[]) => void;
}

const CardsList = (props: CardListProps) => {
    const [selectedCards, setSelectedCards] = useState(0);
    const [compareCards, setCompareCards] = useState<object[]>([]);
    return (
        <div className={styles.cards__wrapper}>
            {props.cards.map(card => <Card key={card.id} card={card} compareCards={compareCards} setCompareCards={setCompareCards} selectedCards={selectedCards} setSelectedCards={setSelectedCards} cards={props.cards} setCards={props.setCards}/>)}
        </div>
    );
};

export default CardsList;