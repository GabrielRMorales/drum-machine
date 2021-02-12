import {React, Component} from "react";
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

class DrumApp extends Component {
    constructor(props){
        super(props);
        this.state={
           currentSound: "",
           sources: {
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
        }
        this.handleClick=this.handleClick.bind(this);
    }
    componentDidMount(){
        window.addEventListener("keydown",(e)=>{
        let keyHit=(e.key).toLowerCase()+"_file";        
        if (this.state.sources[keyHit]!==undefined){
            let audioEl = document.getElementById(e.key.toUpperCase());
            audioEl.play();
            this.setState({
                currentSound: `${e.key.toUpperCase()} note playing!`
            });
        }               

        });
    }
    
    handleClick(e){
            // this.play();
            let audio= e.target.childNodes[0];
            //console.log(audio[0]);
            audio.play();
            this.setState({
                currentSound: `${audio.id} note playing!`
            });
    }
    
    render(){
        const drumPads=["Q", "W", "E", "A", "S", "D", "Z", "X", "C"].map((key,index)=>{
            let source = `${key.toLowerCase()}_file`;
          
            return <DrumPad text={key} key={index+" "+key}
                source={this.state.sources[source]} onClick={this.handleClick} />
        });
        return <main id="drum-machine">
            {drumPads}
            <div id="display">{this.state.currentSound}</div>
        </main>
    }
}
export default DrumApp;