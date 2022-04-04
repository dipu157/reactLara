import Axios from 'axios'
import React, { Component, Fragment } from 'react'
import CourseFeature from '../components/courseFeature'
import CoursePlanHome from '../components/coursePlanHome'
import HomeBanner from '../components/HomeBanner'
import Menu from '../components/menu'

export default class HomePage extends Component {

  render() {
    return (
      <Fragment>
          <Menu />
          <HomeBanner/>
          <CourseFeature/>
          <CoursePlanHome/>
      </Fragment>
    )
  }
}
