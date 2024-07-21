import React from 'react';


interface ButtonProps {
    todos:Array<{
        favorite:boolean
        text:string
    }>
    addTodo:() => void
   text:string
}


export const Button:React.FC<ButtonProps> =({addTodo, text, todos})=> {
    let isDisabled = false;
    todos.map((todo):void => {
        if (todo.text === text) {
            isDisabled = true;
        }
    });

    return (
        <button onClick={addTodo} disabled={isDisabled}>Добавить</button>

    );
}

