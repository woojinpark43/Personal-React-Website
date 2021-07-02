import React from "react";
import { HeaderBar } from '../components/index';
import { Grid, Text } from "../elements";

const MainPage = (props) => {
    return(
        <React.Fragment>
            <Grid height='100vh'>
                <Grid height='50px' bg='#99ccff' position='relative'>
                    <HeaderBar/>
                </Grid>
                <Grid height='93vh' bg='#e6f2ff'>H T</Grid>
                <Grid height='300px' bg='black'>
                    <Text color='white' align='center'> Woojin Park</Text>
                    <Text color='white' align='center'> wj36park@gmail.com</Text>
                    <Text color='white' align='center'> wj36park@gmail.com</Text>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default MainPage;