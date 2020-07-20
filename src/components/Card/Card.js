import React from "react";
import Advice from "../Advice/Advice";
import Button from "../Button/Button";
import "./Card.css";

export default function Card() {
  return (
    <div className="card">
      <Advice />
      <Button />
    </div>
  );
}
