import React, { lazy, Suspense } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import { compose } from 'recompact';

import Loader from './shared/loader';
// import NotFound from './shared/not-found';

// note: Keep the components in ascending for standard
const Home = lazy(() => import('./home'));
const About = lazy(() => import('./about'));
const VisionMission = lazy(() => import('./about/vision-mission'));
const mdspeech = lazy(() => import('./about/md-speech'));

const Routes = () => (
  <Suspense fallback={<Loader />}>
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/about-bwaap" component={About} />
      <Route exact path="/vision-mission" component={VisionMission} />
      <Route exact path="/md-speech" component={mdspeech} />
      {/* <Route component={NotFound} /> */}
    </Switch>
  </Suspense>
);
export default compose(withRouter)(Routes);
