import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import { qrcodeGenerator } from "react-easy-qrcode-generator";

function App() {
  const [value, setValue] = useState("");
  return (
    <div className="App"> 
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button
        onClick={() =>
          qrcodeGenerator({
            value: value,
            size: "180x180",
            title: "Title",
            qrAlt: "QR Code Image",
            showQrId: "qr-code",
          })
        }
      >
        Generator QR
      </button>
      <div id="qr-code" />
   
    </div>
  );
}

export default App;
