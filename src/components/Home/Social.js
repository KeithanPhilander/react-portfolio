import React from 'react';
import { Facebook, Twitter, LinkedIn, Instagram } from '@material-ui/icons'
import { Grid, Paper, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '35%', 
        margin: '0 auto'
    },   
    paper: {
        textAlign: 'center'
    },
    button: {
        color: 'salmon'
    }
}))

const Social = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs> 
                    <Paper className={classes.paper}>
                        <IconButton className={classes.button} size='small'>
                            <Twitter style={{ fontSize: '4rem' }}/>
                        </IconButton>
                    </Paper>
                </Grid>
                <Grid item xs> 
                    <Paper className={classes.paper}>
                        <IconButton className={classes.button} size="small">
                            <Facebook style={{ fontSize: '4rem' }}/>
                        </IconButton>
                    </Paper>
                </Grid>
                <Grid item xs> 
                    <Paper className={classes.paper}>
                        <IconButton className={classes.button} size="small">
                            <Instagram style={{ fontSize: '4rem' }}/>
                        </IconButton>
                    </Paper>
                </Grid>
                <Grid item xs> 
                    <Paper className={classes.paper}>
                        <IconButton className={classes.button} size="small">
                            <LinkedIn style={{ fontSize: '4rem' }}/>
                        </IconButton>
                    </Paper>
                </Grid>
            </Grid>
        </div> 
    )
}

export default Social
