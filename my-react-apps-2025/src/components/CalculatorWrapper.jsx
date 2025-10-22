// CalculatorWrapper.jsx
import "../css/calculator-wrapper.css";
import MrTerrific from "../assets/mr-terrific.jpeg";
import { useState } from "react";
import CalcButton from "./CalcButton.jsx";

function CalculatorWrapper() {
  const [output, setOutput] = useState("");
  const sendToOutput = (value) => {
    setOutput(output + value);
  };
  const buttons = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "CLEAR",
    "0",
    "ENTER",
    "+",
    "-",
    "*",
    "/",
    "%",
    ".",
  ];
  return (
    <div className="calculatorWrapper">
      <div className="buttonWrapper">
        {buttons.map((value, index) => (
          <CalcButton
            key={index}
            textValue={value}
            onClick={sendToOutput}
            index={index}
          ></CalcButton>
        ))}
      </div>
      <div className="displayWrapper">
        <div className="primaryDisplay">{output}</div>
        <img className="calcAvatar" src={MrTerrific}></img>
      </div>
    </div>
  );
}

export default CalculatorWrapper;
