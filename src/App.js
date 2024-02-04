import logo from './logo.svg';
import './App.css';
import React,{useState} from "react"

function App() {
  const [value,setValue]=useState(0)
  const increase=()=>{
    setValue((prevValue)=>prevValue+1)
  }
  const decrease=()=>{
    setValue((prevValue)=>prevValue-1)
  }
  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>Count: {value}</p>
      <button onClick={increase}>Increment</button>
      <button onClick={decrease}>Decrement</button>
    </div>
  );
}

export default App;
