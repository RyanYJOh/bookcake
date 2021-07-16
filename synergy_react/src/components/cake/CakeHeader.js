import React, { Component } from 'react'
import {Container, Row, Col, Form, InputGroup, FormControl, Button} from 'react-bootstrap';

class CakeHeader extends Component {
    render() {
        return (
            <div>
               <Container>
                    <Row className="justify-content-center">
                        {/* <Col lg={10} className="text-left">
                            <span className="text-superlarge bolder">훌륭한 선택입니다!</span><br/>
                            <span className="text-medium">천천히, 깊이 음미하며 <span className="bolder">생각 한 모금</span>과 함께하면<br id="mobile"/> 금상첨화인 거 알죠? ☕</span>
                        </Col> */}
                    </Row>
               </Container>
            </div>
        )
    }
}

export default CakeHeader
