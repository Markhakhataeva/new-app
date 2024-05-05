import React from 'react';

export const Todos=({todos,makeFavorite,deleteTodo})=> {
    return (todos.map((todo,index)=>{
            let todoClass=`todo ${todo.favorite ? "selected":""}`

            return(
                <div className="todos">
                    <div className={todoClass}>
                        <div className="favorite --">
                            <button onClick={()=>makeFavorite(index)}>★</button>
                        </div>
                        <div className="todo_text">{todo.text}</div>
                        <div className="actions ">
                            <button onClick={()=>deleteTodo(index)}>&#10005;</button>
                        </div>

                    </div>
                </div>
            )
        })

    );
}

