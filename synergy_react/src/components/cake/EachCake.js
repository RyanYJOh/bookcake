import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import {Container, Row, Col, Card, Accordion, Button, Modal} from 'react-bootstrap';
import './cake.css'
import {CopyToClipboard} from 'react-copy-to-clipboard';

class EachCake extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shareModal : false,
            bookModal : false
        };
    }

    componentDidMount() {
        this._getBooks();
    }

    // Book Api START //
    // 아래 _callApiBooks()로 API를 가져오고, 이걸 state에 넣음
    _getBooks = async () => {
        const book = await this._callApiBooks();
        this.setState({
        book_object : book
        })
    }
    
    // Books API 가져오기
    _callApiBooks = () => {
        const this_book_id = this.props.book_id
        return fetch(`https://bookcake.herokuapp.com/api/book/${this_book_id}`)
        .then((response) => response.json())
        .catch((err) => console.log(err))
    }
    // Book Api END //

    _openShareModal = () => this.setState({shareModal: true})
    _closeShareModal = () => this.setState({shareModal: false})

    _openBookModal = () => this.setState({bookModal: true})
    _closeBookModal = () => this.setState({bookModal: false})

    _copyLink = () => {
        var thisUrl = window.location.href
    }
    render() {
        // console.log(this.state.book_object)
        return (
            <div>
                <Router>
                    <Container className="fade-in">
                        <Row className="">
                            <Col xs={12} className="text-center"><img id="img-eachcake" src={this.props.image} /></Col>
                        </Row>
                        <Row>
                            <Col className="text-right text-small">
                                <div className="textlink-w-line" target="_blank" rel="noopener noreferrer" onClick={this._openBookModal}>📖 {this.props.source}</div>
                            </Col>
                        </Row>
                        <br id="mobile"/>
                        <Row>
                            <Col><p className="text-left text-medium textbunch" dangerouslySetInnerHTML={{__html:this.props.body}}></p></Col>
                        </Row>
                        <br id="pc"/>
                        <Row>
                            <Col><p className="text-left text-small bottom-border" dangerouslySetInnerHTML={{__html:this.props.footnote}}></p></Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col>
                                <Card className="text-left color-sub">
                                    <Card.Header className="text-center" id="tmi-header">
                                        <Row className="my-auto">
                                            <Col lg={12} xs={12} className="my-auto text-center text-medium" id="tmi-header-text">
                                            <span className="bold">✍</span>
                                            </Col>
                                        </Row>
                                        
                                    </Card.Header>
                                    <Card.Body className="textbunch text-medium" id="tmi-body" dangerouslySetInnerHTML={{__html:this.props.tmi}}></Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        {/* <Row className="text-left text-medium">
                            <Col>
                                <Row>
                                    <Col className="bold" id="tmi-header-text">✍ [Too Much Information]</Col>
                                </Row>
                                <br/>
                                <Row className="color-sub">
                                    <Col className="textbunch" dangerouslySetInnerHTML={{__html:this.props.tmi}}></Col>
                                </Row>
                            </Col>
                        </Row> */}
                        <br/>

                        <Modal size="md" show={this.state.bookModal} onHide={this._closeBookModal} centered>
                            <Modal.Body className="justify-content-center">
                                <Container>
                                    <br/>
                                    <Row>
                                        <Col lg={6} xs={6} className="text-center">
                                            <img id="img-cover" src={this.state.book_object ? this.state.book_object.cover : null} />
                                        </Col>
                                        <Col lg={6} xs={6} className="vertical-align-middle">
                                            <Row>
                                                <Col className="text-large bolder">{this.state.book_object ? this.state.book_object.title : null}</Col>
                                            </Row>
                                            <Row>
                                                <Col className="text-small normal">by {this.state.book_object ? this.state.book_object.author : null}</Col>
                                            </Row>
                                            <Row>
                                                <Col className="text-small normal">from {this.state.book_object ? this.state.book_object.publisher : null}</Col>
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
                                            <a href={this.state.book_object ? this.state.book_object.url : null} target="_blank" rel="noopener noreferrer" onClick={this._closeBookModal}><Button className="btn-cta">책 흠뻑 느끼러 가기</Button></a>
                                        </Col>
                                    </Row>
                                    <div className="text-center text-small">이 링크를 통해 구매하면,<br/> 제게 소정의(정말 소정의..) 수익이 돌아온대요! 😉</div>
                                    <div className="text-center text-small text-black" id="coupang-partners">"파트너스 활동을 통해 일정액의 수수료를 제공받을 수 있음"</div>
                                </Container>
                            </Modal.Body>
                        </Modal>
                    </Container>
                </Router>
            </div>
        )
    }
}

export default EachCake