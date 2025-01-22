import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const name = "Amol";
  const isLoggedIn = true;
  const messages = ["Message1"];

  return (
    <>
      <h1>Vite + React</h1>
      <h2>Hello, {name}</h2>
      <div className="card">
        {/* Click button to increase counter */}
        <button
          style={{ backgroundColor: "green", color: "white" }}
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        {messages.length > 0 && (
          <h2>You have {messages.length} unread messages.</h2>
        )}
      </div>
    </>
  );
}

export default App;
