import React, { Component } from 'react'
import {Container, Row, Col, Card} from 'react-bootstrap';

class Letter extends Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }
    render() {
        return (    
            <div className='ContentsWrapper'>
                <Container className="fade-in">
                    {/* PC */}
                    <Card.Body className="card-shadow" id="pc">
                        <a target="_blank" href={this.props.url}>
                            <Row className="justify-content-center">
                                <Col lg={8} className="">
                                    <div className="text-left text-large bold">🍰 {this.props.title}</div>
                                </Col>
                                <Col lg={4} className="my-auto">
                                    <div className="text-small text-right">{this.props.created_at}</div>
                                </Col>
                            </Row>
                        </a>
                    </Card.Body>

                    {/* Mobile */}
                    <Card.Body className="card-shadow" id="mobile">
                        <a target="_blank" href={this.props.url}>
                            <Row className="justify-content-center">
                                <Col lg={8} xs={12} className="">
                                    <div className="text-left text-medium bold">🍰 {this.props.title}<span className="text-small light"> ({this.props.created_at})</span></div>
                                </Col>
                            </Row>
                        </a>
                    </Card.Body>
                    <br />
                </Container>
            </div>
        )
    }
}

export default Letter
