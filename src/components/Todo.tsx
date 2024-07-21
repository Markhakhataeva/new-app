import React from 'react';


interface TodoProps {
    todo:{
        favorite:boolean
        text:string
    }
    makeFavorite:(a:number) => void
    deleteTodo:(b:number) => void
    index:number
}

export const Todo:React.FC<TodoProps> = ({todo,index,makeFavorite,deleteTodo}) =>{
    let todoClass=`todo ${todo.favorite ? "selected":""}`
    return (
        <div className="todos">
            <div className={todoClass}>
                <div className="favorite --">
                    <button onClick={() => makeFavorite(index)}>★</button>
                </div>
                <div className="todo_text">{todo.text}</div>
                <div className="actions ">
                    <button onClick={() => deleteTodo(index)}>&#10005;</button>
                </div>

            </div>
        </div>
    )
}