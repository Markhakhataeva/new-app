import React, {FC} from 'react';
import {Todo} from "./Todo";


interface TodosProps {
    todos:Array<{
        favorite:boolean
        text:string
    }>
    makeFavorite:(a:number) => void
    deleteTodo:(b:number) => void

}


export const Todos: FC<TodosProps> = ({todos,makeFavorite,deleteTodo}) => {
    return (todos.map((todo,index)=>{
            return(
                <Todo todo={todo} makeFavorite={makeFavorite} deleteTodo={deleteTodo} index={index}/>
            )
        })

    );
}

