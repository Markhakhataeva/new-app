import "./index.css"
import {FC, useState} from "react";
import {Header} from "./components/Header";
import {Forms} from "./components/Forms";
import {Todos} from "./components/Todos";

interface StateTodos {
    favorite:boolean
    text:string

}


export const App: FC = () => {


    const [todos,setTodos] = useState<Array<StateTodos>>([
        {favorite:false,text:"купить продукты"},
        {favorite:true,text:"купить бананы"},
        {favorite:false,text:"купить машину"},
        {favorite:true,text:"купить дом"},
        {favorite:false,text:"купить участок"},
    ])

    const [text,setText] = useState<string>("")


    const addTodo = (): void => {
        setTodos([{
            text: text,
            favorite: false
        }, ...todos
        ])
        setText("")

    }

    


    const deleteTodo = (indexOfDeleted: number): void => {
        const filterTodos=todos.filter((todo,index: number): boolean => {
            if(index===indexOfDeleted){
               return false
            }
            return  true
        })
        setTodos(filterTodos)
    }

    const makeFavorite = (indexOf: number): void => {
        const newTodos=todos.map((item,index: number): StateTodos => {
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
            <Forms text={text} addTodo={addTodo}  setText={setText} todos={todos} />
            <Todos todos={todos} makeFavorite={makeFavorite} deleteTodo={deleteTodo}/>
        </div>
    );

}




