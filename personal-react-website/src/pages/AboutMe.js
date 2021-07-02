import React from "react";
import { Grid, Image, Text } from '../elements'
import { HeaderBar } from "../components";
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5),
      },
    },
  }));


const AboutMe = (props) => {

    const classes = useStyles();

    return(
        <React.Fragment>
            <Grid height='100vh'>
                <Grid height='50px' bg='#99ccff' position='relative'>
                    <HeaderBar/>
                </Grid>
                <Grid width='80vw' transform='translate(12.5%, 0%)' marginTop='20px'>
                    <div className={classes.root}>
                        <Chip
                            label="optimistic"
                            color="secondary"
                        />
                        <Chip
                            label="self-motivated"
                            color="secondary"
                        />
                        <Chip
                            label="friendly"
                            color="primary"
                        />
                        <Chip
                            label="think positively"
                            color="secondary"
                        />
                        <Chip
                            label="kind to everyone"
                            color="secondary"
                        />
                        <Chip
                            label="polite to others"
                            color="primary"
                        />
                        <Chip
                            label="easy going!"
                            color="primary"
                        />
                        <Chip
                            label="think of others"
                            color="secondary"
                        />
                        <Chip
                            label="make the best out of every situation"
                            color="secondary"
                        />
                        <Chip
                            label="great listener"
                            color="secondary"
                        />
                        <Chip
                            label="trustworthy and supportive"
                            color="primary"
                        />
                    </div>

                    <Grid width='100%' height='200px' flex='1' marginTop='20px'>
                        <Image shape='rectangle'></Image>
                        <Text>
                            Hello. I'm Woojin, a computer science student studying at the university of Toronto. 
                            Welcome to my website!. You can see the projects I made and I hope you enjoy them. 
                            I'm optimistic and I am constantly looking for better ways to accomplish my goal 
                            of becoming a good programmer!
                        </Text>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default AboutMe;
