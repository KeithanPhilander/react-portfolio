import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const Features = () => {
    const classes = useStyles();
    return (
        <div>
            <h1>Features</h1>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs>
                        <Paper className={classes.paper}>
                            <h2>Modern</h2>
                            <p>Irure minim dolor excepteur cupidatat nisi. Consequat culpa exercitation cillum reprehenderit aliquip culpa Lorem cillum adipisicing voluptate.</p>
                        </Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className={classes.paper}>
                            <h2>Responsive</h2>
                            <p>Irure minim dolor excepteur cupidatat nisi. Consequat culpa exercitation cillum reprehenderit aliquip culpa Lorem cillum adipisicing voluptate.</p>
                        </Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className={classes.paper}>
                            <h2>Fast</h2>
                            <p>Irure minim dolor excepteur cupidatat nisi. Consequat culpa exercitation cillum reprehenderit aliquip culpa Lorem cillum adipisicing voluptate.</p>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Features
