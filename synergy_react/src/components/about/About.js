import React, { Component } from 'react'
import {Container, Row, Col, Button, Modal} from 'react-bootstrap';
import Subscribe from '../cake/Subscribe';

class About extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={10} className="textbunch">
                            <Row>
                                <Col lg={12}>
                                    <span className="text-superlarge bolder">여긴 어디?</span><br/>
                                    <span className="text-medium">이 공간은 <span className="bolder">어떤 사람</span>이 <span className="bolder">무엇을 위해</span> 만들었냐면요,</span>
                                </Col>
                            </Row>
                            <br/><br/>
                            <Row>
                                <Col><div className="text-large bold"><a className="" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/___ubermensch____/">제가</a> 책을 워낙 좋아합니다.</div></Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p className='text-medium'>
                                        책을 읽다가 제 <span className="bolder">사고/가치관</span>을 깊숙이 찌르는 내용을 접하면 오랫동안 생각에 잠기기도 해요. 그렇게 생각이 자유롭게 발전하는 <span className="bolder">사색의 순간</span>을 즐깁니다. <br/><br/>
                                        <span className="bolder">그런데 머리가 좋질 않아요.</span><br/>
                                        한 번 읽고 책을 덮으면 내용을 금세 까먹더라구요. 그래서 저에게 울림을 주는 부분들을 일일이 <span className="bolder">필사</span>해놓습니다. 시간은 걸리지만 어쩌겠어요. 그렇게 필사해놓은 것들만 나중에 따로 읽어보면 <span className="bolder">그때 그 울림</span>을 충분히 다시 느낄 수 있습니다. <br/><br/>
                                        주변 사람들에게 좋은 책을 <span className="bolder">소개</span>하는 건 더 좋아합니다. 내용이 이렇게나 좋은데 저만 보기 아깝잖아요. 그래서 친구들과 책 이야기하는 걸 좋아합니다. 아마 그래서 친구가 없나 봅니다. <br/>
                                        <br/>
                                        그래서 책의 내용 중, 저를 멈춰 서게 한 부분들을 발췌해 따로 공유하기로 했습니다. 이왕 공유하는 거 더 많은 사람들에게 보여주고 싶어 <span className="bolder">뉴스레터</span>와 <span className="bolder">웹사이트</span>라는 채널을 사용하기로 했어요.
                                    </p>
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col><div className="text-large bold text-center italic">"책이란 우리 내부의 얼어붙은 바다를 <br id="mobile"/>깨기 위한 도끼가 되어야만 한다."</div></Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p className='text-medium'>
                                        <span className="bolder">프란츠 카프카</span>라는 작가가 어느 편지에서 쓴 말인데요, 이 말을 늘 가슴에 새기고 삽니다. 그만큼 독서를 매우 중요한 <span className="bolder">배움의 행위</span>로 여겨요. 책을 통해 제가 생각하지 못한 걸 <span className="bolder">생각하고</span>, 느끼지 못한 걸 <span className="bolder">느끼고</span>, 사고와 가치관에 <span className="bolder">근본적인 자극</span>을 받으려 노력합니다. 물론 <span className="bolder">지식 습득</span>도 빼먹을 수 없죠.<br/><br/>
                                        이렇게 말하면 무척이나 지적이고 깨어있는 사람처럼 들리지만, 사실 이게 다 저의 <span className="bolder">부족함</span>을 숨기기 위한 이미지메이킹 전략입니다. 부디 먹혔으면 좋겠네요.
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p className='text-medium'>
                                    <span className="bolder">업로드하는, 아니 굽는 주기와 분량은 순전히 제 마음입니다.</span> <br/>
                                        하루에 서너 개를 올릴 수도 있고, 일주일에 하나를 올릴 수도 있어요. 제 마음입니다. 건방지죠? 하지만 사실 이건 <span className="bolder">과거 경험</span>에 근거해 내린 결정입니다. <br id="mobile"/>
                                        옛날에도 <span className="bolder">책 관련 뉴스레터</span>를 작게 운영했었는데, 그때는 주기와 분량을 엄격하게 정해놨었어요. 그런데 마감에 쫓기다 보니, <span className="bolder">재미</span>로 시작한 취미가 점점 <span className="bolder">부담</span>이 될 뿐 아니라 퀄리티 또한 낮아지더라구요. 그래서 이번에는 보다 유연하게 할 겁니다.<br/><br id="mobile"/>
                                        반대로 말하면 앞으로는 제 마음대로 운영하는 대신, <span className="bolder">꽤나 좋은 퀄리티</span>를 유지할 수 있을 거라는 뜻입니다. <span className="bolder">초심 그대로 가겠습니다.</span><br/><br/>
                                        다만, 단 한 조각이라도 매주 <span className="bolder">뉴스레터</span>로 보내드리는 건 잊지 않을 테니 여러분도 <span className="bolder">구독</span>하고 주변에 <span className="bolder">추천</span>하는 거 잊지 말아 주세요. 이상 자연스러운 광고였습니다.
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col><div className="text-large bold">좋은 책, 좋은 내용, 좋은 생각 <br id="mobile"/> 많이 공유드릴게요. 😉</div></Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col className="text-center">
                                    <Button className="btn-cta" onClick={() => this.props.history.push(`/`)}>첫 페이지로</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row className="justify-content-center">
                        <Col lg={10} className="bottom-border"></Col>
                    </Row>
                    <Row>
                        <Col className=""><Subscribe /></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default About
