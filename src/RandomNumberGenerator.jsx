import React, { useState } from "react";

const RandomNumberGenerator = () => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const startNum = parseInt(start, 10);
    const endNum = parseInt(end, 10);

    if (!isNaN(startNum) && !isNaN(endNum) && startNum < endNum) {
      const number = Math.floor(Math.random() * (endNum - startNum + 1)) + startNum;
      setRandomNumber(number);
    } else {
      alert("Please enter valid starting and ending numbers (start < end).");
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center", fontFamily: "Arial" }}>
      <h1>Random Number Generator</h1>
      <div style={{ marginBottom: "15px" }}>
        <input
          type="number"
          placeholder="Starting number"
          value={start}
          onChange={(e) => setStart(e.target.value)}
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <input
          type="number"
          placeholder="Ending number"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
          style={{ padding: "5px" }}
        />
      </div>
      <button
        onClick={generateRandomNumber}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Generate Random Number
      </button>
      <div style={{ marginTop: "20px", fontSize: "1.5em" }}>
        {randomNumber !== null && (
          <p>
            🎉 Random Number: <strong>{randomNumber}</strong>
          </p>
        )}
      </div>
    </div>
  );
};

export default RandomNumberGenerator;
