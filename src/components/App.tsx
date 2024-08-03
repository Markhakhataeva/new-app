import "../index.scss"
import React, {FC, useState} from "react";
import {Forms} from "./Forms/Forms";
import {Todos} from "./Todos/Todos";
import {Header} from "./Header/Headerr";


interface State {
    favorite:boolean
    text:string
}

export const App:FC = () => {


    const [todos,setTodos] = useState<State[]>([
        {favorite:false,text:"купить продукты"},
        {favorite:true,text:"купить бананы"},
        {favorite:false,text:"купить машину"},
        {favorite:true,text:"купить дом"},
        {favorite:false,text:"купить участок"},
    ])

    const [text,setText] = useState<string>("")

    const addTodo = () => {
        setTodos([{
            text:text,
            favorite: false
        },...todos
        ])
        setText("")
    }


    const deleteTodo = (indexOfDeleted:number):void => {
        const filterTodos=todos.filter((todo,index:number) => {
            if(index===indexOfDeleted){
               return false
            }
            return  true
        })
        setTodos(filterTodos)
    }

    const makeFavorite = (indexOf:number):void => {
        const newTodos=todos.map((item,index:number) => {
            if(index===indexOf){
                return {
                    ...item,
                    favorite:!item.favorite
                }
            }return item
        })
        setTodos(newTodos)
    }



    return (
        <div className="App">
            <Header/>
            <Forms text={text} addTodo={addTodo} setText={setText}/>
            <Todos todos={todos} makeFavorite={makeFavorite} deleteTodo={deleteTodo}/>
        </div>
    );

}




