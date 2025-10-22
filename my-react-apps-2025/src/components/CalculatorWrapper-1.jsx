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
  return (
    <div className="calculatorWrapper">
      <div className="buttonWrapper">
        <CalcButton textValue="1" sendToOutput={sendToOutput}></CalcButton>
        <CalcButton textValue="2"></CalcButton>
        <CalcButton textValue="3"></CalcButton>
        <CalcButton textValue="4"></CalcButton>
        <CalcButton textValue="5"></CalcButton>
        <CalcButton textValue="6"></CalcButton>
        <CalcButton textValue="7"></CalcButton>
        <CalcButton textValue="8"></CalcButton>
        <CalcButton textValue="9"></CalcButton>
        <CalcButton textValue="CLEAR"></CalcButton>
        <CalcButton textValue="0"></CalcButton>
        <CalcButton textValue="ENTER"></CalcButton>
        <CalcButton textValue="+"></CalcButton>
        <CalcButton textValue="-"></CalcButton>
        <CalcButton textValue="*"></CalcButton>
        <CalcButton textValue="/"></CalcButton>
        <CalcButton textValue="%"></CalcButton>
        <CalcButton textValue="."></CalcButton>
      </div>
      <div className="displayWrapper">
        <div className="primaryDisplay">{output}</div>
        <img className="calcAvatar" src={MrTerrific}></img>
      </div>
    </div>
  );
}

export default CalculatorWrapper;
