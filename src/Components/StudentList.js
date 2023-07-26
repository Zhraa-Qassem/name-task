import React from 'react';
import '../App.css';

export default function StudentList() {
  const students = ['zhraa', 'amal'];
  const names = ['zhraa', 'mary', 'mayes', 'amal'];

  const isPresent = (student) => students.includes(student);

  return (
    <div className="list">
      <h3>Students List</h3>
      <div>
        <ol>
          {names.map((name) => (
            <li key={name} className={isPresent(name) ? 'present' : 'apsent'}>
              {name}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
