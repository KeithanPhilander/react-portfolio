import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Main from './Main';


const Navigation = () => {

    return (
        <React.Fragment>
            <AppBar className="main-nav" position="relative">
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
