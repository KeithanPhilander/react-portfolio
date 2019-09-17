import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Main from './Main';

const useStyles = makeStyles(theme => ({
    link: {
      margin: theme.spacing(1),
    },
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
  }));


const Navigation = () => {

    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar className={classes.nav} position="relative">
                <Toolbar>

                <Grid
                    justify="space-between"
                    container 
                    spacing={24}
                >
                    <Grid item>          
                    <Typography type="title" variant="h6" color="inherit" noWrap>
                        Keithan Philander
                    </Typography>
                    </Grid>

                    <Grid item>
                    <div>
                        
                            <Link style={{ textDecoration: "none" }} to="/home">
                                <Button style={{ color: "white" }} raised>Home</Button>
                            </Link>
                                
                            <Link style={{ textDecoration: "none" }} to="/products">
                                <Button style={{ color: "white" }} raised>Products</Button>
                            </Link>
                            <Link style={{ textDecoration: "none" }} to="/blog">
                                <Button style={{ color: "white" }} raised>Blog</Button>
                            </Link>
                            <Link style={{ textDecoration: "none" }} to="/contact">
                                <Button style={{ color: "white" }} raised>Contact</Button>
                            </Link>
                    </div>
                    </Grid>
                </Grid>
                </Toolbar>
            </AppBar>
            <div>
                <Main/>
            </div>
        </React.Fragment>
    );
}

export default Navigation;
