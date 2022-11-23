import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header";
import CardsList from "./components/CardsList";
import {getImages} from "./utils/getImages";
import {ICard} from "./types/types";
import Modal from "./components/Modal";

function App() {
    const [cards, setCards] = useState<ICard[]>([
        {
            id: 1,
            name: 'camel',
            image: getImages().camel,
            active: false

        }, {
            id: 2,
            name: 'camel',
            image: getImages().camel,
            active: false

        }, {
            id: 3,
            name: 'coconut',
            image: getImages().coconut,
            active: false

        }, {
            id: 4,
            name: 'coconut',
            image: getImages().coconut,
            active: false

        }, {
            id: 5,
            name: 'green',
            image: getImages().green,
            active: false

        }, {
            id: 6,
            name: 'green',
            image: getImages().green,
            active: false

        }, {
            id: 7,
            name: 'lemon',
            image: getImages().lemon,
            active: false

        }, {
            id: 8,
            name: 'lemon',
            image: getImages().lemon,
            active: false

        }, {
            id: 9,
            name: 'mars',
            image: getImages().mars,
            active: false

        },{
            id: 10,
            name: 'mars',
            image: getImages().mars,
            active: false

        },{
            id: 11,
            name: 'pineapple',
            image: getImages().pineapple,
            active: false

        },{
            id: 12,
            name: 'pineapple',
            image: getImages().pineapple,
            active: false

        },{
            id: 13,
            name: 'rainbow',
            image: getImages().rainbow,
            active: false

        },{
            id: 14,
            name: 'rainbow',
            image: getImages().rainbow,
            active: false

        },{
            id: 15,
            name: 'sheep',
            image: getImages().sheep,
            active: false

        },{
            id: 16,
            name: 'sheep',
            image: getImages().sheep,
            active: false

        },{
            id: 17,
            name: 'snowball',
            image: getImages().snowball,
            active: false

        },{
            id: 18,
            name: 'snowball',
            image: getImages().snowball,
            active: false

        },{
            id: 19,
            name: 'watermelon',
            image: getImages().watermelon,
            active: false

        },{
            id: 20,
            name: 'watermelon',
            image: getImages().watermelon,
            active: false

        }
    ])
    const [modal, setModal] = useState(true);
    const [name, setName] = useState('');
    const [wrongTries, setWrongTries] = useState(0);
    const [rightTries, setRightTries] = useState(0);
    return (
        <div className="App">
            <Header name={name} wrongTries={wrongTries}/>
            <CardsList setRightTries={setRightTries} rightTries={rightTries} wrongTries={wrongTries} setWrongTries={setWrongTries} cards={cards} setCards={setCards}/>
            {modal || rightTries === 10 ? <Modal rightTries={rightTries} setName={setName} setModal={setModal}/> : <></>}
        </div>
    );
}

export default App;
