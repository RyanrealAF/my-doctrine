import React from 'react';

export default function LessonTemplate({tactic}){
  if(!tactic) return <div>Lesson not found.</div>;
  const {title, definition, example, detection, countermeasures, quiz} = tactic;
  return (
    <article style={{padding:'1rem'}}>
      <h2>{title}</h2>
      <section>
        <h3>Definition</h3>
        <p>{definition}</p>
      </section>
      <section>
        <h3>Example</h3>
        <p>{example}</p>
      </section>
      <section>
        <h3>Detection Protocols</h3>
        <ul>{detection.map((d,i)=>(<li key={i}>{d}</li>))}</ul>
      </section>
      <section>
        <h3>Countermeasures</h3>
        <ul>{countermeasures.map((c,i)=>(<li key={i}>{c}</li>))}</ul>
      </section>
      {quiz && quiz.length>0 && (
        <section>
          <h3>Quiz</h3>
          <ul>{quiz.map((q,i)=>(<li key={i}>{q.question}</li>))}</ul>
        </section>
      )}
    </article>
  );
}