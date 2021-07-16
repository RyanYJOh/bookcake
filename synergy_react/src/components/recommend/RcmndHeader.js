import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap';

class RcmndHeader extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={10} className="text-left">
                            <span className="text-superlarge bolder">조각만으로 부족하다면</span><br/>
                            <span className="text-medium">지극히 주관적이며 제멋대로인 책 리뷰 📚</span>
                        </Col>
                    </Row>
                </Container>
                <br/>
            </div>
        )
    }
}

export default RcmndHeader
