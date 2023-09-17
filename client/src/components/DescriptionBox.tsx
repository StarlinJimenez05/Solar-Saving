import "../App.css"

function DescriptionBox({header, body}){
    return (
        <div className="descr-container">
            <h1 className="txt-center">{header}</h1>
            <p>{body}</p>
        </div>
        // </div>
        // <div className="outer-desc-container">
        
    )
}

export default DescriptionBox