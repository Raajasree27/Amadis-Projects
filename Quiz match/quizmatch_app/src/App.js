import './App.css';
import Start from "./components/Start";
import Result from "./components/Result";
import { useState } from "react";
import { QUIZ_STAGES } from "./constants/const";
import Quiz from "./components/Quiz";


const App=()=>{
  const[quizstage,setQuizStage]=useState(QUIZ_STAGES.START);
  const[score,setScore]=useState(0);

  return(
    <div>
      {quizstage===QUIZ_STAGES.START?(
        <Start setQuizStage={setQuizStage} />):
       quizstage===QUIZ_STAGES.IN_PROGRESS?
       (<Quiz score={score} 
        setScore={setScore}
        setQuizStage={setQuizStage}/>):
       (<Result score={score}
       setScore={setScore}
        setQuizStage={setQuizStage}/>)
       }
    </div>
  )
}

export default App;