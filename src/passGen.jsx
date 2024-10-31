
import { useState, useEffect } from "react";
import "./PassGen.css";

export default function PasswordGen() {
  const [length, setLength] = useState(10);
  const [incNum, setIncNum] = useState(false);
  const [incChar, setIncChar] = useState(false);
  const [Password, setPassword] = useState("");

  useEffect(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (incNum) str += "0123456789";
    if (incChar) str += "`~!@#$%^&*()-_=+[{]}|;:'";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, incNum, incChar]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(Password).then(() => {
      alert("Copied to Clipboard");
    });
  };

  return (
    <div className="full-scrn">
      <div className="box">
        <h1>Password Generator</h1>
        <input className="input" type="text" value={Password} placeholder="Password" readOnly />
        <button onClick={copyToClipboard}>Copy</button>
        <div className="in-box">
          <div>
            <input
              className="ranger"
              type="range"
              min={6}
              max={16}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />{" "}
            <label>Length: {length}</label>
          </div>
          <div className="numchkbx">
            <input
              type="checkbox"
              defaultChecked={setIncNum}
              id="numberInput"
              onChange={() => {
                setIncNum((prev) => !prev);
              }}
            />{" "}
            <label>Numbers</label>
          </div>
          <div className="charchkbx">
            <input
              type="checkbox"
              defaultChecked={setIncChar}
              id="characterInput"
              onChange={() => {
                setIncChar((prev) => !prev);
              }}
            />{" "}
            <label>Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}
