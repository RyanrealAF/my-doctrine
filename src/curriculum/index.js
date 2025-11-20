import React from 'react';
import { Link } from 'react-router-dom';
import tactics from '../data/tactics';

export default function CurriculumIndex(){
  const entries = Object.values(tactics);
  return (
    <div style={{padding:'1rem'}}>
      <h1>Curriculum Index</h1>
      <ul>
        {entries.map(t=> (
          <li key={t.key}><Link to={`/curriculum/${t.key}`}>{t.title}</Link></li>
        ))}
      </ul>
    </div>
  );
}