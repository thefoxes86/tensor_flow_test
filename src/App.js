import "./App.css";
import * as tf from "@tensorflow/tfjs";
import CarsList from "./components/CarsList";
import { useEffect } from "react";

function App() {
  const a = tf.tensor([
    [1, 2, 3],
    [3, 4, 4],
    [5, 6, 4],
    [5, 6, 4],
  ]);

  const shape = [3, 2];
  const b = tf.tensor([1, 2, 3, 4, 5, 6], shape);

  const y = b.add([10, 10]);
  const exp = b.square();

  useEffect(() => {
    console.log("shape: " + b.shape);
    console.log("type: " + b.dtype);
    a.print();
    console.log(tf.memory());
    a.dispose();
    console.log(tf.memory());
    b.print();
    y.print();
    exp.print();
    exp.dispose();
    console.log(tf.memory());

    return () => {};
  });

  return (
    <div className="App">
      <header className="App-header">
        <p>Tensor Flow Js</p>
        <CarsList />
      </header>
    </div>
  );
}

export default App;
