import React, { useState } from "react";
export default function HomePage() {
  const [current, setCurrent] = useState("");

  const onChangeInput = (value) => {
    setCurrent(value.replace(/\s/g, ""));
  };

  return (
    <div className="home-page">
      <div className="header">
        <br></br>
        <input
          onChange={(event) => onChangeInput(event.target.value)}
          type="text"
          placeholder="Dán link vào đây aba"
        />
      </div>
      <div>
        <span>{current}</span>
      </div>
    </div>
  );
}
