import React, { useState, useEffect } from 'react';
import ProfessorList from './components/ProfessorList';
import CourseList from './components/CourseList';
import { getProfessors} from './services/professorService';
import { getCourses} from './services/courseService';

function App() {
  const [professors, setProfessors] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getProfessors().then(data => setProfessors(data));
    getCourses().then(data => setCourses(data));
  }, []);

  return (
    <div className="App">
      <h1>Professors</h1>
      <ProfessorList professors={professors} />
      <h1>Courses</h1>
      <CourseList courses={courses} />
    </div>
  );
}

export default App;
