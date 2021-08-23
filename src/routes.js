import React, { lazy, Suspense } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import { compose } from 'recompact';

import Loader from './shared/loader';
import NotFound from './shared/not-found';

// note: Keep the components in ascending for standard
const Home = lazy(() => import('./home'));

const Routes = () => (
  <Suspense fallback={<Loader />}>
    <Switch>
      <Route exact path="/home" component={Home} />
      {/* <Route component={NotFound} /> */}
    </Switch>
  </Suspense>
);
export default compose(withRouter)(Routes);
