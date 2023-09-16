import { useState } from "react";
import React from "react";
import "../App.css"

function AddressInput() {
  return (
    <div>
      <h1>Save Your Planet and Your Wallet</h1>
      <input type="text" placeholder="Insert Address" />
      <button>Submit</button>
    </div>
  );
}

export default AddressInput;
