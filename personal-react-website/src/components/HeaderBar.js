import React from "react";
import { Button, ButtonGroup } from '@material-ui/core';
import { Link } from "react-router-dom";
import { Grid } from '../elements/index'

const HeaderBar = (props) => {
    return(
        <React.Fragment>
            <Grid>
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button><Link to='/'>Main Page</Link></Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
            </Grid>
        </React.Fragment>
    );
}

export default HeaderBar;