import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import {Container, Row, Col, Navbar} from 'react-bootstrap';
import Truncate from 'react-truncate-html';
import './cakes.css';

class CakeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page : 'home',
        }
    }
    componentDidMount() {
        
    }

    render() {
        /* 카테고리별 보여주기 */
        var selected = this.props.selected_cat;
        var cats = this.props.category

        var eachCat = '#'+cats[0]+" "
        var step;
        for (step = 1; step < cats.length; step++) {
            eachCat = eachCat + '#'+cats[step]+" "
        }
        
        var isSelected;
        if (cats.includes(selected)) {
            isSelected = true;
        } else if (selected == '모두 보기') {
            isSelected = true;
        } else { isSelected = false}

        /* visited 처리 */
        // onClick()과 함께 사용. 로컬 스토리지에 'visited'의 유무 확인
        var array_visited = [];
        if (localStorage.getItem('visited')) {
            array_visited = localStorage.getItem('visited')
        } else {
            localStorage.setItem('visited', JSON.stringify(array_visited)) // 최초 진입시 localStorage 세팅
        }

        // 해당 cake의 className 설정하기 (isVisited)
        var check_visited = this.props.id;
        var isVisited;
        var visited = JSON.parse(localStorage.getItem('visited'))
        if (visited.includes(check_visited)){
            isVisited = true;
        } else {
            isVisited = false;
        }
        // console.log('히스토리', this.props.history)
        return (
            <div className={isSelected ? 'ContentsWrapper' : 'hidden'}>
                <Container className="each-cakelist">
                    <Row className="justify-content-center">
                        <Col className={isVisited ? 'visited-cake' : ''} id={this.props.id}>
                            <Row>
                                <Col className="bottom-border"></Col>
                            </Row>
                            <Row className="justify-content-right">
                                <Col className="text-center text-small normal">{eachCat}</Col>
                            </Row>
                            <Row>
                                <Col className="text-center">
                                <div 
                                onClick={() => {
                                    this.props.history.push(`/cake/${this.props.id}`);

                                    var add_visited = JSON.parse(array_visited) 
                                    add_visited.push(this.props.id)
                                    localStorage.setItem('visited', JSON.stringify(add_visited))
                                }}
                                className="text-large bolder link key-line"
                                // id="key-line"
                                dangerouslySetInnerHTML={{__html:`"` + this.props.key_line + `"`}}
                                >
                                </div>
                                </Col>
                            </Row>
                            <br id="pc" />
                            <Row>
                                <Col className="text-left text-medium normal textbunch key-content">
                                    <Truncate 
                                        onClick={() => {
                                            this.props.history.push(`/cake/${this.props.id}`);
                                            localStorage.setItem('visited', this.props.id)
                                        }}
                                        lines = {3}
                                        element = "div"
                                        truncateText = "..."
                                        dangerouslySetInnerHTML = {{__html:this.props.body + '...'}}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col className="text-right normal">
                                    <div className="text-small">{this.props.created_at}</div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <br id="pc"/>
                </Container>
            </div>
        )
    }
}

export default CakeList
