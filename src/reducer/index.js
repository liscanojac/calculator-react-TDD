import { ACTIONS } from "../actions";
import evaluate from "./evaluate";

export default function reducer(state, { type, payload }) {

  switch(type) {

    case ACTIONS.TYPE_DIGIT:
      
      if (state.currentOperand === "0" && payload !== ".") {
        return {
          ...state,
          currentOperand: payload
        }
      }
      if (state.currentOperand === "0" && payload === "0") {
        return state;
      }
      if (state.currentOperand.length === 7) {
        return state;
      }
      if (state.currentOperand.includes('.') && payload === ".") {
        return state;
      }
      return {
        ...state,
        currentOperand: `${state.currentOperand}${payload}`
      }

    case ACTIONS.CHOOSE_OPERATION:

      if (state.currentOperand === "0" && state.previousOperand === null) {
        return state;
      }
      if (state.previousOperand === null) {
        return {
          ...state,
          operation: payload,
          previousOperand: state.currentOperand,
          currentOperand: "0"
        }
      }
      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload,
        currentOperand: "0"
      };

    case ACTIONS.CLEAR:
      return {
        currentOperand: "0",
        previousOperand: null,
        operation: null
      }
    default:
      return state;
  }
}