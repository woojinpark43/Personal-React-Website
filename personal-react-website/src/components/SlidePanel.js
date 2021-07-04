import React, { useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
import { Text } from '../elements'

const useStyles = makeStyles((theme) => ({
  root: {
    height: 180,
  },
  wrapper: {
    width: 100 + theme.spacing(2),
  },
  paper: {
    zIndex: 1,
    position: 'relative',
    margin: theme.spacing(1),
  },
  svg: {
    width: 100,
    height: 100,
  },
}));


const SlidePanel = (props) => {
    const { textArray, textSize } = props;

    const classes = useStyles();
    const [checked, setChecked] = React.useState(true);
    const [text, setText] = React.useState('');
    const [ind, setIndex] = React.useState(0);

    useEffect(() => {
        const changeSlide = setTimeout(() => {
            setChecked((prev) => !prev);
            setIndex((prev) => prev + 1);
            if (ind + 1 === textArray.length) {
                setIndex(0);
            }
            setText(textArray[ind]);
            setChecked((prev) => !prev);
        }, 3000);
        while(true){
            return () => {clearTimeout(changeSlide);};
        }
      });

    return (
        <div style={{ width: '100%' }}>
            <Slide direction="right" in={checked} mountOnEnter unmountOnExit>
                <Paper elevation={4} className={classes.paper}>
                    <Text align='center' size={textSize}> {text} </Text>
                </Paper>
            </Slide>
        </div>
    );
}

export default SlidePanel;