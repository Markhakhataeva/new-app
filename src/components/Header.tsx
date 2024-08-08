import React, {FC} from 'react';
import styles from "../styles/header.module.scss"


export  const Header:FC = ()=> {
    return (
        <div className={styles.header}>
            <h1>Список дел</h1>
            <hr/>
        </div>
    );
}

