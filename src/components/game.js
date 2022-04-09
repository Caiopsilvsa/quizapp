import { Quiz } from "../providers/quiz";
import { useState } from "react";
import { quizContext } from "../providers/Context";
import { useContext } from "react";
export function Game(){
    
 
  
    const [levelState, setLevelState] = useState(0);
    const [selectedQuestion,setSelectedQuestion] = useState("");
    const {gameScore, setgameScore, setgameState} = useContext(quizContext);
    
   

    function nextQ(){
       if(selectedQuestion == Quiz[levelState].resposta){
           setgameScore(gameScore +1)
          
       }    
       if(levelState == 2){
         setgameState("end")
       }
       else{
        setLevelState(levelState+1);
       
       }
     
       
       
    }

    return(
    <>
          
      <div className="game-panel">
          <h1>{`${Quiz[levelState].pergunta}`}</h1>
          <button onClick={()=>setSelectedQuestion("A")}>{`${Quiz[levelState].A}`}</button>
          <button onClick={()=>setSelectedQuestion("B")}>{`${Quiz[levelState].B}`}</button>
          <button onClick={()=>setSelectedQuestion("C")}>{`${Quiz[levelState].C}`}</button>
          <button onClick={()=>setSelectedQuestion("D")}>{`${Quiz[levelState].D}`}</button>
          <div className="next-question">
        <button onClick={()=>nextQ()}>Próxima Pergunta</button>
        </div>
        
        </div>
     </>
        
    )
}