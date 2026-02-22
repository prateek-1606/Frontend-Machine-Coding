import { useMemo, useState } from "react";
import "./App.css";
import useCustomMemo from "./hooks/use-custom-memo";

function App() {
  // Custom Use Memo Implementation Example
  // const [count1, setCount1] = useState(0);
  // const [count2, setCount2] = useState(100);
  // const squaredCounter = () => {
  //   console.log("Expensive Calc..");
  //   return count1 * count1;
  // };
  // const memoisedSquaredValue = useCustomMemo(squaredCounter, [count1]);
  // return (
  //   <div className="App">
  //     <h2>Counter 1: {count1}</h2>
  //     <h2>Squared Counter: {memoisedSquaredValue}</h2>
  //     <button onClick={() => setCount1(count1 + 1)}>Increment</button>
  //     <h2>Counter 2: {count2} </h2>
  //     <button onClick={() => setCount2(count2 - 1)}>Descrement</button>
  //   </div>
  // );
}

export default App;
