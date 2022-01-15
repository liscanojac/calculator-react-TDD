import React, { useState, useEffect } from 'react';
import './App.css';
import Button from './Components/Button';
import { btnContent } from './__test__/btnContent';

function App() {

  const [displayValue, setDisplayValue] = useState("0");
  const [memory, setMemory] = useState([])

  const operations = {

    "+": () => {
      let result = Number(memory[0]) + Number(memory[2]);
      result = result.toString();
      setDisplayValue(result);
      setMemory([result]);
    }
  }

  const handleClickNumbers = (content) => {
    if (displayValue === "0") {
      setDisplayValue(content);
      setMemory([content]);
      console.log(1, memory);
    } else if (memory.length % 2 === 0) {
      setDisplayValue(displayValue + content);
      setMemory([...memory, content])
      console.log(2, memory);
    } else {
      setDisplayValue(displayValue + content);
      setMemory([memory + content]);
      // console.log(memory)
      // console.log(3);
    }
  }

  const handleClickOperators = (content) => {

    if (memory.length === 1) {
      setDisplayValue(displayValue + content);
      setMemory([...memory, content])
      console.log(3, memory);
    } else {
      handleEqual();
      // getDisplayValue();
      // getMemory();
      console.log(4, memory);
      // handleClickOperators(content);
      // setDisplayValue(displayValue + content);
      setMemory([...memory, content])
    }
  }

  const handleEqual = () => {
    
    if (memory.length === 3) {
      console.log(`handleEqual being exec`, memory);
      operations[memory[1]]();
    }
  }

  useEffect(() => {
  }, [displayValue, memory]);
  return (
    <div className="App">
      <div 
        className="display" 
        data-testid="display">{displayValue}</div>
      <div className='buttons'>
        {btnContent.map((btn, i) => {

          if ((i + 1) % 4 === 0) {
            return (
              <Button handleClick={handleClickOperators} key={i} content={btn} type="operator" /> 
            )
          }
          if (i < 3) {
            return (
              <Button handleClick={handleClickOperators} key={i} content={btn} type="function" />
            )
          }

          if (i === btnContent.length - 1) {
            return (
              <Button handleClick={handleEqual} key={i} content={btn} type="function" />
            )
          }

          if (btn === "0") {
            return (
              <Button handleClick={handleClickNumbers} key={i} content={btn} type="zero" />
            )
          }
          return (
            <Button handleClick={handleClickNumbers} key={i} content={btn} />
          )
        })}
      </div>
    </div>
  );
}

export default App;
