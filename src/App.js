import { useState } from 'react';
import './App.css';
import { End } from './components/end';
import { Game } from './components/game';
import { Menu } from './components/menu';
import {quizContext} from "./providers/Context.js";



function App() {
   
  const [gameState, setgameState] = useState("menu");
  const [gameScore,setgameScore] = useState(0);
  
  

  
  return (
    <>
  <div className='title'>
    <h1>Quiz App</h1>
  </div>
    <div className="App">
      
     <quizContext.Provider value={{gameState,setgameState, gameScore,setgameScore}}>
      {gameState === "menu" && <Menu/>}
      {gameState === "game" && <Game/>}
      {gameState ===  "end"  && <End/>}
     </quizContext.Provider>
      

    </div>
    </>
  );
}

export default App;
