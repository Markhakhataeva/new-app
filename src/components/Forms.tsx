import React, {FC} from 'react';
import {useDispatch} from "react-redux";
import {addTodo} from "../redux/TodoSlice";
import styles from "../styles/forms.module.scss"

interface FormsProps{
    text:string,
    setText:(a:string) => void
}
export const Forms:FC<FormsProps>=({text,setText}:FormsProps)=>{
    const dispatch=useDispatch();

    return (
        <div className={styles.forms}>
            <input type="text" placeholder="введите текст..." value={text} onChange={(e) => setText(e.target.value)}/>
            <button onClick={() => dispatch(addTodo({text:text,setText:setText}))}>Добавить</button>
        </div>
    );
}

