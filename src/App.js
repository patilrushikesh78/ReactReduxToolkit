import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./reducers/counterSlice";
import { Button } from "react-bootstrap";
function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  console.log("App", "App");
  return (
    <div class="container">
      <Button
        variant="primary"
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        -
      </Button>
      <span>&nbsp;&nbsp;&nbsp;{counter.value}&nbsp;&nbsp;&nbsp;</span>
      <Button
        variant="primary"
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        +
      </Button>
    </div>
  );
}

export default App;
