import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from "./components/atoms/Input/index";

function App() {
  const [val, setVal] = useState("")
  const [errorMsg, setErrorMsg] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setVal(e.target.value)

  const isOK = (val: any, max: any, min: any) => {
    if (val === "") return true
    if (min <= val && val <= max) return true
    else return false
  }
  useEffect(() => {
    if (isOK(val, 10, 1)) setErrorMsg("")
    else setErrorMsg("範囲外です")
  }, [val])

  return (
    <div className="App">
      <Input
        label="sample"
        value={val}
        errorMsg={errorMsg}
        handleChange={handleChange}
      />
      <p>value = {val}</p>
    </div>
  );
}

export default App;
