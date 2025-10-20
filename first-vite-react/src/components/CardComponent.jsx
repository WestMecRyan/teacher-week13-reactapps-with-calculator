// src/components/CardComponent.jsx
import "./CardComponent.css";
import placeHolderImg from "../assets/tree-over-water.jpeg";

function CardComponent({ imageSrc = placeHolderImg, title }) {
  return (
    <div className="card-container">
      <img src={imageSrc} alt={title} />
      <div className="button-group">
        <button>Action1</button>
        <button>Action2</button>
      </div>
    </div>
  );
}

export default CardComponent;
