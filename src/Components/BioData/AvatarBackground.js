import { useTheme } from "@material-ui/core";
import { grey, purple, red } from "@material-ui/core/colors";
import react,{ Component, useEffect} from "react";
import ReactDOM from 'react-dom';
import "../../CSS/AvatarBackground.css"
import {useState} from 'react'
import WindowDimens from "../../Hooks/WindowDimens"
function AvatarBackground(){

    const [winOpcaity, setwinOpcaity] = useState(1);

    const { height, width } = WindowDimens();
    
    useEffect(()=> {
        if (width>700){
            setwinOpcaity(0.5)
        }
        else
        {
            setwinOpcaity(0)
        }
    }) 
   

    

    return(
        <>
            <span className="avatar"  style={{top:"5%",left: "3%", height: "70%", width: "50%", animationDuration: "30s"}}>
            </span>
            
            <span className="avatar2"  style={{opacity: `${winOpcaity}`, bottom:"10%", right:"0%", height: "40%", width: "30%", animationDuration: "40s"}}>
            </span>
        </>
    );
}
export default AvatarBackground;