import { useContext } from "react"
import { quizContext } from "../providers/Context"
export function End(){
  

    const {gameScore,setgameState,setgameScore} = useContext(quizContext);
    function endGame(){
        setgameState("menu")
        setgameScore(0) 
    }
    return(
        <>
      
        <div className="quiz-end">
        <h1>Fim do Quiz!</h1>
        <h3>
              Voçe acertou {gameScore}/3 questões
              
         </h3>
         <button onClick={()=>{endGame()}} >Recomeçar quiz</button> 
        </div>
       
          
        
        </>
       
        
    )
}