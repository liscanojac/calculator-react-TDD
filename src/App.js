import React, { useState } from 'react';
import './App.css';
import Button from './Components/Button';
import { btnContent } from './__test__/btnContent';

function App() {

  const [displayValue, setDisplayValue] = useState("0");
  const [memory, setMemory] = useState([])

  const operations = {

    "+": () => {
      setDisplayValue(Number(memory[0]) + Number(memory[2]));
      setMemory([Number(memory[0]) + Number(memory[2])]);
    }
  }

  const handleClickNumbers = (content) => {
    if (displayValue === "0") {
      setDisplayValue(content);
      setMemory([content]);

    } else if (memory.length % 2 === 0) {
      setDisplayValue(displayValue + content);
      setMemory([...memory, content])
    } else {
      setDisplayValue(displayValue + content);
      setMemory([memory + content]);
    }
  }

  const handleClickOperators = (content) => {

    if (memory.length === 1) {
      setDisplayValue(displayValue + content);
      setMemory([...memory, content])
    } else {
      handleEqual();
      // setDisplayValue(displayValue + content);
      // setMemory([...memory, content])
    }
  }

  const handleEqual = () => {
    
    if (memory.length === 3) {

      operations[memory[1]]();
    }
  }
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
