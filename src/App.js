import { useState } from 'react';
import './App.css';
import Course from './Course';

function getRandomCourse(){
  const courseArray = ['Angular','Bootstrap','Ccharp','KompleWeb'];
  return courseArray[Math.floor(Math.random()*courseArray.length)];
}

function App() {

  const [courses, setCourses] = useState([]);

  const KursEkle = () => {
      setCourses([...courses, getRandomCourse()])
  }
  
  const KursList = courses.map((course,index) => {
    return <Course key={index} courseName={course}/>
  });

  return (
    <div className="App">

      <button className='appButton' onClick={KursEkle}>Kurs Ekle</button>
      <div className='courselist'>{KursList}</div>

    </div>
  );
}

export default App;
