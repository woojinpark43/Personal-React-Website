import React from "react";
import { HeaderBar } from '../components/index';
import { Grid } from "../elements";

const MainPage = (props) => {
    return(
        <React.Fragment>
            <Grid bg='yellow' height='100vh'>
                <Grid height='10vh' bg='red'>
                    <HeaderBar/>
                </Grid>
                <Grid height='90vh' bg='green'>H T</Grid>
                <Grid height='30vh' bg='purple'>Foo</Grid>
            </Grid>
        </React.Fragment>
    );
}

export default MainPage;