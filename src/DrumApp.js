import {React, useEffect, Component} from "react";
import DrumPad from "./DrumPad";
import q_file from "./music/Q.wav";
import w_file from "./music/W.wav";
import e_file from "./music/E.wav";
import a_file from "./music/A.wav";
import s_file from "./music/S.wav";
import d_file from "./music/D.wav";
import z_file from "./music/Z.wav";
import x_file from "./music/X.wav";
import c_file from "./music/C.wav";
const sources ={
    q_file,
    w_file,
    e_file,
    a_file,
    s_file,
    d_file,
    z_file,
    x_file,
    c_file,
}

class DrumApp extends Component {
    constructor(props){
        super(props);

    }
    componentDidMount(){
        window.addEventListener("keydown",(e)=>{
            // let key=String.fromCharCode(e.key);
            
        let keyHit=(e.key).toLowerCase()+"_file";
        console.log(keyHit);
        if (typeof keyHit!=undefined){
            let audio = new Audio(sources[keyHit]);
        
            audio.play();
        }               

        });
    }
    
    render(){
        const drumPads=["Q", "W", "E", "A", "S", "D", "Z", "X", "C"].map((key,index)=>{
            let source = `${key.toLowerCase()}_file`;
            return <DrumPad text={key} key={index+" "+key} source={sources[source]}/>
        });
        return <main id="drum-machine">
            <div id="display"></div>
            {drumPads}
        </main>
    }
}
export default DrumApp;