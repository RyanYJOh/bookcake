import React, { Component } from 'react'
import {Container, Row, Col, Card} from 'react-bootstrap';
import './rcmnd.css';

class RcmndList extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className='ContentsWrapper'>
                <Container className="">
                    <Card.Body className="card-shadow" id={this.props.key} onClick={() => {this.props.history.push(`/you-may-like/${this.props.rcmnd_title}`);}}>
                        <Row className="justify-content-center">
                            <Col className="">
                                <Row className="">
                                    <Col lg={3} xs={4} className="text-center my-auto">
                                        <img className="img-rcmndList" src={this.props.cover} />
                                    </Col>
                                    <Col lg={9} xs={8} className="text-left">
                                        <Row>
                                            <Col><div className="bolder text-large">{this.props.title}<br/><div className="text-small normal">by {this.props.author}</div></div></Col>
                                        </Row>
                                        
                                        <Row>
                                            <Col><div className="text-medium bold">[추천 대상]</div><span className="text-small normal" dangerouslySetInnerHTML={{__html:this.props.rcmnd_whom}}></span></Col>
                                        </Row>
                                        <Row id="pc">
                                            <Col>[책 소개]<span className="text-small normal" dangerouslySetInnerHTML={{__html:this.props.rcmnd_intro}}></span></Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row className="rcmndList-row" id="mobile">
                                    <Col xs={12} className="text-left"><div className="text-medium bold">[책 소개]</div> <span className="text-small normal" dangerouslySetInnerHTML={{__html:this.props.rcmnd_intro}}></span></Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card.Body>
                    
                    <br />
                    <br />
                </Container>
            </div>
        )
    }
}

export default RcmndList
