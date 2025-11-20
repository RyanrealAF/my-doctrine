import React, {useState, useEffect} from 'react';
import './QuizEngine.css';

export default function QuizEngine({quiz = [], challengeMode=false}){
  const [questions, setQuestions] = useState([]);
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [locked, setLocked] = useState(false);

  useEffect(()=>{
    let pool = [...quiz];
    if(challengeMode){
      // shuffle
      for(let i=pool.length-1;i>0;i--){
        const j=Math.floor(Math.random()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]];
      }
    }
    setQuestions(pool);
    setIdx(0);
    setSelected(null);
    setLocked(false);
  },[quiz,challengeMode]);

  if(!quiz || quiz.length===0) return null;

  const q = questions[idx];
  if(!q) return <div className="quiz-complete">Quiz complete.</div>;

  function choose(optionIndex){
    if(locked) return;
    setSelected(optionIndex);
    setLocked(true);
  }

  function next(){
    setIdx(i=>i+1);
    setSelected(null);
    setLocked(false);
  }

  return (
    <div className="quiz-root">
      <h4 className="quiz-title">Quiz: {q.prompt}</h4>
      <div className="quiz-options">
        {q.options.map((opt, i)=>(
          <button
            key={i}
            className={`quiz-option ${locked ? (i===q.answer ? 'correct' : (selected===i? 'incorrect':'')) : ''}`}
            onClick={()=>choose(i)}
            disabled={locked}
          >{opt}</button>
        ))}
      </div>
      {locked && (
        <div className="quiz-feedback">
          <div className="explanation">{q.explanation}</div>
          <div className="nav-buttons">
            {idx < questions.length-1 ? (
              <button className="nav-button" onClick={next}>Next Question</button>
            ) : (
              <button className="nav-button" onClick={()=>{setIdx(questions.length);}}>Finish</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
// Note: lightweight CSS is included in App.css rather than separate file for simplicity.