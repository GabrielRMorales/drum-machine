import React from "react";

const DrumPad = ({text, source, onClick})=>{    
    return (
        <div className="drum-pad" id={text+"-sound"} onClick={onClick}>
        <audio className="clip" id={text} src={source} ></audio>{text}
        </div>       
    )
}

export default DrumPad;