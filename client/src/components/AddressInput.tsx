import { useState } from "react";
import React from "react";

function AddressInput() {
  return (
    <div>
      <h1>Input Address</h1>
      <input type="text" placeholder="Insert Address" />
      <button>Submit</button>
    </div>
  );
}

export default AddressInput;
