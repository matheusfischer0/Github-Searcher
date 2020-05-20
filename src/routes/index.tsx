import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
    <Switch>
        <Route exact path="/" component={Dashboard}>
            <Redirect to="/dashboard"></Redirect>
        </Route>
        <Route exact path="/dashboard" component={Dashboard}></Route>
        <Route
            exact
            path="/repository/:repository+"
            component={Repository}
        ></Route>
    </Switch>
);

export default Routes;
