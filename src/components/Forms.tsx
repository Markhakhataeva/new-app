import React, {FC} from 'react';
import {Button} from "./Button";

interface FormsState {
    text:string
    setText:(value: string) => void
    addTodo:() => void
    todos:Array<{
        favorite:boolean
        text:string
    }>
}


export const Forms: FC<FormsState> = ({text,setText,addTodo,todos})=>{
    return (
        <div className="forms">
            <input type="text" placeholder="введите текст..." value={text} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}/>
            <Button addTodo={addTodo} text={text} todos={todos} />

        </div>
    );
}

