import {ICard} from "../types/types";
import {CardProps} from "../components/Card";

// interface IChechCards {
//     compareCards: ICard[];
//
//
// }

export const checkCards = ({compareCards, setRightTries, rightTries, setSelectedCards, setCompareCards, setCards, cards, setWrongTries, wrongTries} : CardProps) => {
    if (compareCards.length === 2 && compareCards[0].name === compareCards[1].name) {
        setRightTries(rightTries + 1);
        setSelectedCards(0);
        setCompareCards([]);
    } else if (compareCards.length === 2 && compareCards[0].name !== compareCards[1].name) {
        setTimeout(() => {
            setCards(cards.map(stateCard => {
                if (compareCards[0].id === stateCard.id || compareCards[1].id === stateCard.id) {
                    return {...stateCard, active: false}
                }
                return {...stateCard}
            }))
            setWrongTries(wrongTries + 1);
            setSelectedCards(0);
            setCompareCards([]);
        }, 1000)

    }
}