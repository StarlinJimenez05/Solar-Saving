import { useState } from "react";
import "./App.css";
import AddressInput from "./components/AddressInput.js";
import solar from "./assets/solarsavings2.png"

function App() {



  return (
    <>
      <div className="header">
          <img src={solar} id="logo" />
        </div>
      <div>
          <>
          </>
          <>
            <div className="header">
              <h1>SolarSavings</h1>
            </div>
          </>
      </div>
      <AddressInput />
    </>
  );
}

export default App;
