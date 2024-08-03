import React, {FC} from 'react';
import styles from "../../Styles/form.module.scss"


interface FormsProps {
    text:string
    setText:(a:string) => void;
    addTodo:() => void;
}

export const Forms:FC<FormsProps> = ({text,setText,addTodo}) => {
    return (
        <div className={styles.forms}>
            <input type="text" placeholder="введите текст..." value={text} onChange={(e) => setText(e.target.value)}/>
            <button onClick={addTodo}>Добавить</button>
        </div>
    );
}

