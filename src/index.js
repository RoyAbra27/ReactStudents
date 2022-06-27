import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Students from './routes/manyStudents';
import About from './About';
import Student from './routes/oneStudent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>

          <Route path="students" element={<Students />}>
            <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Select a Student</p>
                </main>
              }
            />
            <Route path=":studentid" element={<Student />} />
          </Route>
          <Route path="about" element={<About />} />



        </Route>
      </Routes>

    </BrowserRouter>
  </React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

