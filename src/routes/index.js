import React from "react";
import {Route, Switch} from "react-router-dom";

import asyncComponent from "util/asyncComponent";

const App = ({match}) => (
  <div className="gx-main-content-wrapper">
    <Switch>
      <Route path={`${match.url}sample`} component={asyncComponent(() => import('./SamplePage'))}/>
      <Route path={`${match.url}drag`} component={asyncComponent(() => import('./drag'))}/>
      <Route path={`${match.url}pagecreation`} component={asyncComponent(() => import('./pagecreation'))}/>      
      <Route path={`${match.url}role`} component={asyncComponent(() => import('./role'))}/>
      <Route path={`${match.url}creation`} component={asyncComponent(() => import('./usercreation'))}/>      
      <Route path={`${match.url}member`} component={asyncComponent(() => import('./member'))}/>      
      <Route path={`${match.url}rolepermission`} component={asyncComponent(() => import('./rolepermission'))}/>      
      <Route path={`${match.url}footer`} component={asyncComponent(() => import('./footer'))}/>      
    </Switch>
  </div>
);

export default App;
