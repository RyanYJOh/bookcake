import React, { Component } from 'react'
import logo_home from '../../images/logo_home.png';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Cakes from '../cakes/Cakes';
import HomeHeader from '../home/HomeHeader';
import ReactGA from 'react-ga';
import {Container, Row, Col, Button, Form, Navbar, InputGroup, FormControl} from 'react-bootstrap';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page : 'home'
        }
    }

    render() {
        return (
            <div>
                <Router>
                    <div className="ContentWrapper">
                        <Container fluid>
                            <Row className="justify-content-center">
                                <Col lg={8} xs={10}>
                                    <Row>
                                        {/* MOBILE */}
                                        <Col id="mobile" xs={12} className="my-auto text-center col-home">
                                            <img src={logo_home} alt="이미지가 어딨지" id="logo_home_mobile" />
                                            <br/><br/>
                                        </Col>
                                        <Col id="mobile" lg={6} xs={12} className="my-auto text-left">
                                            <Row className="justify-content-left text-superlarge bolder">
                                                통째로는 버겁습니다. <br/> 한 조각씩은 쉽죠.
                                            </Row>
                                            <br/>
                                            <Row className="justify-content-left text-medium textbunch">
                                                책을 읽다 보면, 잠시 생각에 잠기게 하는 부분들이 있습니다. <br/>한 조각씩 구워드립니다.<span className="bolder"> 문득 새로운 생각이 땡길 때</span>, 한 번씩 찾아주세요.
                                            </Row>
                                            <br/><br/>
                                            <Row className="justify-content-center">
                                                <Button variant="" className="btn-cta text-medium" onClick={() => this.props.history.push('/cakes')}>음미하러 가기</Button>
                                            </Row>
                                        </Col>
                                        
                                        {/* PC */}
                                        <Col id="pc" lg={6} xs={12} className="my-auto text-left">
                                            <Row className="justify-content-left text-superlarge bolder">
                                                <Col>통째로는 버겁습니다. <br/> 한 조각씩은 쉽죠.</Col>
                                            </Row>
                                            <br/>
                                            <Row className="justify-content-left text-medium textbunch">
                                                <Col>책을 읽다 보면, 잠시 생각에 잠기게 하는 부분들이 있습니다. <br/>한 조각씩 구워드립니다.<span className="bolder"> <br/>문득 새로운 생각이 땡길 때,</span> 한 번씩 찾아주세요.</Col>
                                            </Row>
                                            <br/><br/>
                                            <Row className="justify-content-center">
                                                <Button variant="" className="btn-cta text-medium" onClick={() => this.props.history.push('/cakes')}>음미하러 가기</Button>
                                            </Row>
                                        </Col>
                                        <Col id="pc" lg={6} className="my-auto text-center col-home">
                                            <img src={logo_home} alt="이미지가 어딨지" id="logo_home_pc" />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <br/><br id="pc"/><br id="pc"/><br id="pc"/><br id="pc"/>

                        </Container>
                    </div>
                </Router>
            </div>
        )
    }
}

export default Home
