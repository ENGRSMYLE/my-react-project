import { useState } from "react";
import "./App.css";

export default function App() {
  const [step, setStep] = useState(1);
  const [isactive,setIsactive] = useState(true);

  function increaseStep() {
    if (step !== 3) setStep(step + 1);
  }

  function decreaseStep() {
    if (step !== 1) setStep(step - 1);
  }

  function closeM (){
    setIsactive(!isactive)
  }

  return (
    <>
    <button onClick={closeM} className="close">&times; </button>
    {
        isactive && (
    <div className="container">
      <div className="num-sec">
        <span className={step >= 1 ? "active" : ""}>1</span>
        <span className={step >= 2 ? "active" : ""}>2</span>
        <span className={step >= 3 ? "active" : ""}>3</span>
      </div>
      <div className="message">
        Step {step}: {messages[step - 1]}
      </div>
      <div className="btn-sec">
        <button onClick={decreaseStep}>Prev</button>
        <button onClick={increaseStep}>Next</button>
      </div>
    </div>
    )}
    
    </>
  );
}

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
