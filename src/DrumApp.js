import {React, Component} from "react";
import DrumPad from "./DrumPad";
class DrumApp extends Component {

    render(){
        const drumPads=["Q", "W", "E", "A", "S", "D", "Z", "X", "C"].map((key,index)=>{
            return <DrumPad id={key} text={key} key={index+" "+key} />
        });
        return <main id="drum-machine">
            <div id="display"></div>
            {drumPads}
        </main>
    }
}
export default DrumApp;