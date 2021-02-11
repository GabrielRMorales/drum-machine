import React from "react";
import wav_file from "./Q.wav";
const DrumPad = ({id, text})=>{    
    const musicPath= "../public/music/Q.wav";
    //"../public/music/"+id+".wav";

    return (
        <button className="drum-pad" id={id+"-sound"} onClick={(e)=>{
            // this.play();
            let audio= document.getElementById(id);
            console.log(audio[0]);
            audio.play().then(function(response){
                console.log(response);
            }).catch(err=>console.log(err));
        }}>
        <audio className="clip" id={id} >
            <source className="music" src={wav_file} ></source></audio>{text}
        </button>       
    )
}

export default DrumPad;