import "./index.css"


export const App=()=> {
    // const array=[22,0,-45,1001,8,6,-0.1,101,2.5,-5555]
    // const positive=array.filter(number=>number>=0)
    // const listItem=positive.map((number)=><li>{number}</li>)


/////////////////////////////////////////////////
    // const messages = [
    //   {message: 'hello', error: true},
    //   {message: 'javascript', error: false},
    //   {message: 'lincode', error: true},
    //   {message: 'react', error: true},
    //   {message: 'angular', error: false},
    //   {message: 'es6', error: false},
    // ];
    //
    // const error=messages.filter(mes => mes.error!==true)
    // console.log(error);

/////////////////////////////////////////////////

    // const words= ['lincode', 'js', 'react', 'css', 'angular', 'bootstrap', 'html'];
    // const array=words.map(word=>word.length<5 ? '*':word);
    // console.log(array);

////////////////////////////////////////////////////////


    // function sendMessage(message) {
    //     /*
    //     * тут какой-то большой код для отправки сообщения
    //     */
    // }
    // const sendMessage=(message)=>{
    //     return()
    // }


    // function half(number) {
    //     return number / 2;
    // }
    // const half=(number)=>{
    //     return number / 2;
    // }


    // function showConsole() {
    //     console.log('lincode');
    // }
    //
    // const showConsole=()=>{
    //     console.log('lincode');
    // }


    // function concatWords(first, second) {
    //     return first + second;
    // }
    // const concatWords=(first, second)=>{
    //     return first + second;
    // }

//////////////////////////////////////////////////////////


    // const justText = () => 'lincode';
    // function justText(){
    //     return('lincode');
    // }


    // const logging = text => console.log(text);
    // function logging(text){
    //     console.log(text)
    // }


    // const add = (x,y) => {
    //     const z = 3;
    //
    //     return z * x * y;
    // }
    // function add(x,y) {
    //     const z = 3;
    //
    //     return z * x * y;
    // }


    // const onlyPositive = (number) => {
    //     if(number < 0) {
    //         return false;
    //     }
    //
    //     return true;
    // }
    // function onlyPositive(number) {
    //     if(number < 0) {
    //         return false;
    //     }
    //
    //     return true;
    // }

    ///////////////////////////////////////////////////


    // function App(props) {
    //     const isDay = props.hours < 18;
    //
    //     return(isDay ? "сейчас день": "сейчас вечер")
    // }
    // const props={hours:24};
    // console.log(App(props));


    // Объясни, почему следующий компонент всегда выводит “первый текст” при любых пропсах?

    // function BadComponent(props) {
    //     return(
    //         <div>
    //             {props ? "первый текст" : "второй текст"}
    //         </div>
    //     );
    // }
    //
    // потому что props ничему не равен *_*


    // const dark = false;



    return (
        <div className="App">
            {/*<ul>{listItem}</ul>*/}
            {/*{array}*/}
            {/*{dark ? <div className="dark"> Hello, ternary operator!</div>:<div className="light"> Hello, ternary operator!</div>}*/}

        </div>
    );

}




export const SomeBlock=()=> {
    const dark = false;

    return (
        <div className="Dark">
            {dark ? <div className="dark"> Hello, ternary operator!</div> :
                <div className="light"> Hello, ternary operator!</div>}


        </div>

    );

}


    export const ParentBlock = (props) => {
        const number = 23;
        function Small() {
            return (
                <div className="Small">Small</div>
            )
        }

        function Large() {
            return (
                <div className="Large">Large</div>
            )
        }
        return (
            <div className="ParentBlock">
                {
                    number <= 50 ? <div className="Small">Small</div> : <div className="Large">Large</div>
                }
            </div>
        )

    }