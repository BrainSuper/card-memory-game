import React, {useEffect, useState} from 'react';
import styles from '../styles/CardsList.module.css'
import Card from "./Card";
import {ICard} from "../types/types";
import {shuffle} from "../utils/getImages";

export interface CardListProps {
    setWrongTries: (wrongTries: number) => void;
    wrongTries: number;
    rightTries: number;
    setRightTries: (tries: number) => void;
    cards: ICard[];
    setCards: (cards: ICard[]) => void;
}

const CardsList = (props: CardListProps) => {
    const [selectedCards, setSelectedCards] = useState(0);
    const [compareCards, setCompareCards] = useState<ICard[]>([]);

    useEffect(() => {
        props.setCards([...shuffle(props.cards)])
    }, [])
    return (
        <div className={styles.cards__wrapper}>
            {props.cards.map(card => <Card rightTries={props.rightTries} setRightTries={props.setRightTries} wrongTries={props.wrongTries} setWrongTries={props.setWrongTries} key={card.id} card={card} compareCards={compareCards} setCompareCards={setCompareCards} selectedCards={selectedCards} setSelectedCards={setSelectedCards} cards={props.cards} setCards={props.setCards}/>)}
        </div>
    );
};

export default CardsList;