import { Typography } from '@material-ui/core'
import react from 'react'
import {useState, useEffect} from 'react'
import '../../CSS/NameTransition.css'
import '../../CSS/About.css'
import { makeStyles } from '@material-ui/core/styles';

import photo from '../../AdityaSawant.jpg'


var word ="";
var charCounter = 0;
const eraseCharDelay= 100;
const typeCharDelay = 300;
const newKeywordDelay = 2000;
const keywords = ["Aditya Sawant","a Developer", "an Engineer"];

const useStyles = makeStyles({
    typo_root: {
      margin: "auto"
    },
  });

function About(){

    const [text, setText] = useState("");   
    const [deleting,setDeleting] = useState(false);
    const [keywordCounter, setKeywordCounter] = useState(0);
    const styleClass = useStyles();

    useEffect(()=>{
        const timer = setTimeout(()=>{
        if(charCounter < keywords[`${keywordCounter}`].length && !deleting){
            word = (word + keywords[`${keywordCounter}`].charAt(charCounter));
            setText(word)
            charCounter++;
        }
        
    },typeCharDelay)
    return () => window.clearTimeout(timer);

    },)

    useEffect(()=>{
        const timer2 = setTimeout(()=>{
       if(charCounter>0 && deleting){
            word = (keywords[(`${keywordCounter}`)].substr(0,charCounter-1));
            setText(word)
            charCounter--;
            if(charCounter == 0){
                setDeleting(false)
                if(`${keywordCounter}` < keywords.length-1)
                    setKeywordCounter(prevCount => prevCount + 1)
                else
                    setKeywordCounter(0) 
            }
        }
    },eraseCharDelay)
    return () => window.clearTimeout(timer2);
    },)

    useEffect(()=>{
        const timer3 = setTimeout(()=>{
            if(charCounter == (keywords[`${keywordCounter}`]).length){
                setDeleting(true);
            }
           
        },newKeywordDelay)
        return ()=> window.clearTimeout(timer3);
    },)

    return(
   
    <div className="about-wrapper container">
      
    <div className="avatar-container">
        <img className="avatar-img" src={photo} alt="Aditya Sawant"/>
    </div>
    <div className="intro-container">
        <h1 className="intro-text">
            Hi!
        </h1> 
        <br/>
        <h4 id="about_name" className="intro-typer" >
            I am&nbsp;{text}</h4>
      </div> 
      <div>
        <h6>I am a developer who started coding at an age of 17. My interest in coding was generated from playing computer games and creating simple mods for the games. Following my interest, i enrolled in engineering to learn more about the computers.
        I like to design simple yet innovative solutions to tackle the problems faced in daily life to make it simpler.
        In my free time, I am usually reading tech blogs or novels.</h6>

      </div>
    </div>

    );
}
export default About;