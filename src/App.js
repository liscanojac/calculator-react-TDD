import React, { useState, useEffect, useReducer } from 'react';
import './App.css';
import Button from './Components/Button';
import reducer from './reducer';
import { btnContent } from './__test__/btnContent';
import { ACTIONS } from './actions';

function App() {
  // here is where we set the intial state, inside the useReducer
  const [state, dispatch] = useReducer(reducer, {
    currentOperand: "0",
    // you have to include other pieces of your inicial state here even if they are null at the beggining
    previousOperand: null,
    operation: null
  });

  
  return (
    <div className="App">
      <div 
        className="display memory" 
        data-testid="memory-display">{state.previousOperand}{state.operation}</div>
      <div 
        className="display" 
        data-testid="display">{state.currentOperand}</div>
      <div className='buttons'>
        {btnContent.map((btn, i) => {

          if ((i + 1) % 4 === 0) {
            // orange buttons
            return (
              <Button dispatch={dispatch} action={ACTIONS.CHOOSE_OPERATION} key={i} content={btn} type="operator" /> 
            )
          }
          if (i < 3) {
            // gray buttons
            let actions = [ACTIONS.CLEAR] 
            return (
              <Button dispatch={dispatch} action={actions[i]} key={i} content={btn} type="function" />
            )
          }

          if (i === btnContent.length - 1) {
            // equal button
            return (
              <Button dispatch={dispatch}  key={i} content={btn} type="function" />
            )
          }

          if (btn === "0") {
            // zero button
            return (
              <Button dispatch={dispatch} action={ACTIONS.TYPE_DIGIT} key={i} content={btn} type="zero" />
            )
          }
          return (
            // numbers
            <Button dispatch={dispatch} action={ACTIONS.TYPE_DIGIT} key={i} content={btn} />
          )
        })}
      </div>
    </div>
  );
}

export default App;
