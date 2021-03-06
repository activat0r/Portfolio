import React from "react"
import Timeline from "@material-ui/lab/Timeline"
import TimelineItem from "@material-ui/lab/TimelineItem"
import TimelineConnector from "@material-ui/lab/TimelineConnector"
import TimelineDot from "@material-ui/lab/TimelineDot"
import TimelineSeparator from "@material-ui/lab/TimelineSeparator"
import TimelineContent from "@material-ui/lab/TimelineContent"
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from "@material-ui/core"
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent"
import Container from "@material-ui/core/Container"

const useStyles = makeStyles((theme) => ({
 paper :{
   
 },
 paperCurrent :{

  border: `2px solid ${theme.palette.primary.dark}`
 },
  secondaryTail: {
    height : 100
  },
  div:{
    padding: "6px 6px",
  },
  root:{
    paddingLeft:0,
    paddingRight:0,
  }
}));


function Experience(){
  const classes = useStyles();

return (
    <Container className={classes.root}>
    <Timeline align="alternate" className={classes.root}>
    
    <TimelineItem>
      <TimelineOppositeContent>
        <Typography variant="body2" color = "textPrimary">(2018 - Present)</Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color="primary"/>
        <TimelineConnector className = {classes.secondaryTail}/>
      </TimelineSeparator>
      <TimelineContent>
      <Paper elevation = {2} className = {classes.paperCurrent}>
        <div className={classes.div}>
        <Typography variant="body1">Associate Consultant</Typography>
        <Typography variant="body2" color= "textSecondary" >Atos|Syntel</Typography>
        </div>
      </Paper>
      </TimelineContent>
    </TimelineItem>

    <TimelineItem>
    <TimelineOppositeContent>
        <Typography variant="body2" color = "textSecondary">(2018)</Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector className = {classes.secondaryTail}/>
      </TimelineSeparator>
      <TimelineContent>
      <Paper elevation = {2} className = {classes.paper}>
      <div className={classes.div}>

        <Typography variant="body1" >B.E. </Typography>
        <Typography variant="body2" color= "textSecondary" >Mumbai University </Typography>
        </div>
        </Paper>
        </TimelineContent>
    </TimelineItem>

    <TimelineItem>
    <TimelineOppositeContent>
        <Typography variant="body2" color = "textSecondary">(2014)</Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector className = {classes.secondaryTail}/>
      </TimelineSeparator>
      <TimelineContent>
        <Paper elevation = {2} className = {classes.paper}>
        <div className={classes.div}>

        <Typography variant="body1" >HSC </Typography>
        <Typography variant="body2" color= "textSecondary" >Maharashtra State Board</Typography>    
        </div>
        </Paper>

        </TimelineContent>
    </TimelineItem>

    <TimelineItem>
    <TimelineOppositeContent>
        <Typography variant="body2" color = "textSecondary">(2012)</Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot />
      </TimelineSeparator>
      <TimelineContent>
      <Paper elevation = {2} className = {classes.paper}>
      <div className={classes.div}>

      <Typography variant="body1" >SSC </Typography>
        <Typography variant="body2" color= "textSecondary" >Maharashtra State Board</Typography>        </div></Paper>
        </TimelineContent>
    </TimelineItem>

  </Timeline>
  </Container>

);
}
export default Experience;