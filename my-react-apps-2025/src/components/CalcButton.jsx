// CalcButton.jsx
import "../css/calc-button.css";

function CalcButton({ textValue, onClick }) {
  return (
    <div className="calcButton" onClick={() => onClick(textValue)}>
      {textValue}
    </div>
  );
}

export default CalcButton;
