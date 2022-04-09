import { quizContext } from "../providers/Context";
import { useContext } from "react";

export function Menu (){
    
    const { setgameState} = useContext(quizContext)
    return(
        <div className="quiz-box">
           <h1>Bem vindo ao quiz app</h1>
           <button  onClick={()=>{setgameState("game")}}>Começar quiz</button>
        </div>
    )
}