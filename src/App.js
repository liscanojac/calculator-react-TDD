import React, { useReducer } from 'react';
import './App.css';
import Button from './Components/Button';
import reducer from './reducer';
import { btnContent } from './__test__/btnContent';
import { ACTIONS } from './actions';

function App() {
  // here is where we set the intial state, inside the useReducer
  const [state, dispatch] = useReducer(reducer, {
    firstOperand: null,
    // you have to include other pieces of your initial state here even if they are null at the beggining
    secondOperand: null,
    operation: null,
    result: "0"
  });

  
  return (
    <div className="App">
      <div 
        className="display memory" 
        data-testid="memory-display">{state.firstOperand}{state.operation}{state.secondOperand}</div>
      <div 
        className={`display 
        ${state.result.length > 7 && state.result.length < 11 && "medium"} 
        ${state.result.length > 10 && state.result.length < 13 && "large"}
        ${state.result.length > 12 && "x-large"}`} 
        data-testid="display">{state.result !== "∞" ?parseFloat(state.result).toLocaleString(undefined, {maximumFractionDigits: 2}) : state.result}</div>
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
            let actions = [ACTIONS.CLEAR, ACTIONS.CHANGE_SIGN, ACTIONS.PERCENTAGE] 
            return (
              <Button dispatch={dispatch} action={actions[i]} key={i} content={btn} type="function" />
            )
          }

          if (i === btnContent.length - 1) {
            // equal button
            return (
              <Button dispatch={dispatch} action={ACTIONS.EQUAL} key={i} content={btn} type="function equal" />
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
