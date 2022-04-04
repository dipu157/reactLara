import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import loadingImg from '../../images/loading.svg'

export default class LoadingDiv extends Component {
  render() {
    return (
      <Fragment>
          <Container>
              <Row>
                  <Col>
                  <img className='loading-logo' src={loadingImg}/>
                  </Col>
              </Row>
          </Container>
      </Fragment>
    )
  }
}
