
import React from 'react';
import '../App.css';

export default function StudentList() {
  const names = ['zhraa', 'mary', 'mayes'];

  const callStudents = (student) => {
    alert(`${student} is here`);
  };

  return (
    <div className="list">
      <h3>Students List</h3>
      <div>
        <ol>
          {names.map((name) => (
            <li key={name} >
              {name} <button className='btn' onClick={() => callStudents(name)}>Call student</button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}



 
