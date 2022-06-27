import React from 'react';
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <img src="https://picsum.photos/200/300" />
      <h1>Students</h1>

      <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
        <Link to="/students">Students</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
