import "../App.css"
import HeroItem from "./HeroItem"

function Hero(props) {
  return (
    <div className="hero-container">
        {/* <HeroItem />
        <HeroItem /> */}
        <h1 id="hero-text">Save your <span id="planet-span">Planet</span> and your <span id="wallet-span">Wallet</span></h1>
    </div>
  )
}

export default Hero

