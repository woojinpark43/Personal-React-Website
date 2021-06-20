import React from "react";
import { Grid } from '../elements/index'
import { HeaderBar, StyledChips } from "../components";

const AboutMe = (props) => {
    return(
        <React.Fragment>
            <Grid height='100vh'>
                <Grid height='7vh' bg='#99ccff' position='relative'>
                    <HeaderBar/>
                </Grid>
                <Grid>
                    <StyledChips></StyledChips>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default AboutMe;
