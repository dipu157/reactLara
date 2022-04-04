import React, { Component, Fragment } from 'react';
import { Route, Switch } from "react-router-dom";
import HomePage from '../pages/HomePage';
import CoursePlan from '../pages/CoursePlan';
import Registration from '../pages/Registration';
import FreeClass from '../pages/FreeClass';

export default class AppRoute extends Component {
  render() {
    return (
      <Fragment>
          <Switch>
              <Route exact path='/' component={HomePage}/>
              <Route exact path='/courseplan' component={CoursePlan}/>
              <Route exact path='/registration' component={Registration}/>
              <Route exact path='/freeclass' component={FreeClass}/>
          </Switch>
      </Fragment>
    )
  }
}
