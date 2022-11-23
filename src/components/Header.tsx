import React from 'react';
import styles from '../styles/Header.module.css';
interface HeaderProps {
    name: string;
    wrongTries: number;
}
const Header = (props: HeaderProps) => {
    return (
        <div className={styles.header__wrapper}>
            <div>Welcome {props.name}</div>
            <div>Wrong tries: {props.wrongTries}</div>
        </div>
    );
};

export default Header;