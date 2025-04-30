import React, { useState } from "react";

export default function Zhakshuluk() {
  const [masseg, setMasseg] = useState("");
  const [knopka, setKnopka] = useState([]);
  const hendchenj = (event) => {
    setMasseg(event.target.value);
    const objeck = {
      title: masseg,
      id: Date.new(),
    };
  };
  const hendButton = () => {};
  return (
    <div>
      <h1>{masseg}</h1>
      <input type="text" placeholder="бир нерсе жаз" onChange={hendchenj} />
      <button>add onClick{hendButton}</button>
    </div>
  );
}
