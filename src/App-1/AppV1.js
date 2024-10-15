// Making button reusable
// Children prop

import { useState } from "react";

const arr = [];

export default function App() {}

function DisplayCard() {
  const [step, setStep] = useState(0);

  function handlePrevious() {
    step === 0 ? setStep(arr.length - 1) : setStep((step) => step - 1);
  }

  function handleNext() {
    step === arr.length - 1 ? setStep(0) : setStep((step) => step + 1);
  }
  return (
    <div className="disp-card">
      <Button onClick={handlePrevious}> &lt; </Button>
      <Card param={arr[step]} />
      <Button onClick={handleNext}> &gt; </Button>
    </div>
  );
}

function Card({ param }) {
  return (
    <div className="card">
      <img src="" alt="" />
      <div>
        <h3> Person name</h3>
        <p>About the person </p>
      </div>
    </div>
  );
}

function Button({ handleClick, children }) {
  return (
    <button onClick={handleClick} className="btn">
      {children}
    </button>
  );
}
