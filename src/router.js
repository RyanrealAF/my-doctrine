import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CurriculumIndex from './curriculum/index';
import LessonTemplate from './curriculum/LessonTemplate';
import tactics from './data/tactics';

function LessonWrapper({match, paramsKey}){
  const key = paramsKey;
  const tactic = tactics[key];
  return <LessonTemplate tactic={tactic} />;
}

export default function AppRouter(){
  return (
    <Router>
      <nav style={{padding:'0.5rem 1rem',borderBottom:'1px solid rgba(255,255,255,0.03)'}}>
        <Link to="/">Curriculum</Link>
      </nav>
      <Suspense fallback={<div>Loading…</div>}>
        <Routes>
          <Route path="/" element={<CurriculumIndex/>} />
          {Object.keys(tactics).map(key=> (
            <Route key={key} path={`/curriculum/${key}`} element={<LessonTemplate tactic={tactics[key]} />} />
          ))}
        </Routes>
      </Suspense>
    </Router>
  );
}