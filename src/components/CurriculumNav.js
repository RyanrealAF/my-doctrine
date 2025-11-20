import React from 'react';
import { NavLink } from 'react-router-dom';
import tactics from '../data/tactics';

export default function CurriculumNav({compact=false}){
  const entries = Object.values(tactics);
  return (
    <aside className={`curriculum-nav ${compact? 'compact':''}`}> 
      <div className="nav-inner">
        <h3>Curriculum</h3>
        <ul>
          {entries.map(t=> (
            <li key={t.key}><NavLink to={`/curriculum/${t.key}`} className={({isActive})=> isActive ? 'active' : ''}>{t.title}</NavLink></li>
          ))}
        </ul>
      </div>
    </aside>
  );
}