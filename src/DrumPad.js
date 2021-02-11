import React from "react";

const DrumPad = ({text, source})=>{    
   
    return (
        <button className="drum-pad" id={text+"-sound"} onClick={(e)=>{
            // this.play();
            let audio= e.target.childNodes[0];
            //console.log(audio[0]);
            audio.play()
        }}>
        <audio className="clip" id={text} src={source}></audio>{text}
        </button>       
    )
}

export default DrumPad;