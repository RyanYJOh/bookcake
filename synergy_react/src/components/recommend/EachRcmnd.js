import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import {Container, Row, Col, Button, Modal} from 'react-bootstrap';

import './rcmnd.css';

class EachRcmnd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookModal : false
        }
    }

    componentDidMount() {
        this._getThickness();
        this._getBooks();
    }

    _getBooks = async () => {
        const rcmnd = await this._callApiRcmndedBook();
        this.setState({
            rcmnd_object : rcmnd
        })
    }

    _callApiRcmndedBook = () => {
        const this_book_title = this.props.title
        return fetch(`https://bookcake.shop/api/you-may-like/${this_book_title}`)
        // return fetch(`http://127.0.0.1:8000/api/you-may-like/${this_book_title}`)
        .then((response) => response.json())
        .catch((err) => console.log(err))
    }

    _getThickness = async () => {
        const thickness = await this._callApiThickness();
        this.setState({
            thickness : thickness
        })
    }

    _callApiThickness = () => {
        return fetch("https://bookcake.shop/api/thickness/")
        // return fetch("http://127.0.0.1:8000/api/thickness/")
        .then((response) => response.json())
        .catch((err) => console.log(err))
    }

    _openBookModal = () => this.setState({bookModal: true})
    _closeBookModal = () => this.setState({bookModal: false})

    render() {
        console.log('this.state.rcmnd_object', this.props.cover)
        return (
            <div>
                <Container>
                    <Row className="">
                        <Col lg={4}>
                            <img className="img-EachRcmnd" src={this.props.cover}/>
                        </Col>
                        <Col lg={8} className="text-left text-large bolder">
                            <Row>
                                <Col>
                                    <br id="mobile"/>이 책은, <span className="text-medium normal" dangerouslySetInnerHTML={{__html:this.props.intro}}></span >
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    읽어봤으면 하는 사람은, <span className="text-medium normal" dangerouslySetInnerHTML={{__html:this.props.whom}}></span >
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={5} xs={12}>
                                    책 두께는 [<span className="text-large normal">{this.props.thickness}</span>]
                                </Col>
                                <Col lg={7} className="text-right" id="pc">
                                    <Button className="btn-cta text-medium" target="_blank" rel="noopener noreferrer" onClick={this._openBookModal}>책 구매하기</Button>
                                </Col>
                                <Col xs={12} className="text-center" id="mobile">
                                    <br/>
                                    <Button className="btn-cta text-medium" target="_blank" rel="noopener noreferrer" onClick={this._openBookModal}>책 구매하기</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <br/><br id="pc"/>
                    <Row>
                        <Col className="text-large bolder text-left">
                            📝리뷰
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col className="text-left">
                            <div className="text-medium textbunch" dangerouslySetInnerHTML={{__html:this.props.body}}></div>
                        </Col>
                    </Row>
                    <Modal size="md" show={this.state.bookModal} onHide={this._closeBookModal} centered>
                        <Modal.Body className="justify-content-center">
                            <Container>
                                <br/>
                                <Row>
                                    <Col lg={6} xs={6} className="text-center">
                                        <img id="img-cover" src={this.props ? this.props.cover : null} />
                                    </Col>
                                    <Col lg={6} xs={6} className="vertical-align-middle">
                                        <Row>
                                            <Col className="text-large bolder">{this.props ? this.props.title : null}</Col>
                                        </Row>
                                        <Row>
                                            <Col className="text-small normal">by {this.props ? this.props.author : null}</Col>
                                        </Row>
                                        <Row>
                                            <Col className="text-small normal">from {this.props ? this.props.publisher : null}</Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <br/>
                                <Row>
                                    <Col className="text-center text-medium normal">
                                        <div>
                                            여기서 다루는 내용은 <span className="bolder">극히 일부분</span>입니다.<br/>
                                            마음에 들었다면 꼭 <span className="bolder">직접 읽어보길</span> 추천드려요!
                                        </div>
                                    </Col>
                                </Row>
                                <br/>
                                <Row>
                                    <Col className="text-center">
                                        <a href={this.props ? this.props.url : null} target="_blank" rel="noopener noreferrer" onClick={this._closeBookModal}><Button className="btn-cta">책 흠뻑 느끼러 가기</Button></a>
                                    </Col>
                                </Row>
                                <div className="text-center text-small">이 링크를 통해 구매하면,<br/> 제게 소정의(정말 소정의..) 수익이 돌아온대요! 😉</div>
                                <div className="text-center text-small text-black" id="coupang-partners">"파트너스 활동을 통해 일정액의 수수료를 제공받을 수 있음"</div>
                            </Container>
                        </Modal.Body>
                    </Modal>
                </Container>
            </div>
        )
    }
}

export default EachRcmnd
