import React, {FC} from "react";
import styles from "../../Styles/todos.module.scss"

interface TodoProps {
    todo:{
        favorite:boolean
        text:string
    }
    makeFavorite:(a:number) => void
    deleteTodo:(a:number) => void
    index:number
}


export const Todo:FC<TodoProps> = ({todo,index,deleteTodo,makeFavorite}) => {
        let todoClass = `${styles.todo} ${todo.favorite ? `${styles.selected}` : ""}`

        return (
            <div className="todos">
                <div className={todoClass}>
                    <div className={styles.favorite}>
                        <button onClick={() => makeFavorite(index)}>★</button>
                    </div>
                    <div className={styles.todo_text}>{todo.text}</div>
                    <div className={styles.actions}>
                        <button onClick={() => deleteTodo(index)}>&#10005;</button>
                    </div>

                </div>
            </div>
        )
}