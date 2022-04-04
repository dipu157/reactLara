import React, { Component , Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import playLogo from '../../images/play.svg'
import LoadingDiv from './loadingDiv';
import WentWrong from './wentWrong';
import Axios from 'axios'


export default class CoursePlanHome extends Component {

    constructor() {
        super();
        this.state = {
            Datalist: [],
            isLoading: true,
            isError: false,
        }
    }

    componentDidMount() {
        Axios.get('/getCoursePlan').then((response) => {
            if (response.status == 200) {
                this.setState({ Datalist: response.data, isLoading: false, isError: false })
            } else {
                this.setState({ isLoading: false, isError: true })
            }
        }).catch((error) => {
            this.setState({ isLoading: false, isError: true })
        })
    }


  render() {

    if (this.state.isLoading == true) {

        return (
            <LoadingDiv />
        )
    } else if (this.state.isError == true) {
        return (
            <WentWrong />
        )
    } else{

        const myList = this.state.Datalist;

        return (
            <Fragment>
            <Container fluid={true} className='jumbotron bg-light section-marginbg jumbutron-fluid'>
                <Row className='row text-center justify-content-md-center'>
                    <Col className='col-md-8'>
                    <NavLink className="nav-font" to="/courseplan"> <img className='play-logo' src={playLogo}/> </NavLink>
                        <h5 className='title-text mt-2'>{myList[0]['title']}</h5>
                        <p className='des-text'>{myList[0]['short_des']}</p>
                    </Col>
                </Row>
            </Container>
        </Fragment>
        )
    }

    
  }
}
