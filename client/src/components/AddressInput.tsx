import "../App.css"
import axios from "axios";
import { useState } from "react";

function AddressInput() {
  const [address, setAddress] = useState({address: ""})

  const handleChange = (e) => {
    const addressValue = e.target.value
    setAddress({address: addressValue})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const addressData = {address: address};
    axios
    .post("http://localhost:3001/address", addressData).then((result) => {
      console.log(result.status, result.data);
      
    })
    .catch((err) => {
      console.log(err);
    })
  }
  return (
    <div className="input-container">
      <h1>Save Your Planet and Your Wallet</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange}  type="text" name="address" placeholder="Insert Address" className="address-input" />
        <button type="submit" className="submit-btn" >Submit</button>
      </form>
    </div>
  );
}



export default AddressInput;
