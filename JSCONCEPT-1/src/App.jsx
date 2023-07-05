import { useState } from 'react'

import './App.css'

function App() {
  const students = [
    { name: 'Harald', age: 18, grades: [45, 55, 70] },
    { name: 'Shreesha', age: 20, grades: [85, 95, 63] },
    { name: 'Bob', age: 23, grades: [69, 75, 89] }
  ];

  function calculateAverageGrade(student){
    const sum = student.grades.reduce((total, grade) => total + grade, 0);
    return sum / student.grades.length;
  }

  function printStudentInfo(student) {
    console.log('Student Name:', student.name);
    console.log('Student Age:', student.age);
    console.log('Average Grade:', calculateAverageGrade(student));
    
  }
  printStudentInfo(students[1])
  
  return (
    <div>
      <h1>Student Information</h1>
      {students.map((student, index) => (
        <div key={index}>
          <h2>{student.name}</h2>
          <p>Age: {student.age}</p>
          <p>Average Grade: {calculateAverageGrade(student)}</p>
        </div>
      ))}
    </div>
  )
}

export default App
