import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default class HomeBanner extends Component {
  render() {
    return (
      <Fragment>
          <Container className='parallax' fluid>
              <Row>
                  <Col lg={12} md={12} sm={12}>
                      <p className='text-center m-0 top-title'>React JS</p>
                      <p className='text-center m-0 top-subtitle'></p>
                      <p className='text-center m-0 top-subtitle'>Recommended For Students as well as Professionals</p>

                  </Col>
              </Row>
          </Container>
      </Fragment>
    )
  }
}
