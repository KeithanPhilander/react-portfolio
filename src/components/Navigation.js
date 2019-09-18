import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Main from './Main';

import { withStyles } from '@material-ui/core/styles';

const StyledBar = withStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
})(AppBar);

const Section = withStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      color: 'white',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      margin: 0,
      width: '100%',
      padding: '1rem'
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Container);

const Navigation = () => {

    return (
        <React.Fragment>
            <StyledBar className="main-nav" position="relative">
                <Toolbar>
                    <Grid
                        justify="space-between"
                        container 
                        spacing={24}
                    >
                        <Grid item>          
                        <Typography type="title" variant="h6" color="inherit" noWrap>
                            Portfolio
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
            </StyledBar>
            <Section>
                <Main/>
            </Section>
        </React.Fragment>
    );
}

export default Navigation;
