import React, {Component ,Fragment} from "react";
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader"
import Typography from "@material-ui/core/Typography";
import CardContent  from "@material-ui/core/CardContent";

function Projects(){

    return(
        <React.Fragment>
            <Grid container spacing={3}>
            
                <Grid item xs={12}>
                <Card>
                    <CardHeader title="AgileOnGo" subheader="Atos|Syntel">
                    </CardHeader>
                    <CardContent>
                        <Typography variant="body1">
                        <b>AgileOnGo</b> is a mobile app which interfaces with the ALM tools and shows custom metrics related to the project to the stakeholders.
                        </Typography>
                    </CardContent>
                </Card>
                </Grid>
                <Grid item xs={12}>
                <Card>
                    <CardHeader title="Find It!" subheader="B.E. Final Year Project">
                    </CardHeader>
                    <CardContent>
                        <Typography variant="body1">
                            <b>Find It</b> is an offline app which uses SMS and Speech features of the phone so that the user can find his misplaced device.
                        </Typography>
                    </CardContent>
                </Card>
                </Grid>
            </Grid>
        </React.Fragment>

    );
}
export default Projects;
