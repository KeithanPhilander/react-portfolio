import React from 'react';
import './Portrait'
import Portrait from './Portrait';
import Social from './Social';
import Container from '@material-ui/core/Container';
import Features from './Features';

import { withStyles } from '@material-ui/core/styles';

const Landing = withStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    color: 'white',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    margin: 0,
    maxWidth: '100%',
    padding: '2.5rem'
  },
  label: {
    textTransform: 'capitalize',
  },
})(Container);

const Home = () => {
  return (
    <div>
      <Landing>
        <h1 style={{ fontSize: "3rem", color: 'inherit',  padding: 0}}>Keithan Philander</h1>
        <p style={{ color: 'inherit' }}>Software Engineer / UX Designer</p>
        <Portrait/>
        <Container>
          <Social/>
        </Container>
      </Landing>
      <Features/>
    </div>

  );
}

export default Home;
