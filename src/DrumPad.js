import React from "react";

const DrumPad = ({text, source, onClick})=>{    
    return (
        <button className="drum-pad" id={text+"-sound"} onClick={onClick}>
        <audio className="clip" id={text} src={source} ></audio>{text}
        </button>       
    )
}

export default DrumPad;