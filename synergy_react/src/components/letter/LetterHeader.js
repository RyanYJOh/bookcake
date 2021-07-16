import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap';

class LetterHeader extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={10} className="text-left">
                            <span className="text-superlarge bolder">내 머릿속 잡생각</span><br/>
                            <span className="text-medium">매주 목요일 오전에 발송되는 뉴스레터 🧠</span>
                        </Col>
                    </Row>
                </Container>
                <br/>
            </div>
        )
    }
}

export default LetterHeader
