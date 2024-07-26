import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteTodo, makeFavorite} from "../redux/TodoSlice";

export const Todos=()=> {
    const dispatch = useDispatch();
    const todos = useSelector((state)=>state.todo.todos);


    return (todos.map((todo,index)=>{
            let todoClass=`todo ${todo.favorite ? "selected":""}`

            return(
                <div className="todos">
                    <div className={todoClass}>
                        <div className="favorite --">
                            <button onClick={()=>dispatch(makeFavorite({index:index}))}>★</button>
                        </div>
                        <div className="todo_text">{todo.text}</div>
                        <div className="actions ">
                            <button onClick={()=>dispatch(deleteTodo({index:index}))}>&#10005;</button>
                        </div>

                    </div>
                </div>
            )
        })

    );
}

