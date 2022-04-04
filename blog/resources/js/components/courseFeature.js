import Axios from 'axios'
import React, { Component, Fragment } from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'
import LoadingDiv from './loadingDiv';
import WentWrong from './wentWrong';

export default class CourseFeature extends Component {

    constructor() {
        super();
        this.state = {
            Datalist: [],
            isLoading: true,
            isError: false,
        }
    }

    componentDidMount() {
        Axios.get('/getCourseFeatures').then((response) => {
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
        } else {

            const myList = this.state.Datalist;
            const myView = myList.map(myList => {
                return (
                    <Col lg={3} md={3} sm={12}>
                        <Card className='text-center'>
                            <Card.Img className='item-logo' src={myList.img} />
                            <Card.Body>
                                <Card.Title className='title-text mt-2'>{myList.title}</Card.Title>
                                <Card.Text className='des-text'>{myList.des}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            })

            return (
                <Fragment>
                    <Container className='section-margin'>
                        <Row>
                            {myView}
                        </Row>
                    </Container>
                </Fragment>
            )

        }


    }
}
