import "../App.css"
import DescriptionBox from "./DescriptionBox"

function Descriptions(){

    const missionHeader = "Our Mission";
    const missionBody = "It's our mission to trailblaze a healthier, more sustainable future for our planet by promoting the widespread adoption of solar panels, green energy, and sustainable practices "

    const explainHeader = "What's this Button?";
    const explainBody = "Input any address, and we'll tell you if your home/building of choice is eligible for solar panel installation. If it is, we'll tell you the installation costs, estimated electric bill savings, and expected carbon offset.\nAddress Format: 12301 SW 40 CT";
    

    return (
        <div className="flex-evenly">
            <DescriptionBox header={missionHeader} body={missionBody} />
            <DescriptionBox header={explainHeader} body={explainBody} />
        </div>
    )
}

export default Descriptions;