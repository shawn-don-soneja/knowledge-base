import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("a");

  useEffect(() => {
    fetch("http://localhost:3000/hello")
      .then(res => {
        console.log('hello!'); //shows in front-end browser logs
        return res.json();
      })
      .then(data => setMsg(data.message));
  }, []);

  return <div>{msg} YEET</div>;
}


/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// Frontend JSX
import { hello } from "../back-end/src/index.ts";
console.log(hello);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
*/

export default App