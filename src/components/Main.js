import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import Portfolio from './Portfolio';
import Blog from './Blog';
import Contact from './Contact';

const Main = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/blog" component={Blog} />
                <Route exact path="/contact" component={Contact} />
            </Switch>
        </div>
    );
}

export default Main;
