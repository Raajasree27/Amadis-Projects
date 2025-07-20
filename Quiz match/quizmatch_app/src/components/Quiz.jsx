import { QUIZ_STAGES } from "../constants/const";
import QUESTIONS from "../data/Questions";
import Option from "./Option";
import { useEffect, useState } from "react";

function Quiz({setQuizStage,score,setScore}){
    const[currentQuestion,setCurrentQuestion]=useState(0);
    const[selectedOption, setSelectedOption]=useState(null);
    const[timeleft,setTimeLeft]=useState(15);
    const[shuffle,setShuffle]=useState([]);
    
    useEffect(()=>{
        const shuffled=[...QUESTIONS].sort(()=>Math.random()-0.5);
        setShuffle(shuffled);
    },[])

    useEffect(()=>{
        if(shuffle.length===0) return;
        const timer=setInterval(()=>{
            setTimeLeft((prev)=>prev-1);
        },1000)
        return()=>clearInterval(timer);
    },[currentQuestion,shuffle])

    useEffect(()=>{
        if(timeleft===0){
            onNextClick();
        }
    },[timeleft])
  

    useEffect(()=>{
        if(selectedOption){
            const timeout=setTimeout(()=>{
                onNextClick();
            },1000)
            return()=>clearInterval(timeout);
        }
    },[selectedOption])



    const onNextClick=()=>{
        if(!shuffle[currentQuestion]) return
        if(selectedOption===shuffle[currentQuestion].correctOption){
            setScore(score+1);
        }
        if(currentQuestion===shuffle.length-1){
            //move to result
            setQuizStage(QUIZ_STAGES.ENDED);
        }
        else{
        setCurrentQuestion(currentQuestion+1);
        setSelectedOption(null);
        setTimeLeft(15);
    }
    }

    if (shuffle.length === 0 || !shuffle[currentQuestion]) {
    return <div>Loading...</div>;
    }

    return(
      <div className="quiz-wrapper">
        <div className="header">
          <p>{currentQuestion +1} out of {shuffle.length} Questions.</p>  
        <div className="time-bar-wrapper">
            <div className="timer-bar" style={{width:`${(timeleft/15)*100}%`}}></div>
        </div>
        </div>

        <div className="quiz">
            <p className="question">{shuffle[currentQuestion].question}</p>
            {shuffle[currentQuestion].options.map((option) =>( 
            < Option  
            key={option} 
            data={option}
            correctOption={shuffle[currentQuestion].correctOption}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}/>))}          
        </div>

        <button id="next" onClick={onNextClick} disabled={!selectedOption}>Next</button>
        
      </div>
    )
}

export default Quiz;