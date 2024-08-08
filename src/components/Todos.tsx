import React, {FC} from 'react';
import {deleteTodo, makeFavorite} from "../redux/TodoSlice";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useTypedDispatch} from "../hooks/useTypedDispatch";
import styles from "../styles/todos.module.scss"


export const Todos:FC = ()=> {
    const dispatch = useTypedDispatch();
    const todos = useTypedSelector((state)=>state.todo.todos);


    return (todos.map((todo,index)=>{
            let todoClass=`${styles.todo} ${todo.favorite ? `${styles.selected}`:""}`

            return(
                <div className="todos">
                    <div className={todoClass}>
                        <div className={styles.favorite}>
                            <button onClick={()=>dispatch(makeFavorite({index:index}))}>★</button>
                        </div>
                        <div className={styles.todo_text}>{todo.text}</div>
                        <div className={styles.actions}>
                            <button onClick={()=>dispatch(deleteTodo({index:index}))}>&#10005;</button>
                        </div>

                    </div>
                </div>
            )
        })

    );
}

