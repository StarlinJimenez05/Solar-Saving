import NavButton from "./NavButton";
import solar from "../assets/solarsavings2.png"
import "../App.css"

function Header(){
    return (
        <div className="header">
        <img src={solar} id="logo" />
        {/* <h2>Save your planet and your wallet</h2> */}
          <div className="btn-container">
            <NavButton text={"Register"} />
            <NavButton text={"Dashboard"} />
          </div>
      </div>
    )
}

export default Header