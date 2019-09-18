import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    avatar: {
      margin: 30,
      width: 300,
      height: 300,
    },
});

const Portrait = () => {
    const classes = useStyles();
    return (
    <Grid container justify="center" alignItems="center">
        <Avatar alt="Person" src="https://www.pngarts.com/files/3/Avatar-Transparent-Image.png" className={classes.avatar} />
    </Grid>
    )
}

export default Portrait
