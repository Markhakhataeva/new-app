import "./index.css"
import {useState} from "react";
import {Header} from "./components/Header";
import {Forms} from "./components/Forms";
import {Todos} from "./components/Todos";

export const App=()=> {


    const [todos,setTodos]=useState([
        {favorite:false,text:"купить продукты"},
        {favorite:true,text:"купить бананы"},
        {favorite:false,text:"купить машину"},
        {favorite:true,text:"купить дом"},
        {favorite:false,text:"купить участок"},
    ])

    const [text,setText]=useState("")

    const addTodo=()=>{
        setTodos([{
            text:text,
            favorite: false
        },...todos
        ])
        setText("")
    }


    const deleteTodo=(indexOfDeleted)=>{
        const filterTodos=todos.filter((todo,index)=>{
            if(index===indexOfDeleted){
               return false
            }
            return  true
        })
        setTodos(filterTodos)
    }

    const makeFavorite=(indexOf)=>{
        const newTodos=todos.map((item,index)=> {
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
            <Header />
            <Forms text={text} addTodo={addTodo} setText={setText}/>
            <Todos todos={todos} makeFavorite={makeFavorite} deleteTodo={deleteTodo}/>
        </div>
    );

}




