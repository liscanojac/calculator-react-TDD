import { ACTIONS } from "../actions";
import evaluate from "./evaluate";

export default function reducer(state, { type, payload }) {

  switch(type) {

    case ACTIONS.TYPE_DIGIT:

      if (state.result === "∞") {
        return {
          ...state,
          firstOperand: payload,
          result: payload,
          operation: null,
          secondOperand: null
        };
      }
      if (state.operation !== null) {

        if((state.secondOperand === null || state.secondOperand === "0") && payload === ".") {
          state = {
            ...state,
            secondOperand: `0${payload}`
          }
        }else if (state.secondOperand === null || state.secondOperand === "0") {
            state = {
            ...state,
            secondOperand: payload,
          }
        } else if (!state.secondOperand.includes(".") && payload === ".") {

          state = {
            ...state,
            secondOperand: `${state.secondOperand}${payload}`
          };

        } else if (payload !== "." && state.secondOperand.length < 7) {

          if (state.secondOperand.includes(".") && state.secondOperand.split(".")[1].length === 2) {
            return state;
          }

          state = {
            ...state,
            secondOperand: `${state.secondOperand}${payload}`
          }
        }
        
        return {
          ...state,
          result: evaluate(state)
        }
      }
      
      if (state.result === "0" && payload === ".") {
        return {
          ...state,
          firstOperand: `0${payload}`,
          result: `${state.result}${payload}`
        }
      }
      if (state.result === "0" && payload === "0") {
        return state;
      }
      if (state.firstOperand === null && payload !== "0") {
        return {
          ...state,
          firstOperand: payload,
          result: payload
        }
      }
      if (state.firstOperand.length === 7) {
        return state;
      }
      if (state.firstOperand.includes('.') && payload === ".") {
        return state;
      }
      if (state.firstOperand.includes('.') && state.firstOperand.split('.')[1].length === 2) {
        return state;
      }
      return {
        ...state,
        firstOperand: `${state.firstOperand}${payload}`,
        result: `${state.result}${payload}`
      }

    case ACTIONS.CHOOSE_OPERATION:

      if (state.result === "∞") {
        return {
          ...state,
          firstOperand: "0",
          secondOperand: "",
          operation: payload,
        }
      }
      if (payload === "−") {
        payload = "-";
      }
      
      if (state.firstOperand === null && payload === '-') {
        return {
          ...state,
          firstOperand: "0",
          operation: payload
        };
      }
      if (state.result === "0" && state.firstOperand === null) {
        return state;
      }
      if (state.secondOperand === null) {
        return {
          ...state,
          operation: payload
        }
      }
      state = {
        ...state,
        firstOperand: evaluate(state),
        secondOperand: null,
        operation: null,
        result: evaluate(state)
      }      
      return {
        ...state,
        operation: payload
      }

    case ACTIONS.EQUAL:
      if (state.firstOperand !== null && state.operation !== null && state.secondOperand !== null) {
        return {
          ...state,
          firstOperand: evaluate(state),
          secondOperand: null,
          operation: null,
          result: evaluate(state)
        }
      }
      return state;
    
    case ACTIONS.CHANGE_SIGN:

      if (state.secondOperand === null && state.firstOperand !== "0" && state.firstOperand !== null) {

        if (state.firstOperand.includes('-')) {
          return {
            ...state,
            firstOperand: (state.firstOperand * -1).toString(),
            result: (state.firstOperand * -1).toString()
          }
        }
        return {
          ...state,
          firstOperand: `-${state.firstOperand}`,
          result: `-${state.result}`
        }
      }
      if (state.secondOperand !== null && state.secondOperand !== 0) {

        if (state.operation === "+") {
          state = {
            ...state,
            operation: "-"
          };
        } else if (state.operation === "-") {
          state = {
            ...state,
            operation: "+"
          }
        } else {

          if (state.secondOperand.includes('-')) {
            state = {
              ...state,
              secondOperand: (state.secondOperand * -1).toString()
            }
          } else {
            state = {
              ...state,
              secondOperand: `-${state.secondOperand}`
            };
          }
          
        }

        return {
          ...state,
          result: evaluate(state)
        }
      }
      return state;

    case ACTIONS.PERCENTAGE:
      
      if (state.secondOperand !== null && state.operation !== null) {
        state = {
          ...state,
          secondOperand: (state.firstOperand * (state.secondOperand / 100)).toFixed(2).toString()
        }
        return {
          ...state,
          result: evaluate(state)
        }
      }
      if(state.firstOperand !== null) {
        return {
          ...state,
          firstOperand: (state.firstOperand / 100).toString(),
          result: (state.result / 100).toString()
        }
      }
      return state;
    case ACTIONS.CLEAR:
      return {
        result: "0",
        firstOperand: null,
        secondOperand: null,
        operation: null
      }
    default:
      return state;
  }
}