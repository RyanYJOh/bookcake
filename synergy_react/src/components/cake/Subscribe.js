import React, { Component } from 'react'
import {Container, Row, Col, Form, InputGroup, FormControl, Button, Modal} from 'react-bootstrap';

class Subscribe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            subscribedModal : false
        }
    }

    _openModal = () => {
        // gtag(‘event’, ‘버튼클릭’ {‘event_category’ : ‘모바일전화연결’, ‘event_label’ : ‘오피스’})
        this.setState({subscribedModal: true})
    }
    _closeModal = () => this.setState({subscribedModal: false})

    render() {
        return (
            <div>
                <Container>
                    <br/>
                    <Row className="justify-content-center">
                        <Col lg={5} className="text-center">
                            <Row>
                                <Col>
                                    <div className="text-medium text-black">매주 떠먹여 줄 사람이 필요한가요? <br id="mobile"/>제가 하죠 뭐 🥄</div>
                                </Col>    
                            </Row>
                            <Row className="justify-content-center">
                                <Col lg={8} xs={10} >
                                    <form action="https://stibee.com/api/v1.0/lists/9itYVXH3Nm4N-Ec-vhovThxj9qMh1w==/public/subscribers" method="POST" target="_blank" accept-charset="utf-8"  name="stb_subscribe_form" id="stb_subscribe_form" novalidate="">
                                        <Form.Group className="text-center">
                                                    <FormControl type="text" placeholder="이름" className="" id="stb_name" name="name"/>
                                                    <FormControl type="email" placeholder="가장 아끼는 이메일 주소" className="" id="stb_email" name="email"/>
                                                    <div className="text-small text-black">❗ Gmail이 <span className="bold">아닌</span> 이메일 주소를 강력히 권장드립니다.</div>
                                                    <br/>
                                                    <InputGroup.Append className="justify-content-center">
                                                        <Button type="submit" className="btn-sub-cta" id="stb_form_submit_button" onClick={this._openModal}>무료로 구독 📮</Button>
                                                    </InputGroup.Append>
                                                <div className="stb_form_msg_error" id="stb_email_error"></div>
                                        </Form.Group>
                                        <div className="stb_form_result" id="stb_form_result"></div>
                                    </form>
                                    
                                </Col>  
                            </Row>
                        </Col>
                    </Row>
                
                    <Modal size="md" class="modal" show={this.state.subscribedModal} onHide={this._closeModal} centered>
                            <Modal.Body className="justify-content-center">
                                <div className="text-center text-large bolder">
                                    메일함까지 확인했다면 끝.
                                </div>
                                <div className="text-center text-small">
                                    <span className="bold">주 1회</span>만 떠먹여 드려요. 많이 먹으면 체합니다.
                                </div>
                                <br/>
                                    <div className="text-center">
                                        <Button className="btn-cta text-center" onClick={this._closeModal}>설레는 마음으로 기다리기</Button>
                                    </div>
                            </Modal.Body>
                        </Modal>
                </Container>
            </div>
        )
    }
}

export default Subscribe
