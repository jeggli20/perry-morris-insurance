import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return {
      value: action.value,
      isTouched: state.isTouched,
    };
  }

  if (action.type === "BLUR") {
    return {
      value: state.value,
      isTouched: true,
    };
  }

  if (action.type === "RESET") {
    return {
      value: "",
      isTouched: false,
    };
  }

  return initialInputState;
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({
      type: "INPUT",
      value: event.target.value,
    });

    const curInput = event.target;
    const curInputLength = event.target.value.length;
    const form = curInput.closest("form");
    const inputs = form.querySelectorAll("input");

    if (
      curInput.hasAttribute("maxLength") &&
      curInputLength === +curInput.getAttribute("maxLength")
    ) {
      let cur = 0;
      let next;

      for (const input of inputs) {
        if (input !== curInput) {
          cur++;
          next = cur + 1;
        } else {
          break;
        }
      }

      inputs[next].focus();
    }
  };

  const valueBlurHandler = () => {
    dispatch({
      type: "BLUR",
    });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    valueBlurHandler,
    reset,
  };
};

export default useInput;
