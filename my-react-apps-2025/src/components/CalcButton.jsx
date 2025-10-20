// CalcButton.jsx
import "../css/calc-button.css";

function CalcButton({ textValue, sendToOutput }) {
    return <div className="calcButton" onClick={()=>sendToOutput(textValue)}>{textValue}</div>;
}

export default CalcButton;
