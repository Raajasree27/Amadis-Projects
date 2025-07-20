// import './App.css';
import { QUIZ_STAGES } from "../constants/const";
// import Quiz from "./Quiz";

const start=({setQuizStage})=>{
    return(
    <div className="start-screen">
        <h1>Welcome to Quiz Match</h1>
        <h2>Ready for a Quiz? </h2>
        <button id="start" onClick={() => setQuizStage(QUIZ_STAGES.IN_PROGRESS)}>Start</button>
    </div>
)
}
export default start;