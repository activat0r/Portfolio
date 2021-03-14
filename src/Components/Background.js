import { useTheme } from "@material-ui/core";
import { grey, purple, red } from "@material-ui/core/colors";
import react,{ Component, useEffect} from "react";
import ReactDOM from 'react-dom';
import "../CSS/Background.css"
import {useState} from 'react'
import WindowDimens from "../Hooks/WindowDimens"
function Background(){

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
            <div className="background"  style={{ height: "100%", width: "100%"}}>
            </div>
            
        </>
    );
}
export default Background;