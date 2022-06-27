import * as React from 'react';

import { useParams, useNavigate } from 'react-router-dom';
import { getStudent, deleteStudent } from '../data';

export default function Student() {
  let navigate = useNavigate();
  let params = useParams();
  let student = getStudent(parseInt(params.studentid, 10));

  return (
    <main style={{ padding: '1rem' }}>
      <img src="https://picsum.photos/100" />

      <h2>{student.name}</h2>
      <p>
        age: {student.age}
      </p>
      <p>Birth Date: {student.birthdate}</p>
      <p>
        <button
          onClick={() => {
            deleteStudent(student.age);
            navigate('/students');
          }}
        >
          Delete
        </button>
      </p>
    </main>
  );
}
