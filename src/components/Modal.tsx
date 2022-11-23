import React, {useState} from 'react';
import styles from '../styles/Modal.module.css';
interface ModalProps {
    setName: (name: string) => void;
    setModal: (modal: boolean) => void;
    rightTries: number;
}
const Modal = (props: ModalProps) => {
    const [name, setName] = useState('');
    return (
        <div className={styles.modal__wrapper}>
            <div className={styles.modal__content}>
                {props.rightTries === 10
                ? <h1>You win!!!</h1>
                : <div>
                        <h1>What's your name?</h1>
                        <input type="text" value={name} onChange={(e) => {
                            setName(e.target.value);

                        }}/>
                        <button onClick={() => {
                            props.setName(name);
                            props.setModal(false)
                        }}>OK</button>
                    </div>}

            </div>
        </div>
    );
};

export default Modal;