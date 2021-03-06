import React, {Component} from "react"
import Grid from "@material-ui/core/Grid"
import { Card, SvgIcon, Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem" 
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import Divider from "@material-ui/core/Divider"
import PhoneIphoneRoundedIcon from '@material-ui/icons/PhoneIphoneRounded';
import PhoneAndroidRoundedIcon from '@material-ui/icons/PhoneAndroidRounded';
import {ReactComponent as ServerIcon} from "./../icons/server.svg"

const useStyles = makeStyles((theme) => ({
    paper :{
      padding: "6px 16px",
    },
    list:{
        listStyleType: "none",
    },
    listItem:{
        display: "inline-block",
        padding:"3px 3px",
        alignItems:"center"
    },
    image:{
        width: 18,
        height: 18,
        margin:"0px 2px 0px 0px",

    },
    divider:{
        width:"75%",
        height: 2
    }
}));

function Roles(){

    const classes = useStyles();

    return(
        <React.Fragment>
                <Card elevation={2} className={classes.paper}>
                <Typography variant="h6">Atos|Syntel</Typography>
                <ul className={classes.list}>
                <li className={classes.listItem}><PhoneAndroidRoundedIcon/><Typography variant="body1" display="inline">Android Developer</Typography></li>
                <Divider className={classes.divider}></Divider>

                <li className={classes.listItem}><PhoneIphoneRoundedIcon/><Typography variant="body1" display="inline">iOS Developer</Typography></li>
                <Divider className={classes.divider}></Divider>

                <li className={classes.listItem}><ServerIcon className={classes.image}/><Typography variant="body1" display="inline">Backend Developer</Typography></li>
                <Divider className={classes.divider}></Divider>

                </ul>
                </Card>
                </React.Fragment>

    );
}
export default Roles;