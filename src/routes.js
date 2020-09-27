import React, {lazy} from 'react';
import { Route, Switch } from 'react-router-dom';

// Lazy Components
const PersonalDetails = lazy(() => import('./components/PersonalDetails/PersonalDetails'));
const WorkDetails = lazy(() => import('./components/WorkDetails/WorkDetails'));
const Avatar = lazy(() => import('./components/Avatar/Avatar'));
const EmailVerification = lazy(() => import('./components/EmailVerification/EmailVerification'));
const Success = lazy(() => import('./components/Success/Success'));

// Application Routes
const Routes = (
    <Switch>
        <Route path="/" exact component={PersonalDetails} />
        <Route path="/work_details" exact component={WorkDetails} />
        <Route path="/avatar" exact component={Avatar} />
        <Route path="/email_verification" exact component={EmailVerification} />
        <Route path="/success" exact component={Success} />
    </Switch>
);

export default Routes;
