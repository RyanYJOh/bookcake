import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import LetterHeader from './LetterHeader'
import Letter from './Letter'
import Subscribe from '../cake/Subscribe';

class Letters extends Component {
    constructor(props) {
        super(props);
        this.state ={

        }
    }

    componentDidMount() {
        this._callApiLetter();
    }

    _renderLetter = () => {
        const letters = this.state.letter_object.map((this_letter, index) => {
            return <Letter
            title = {this_letter.title}
            url = {this_letter.url}
            created_at = {this_letter.created_at}
            is_hot = {this_letter.is_hot}
            key = {index}
            />
        })
        return letters
    }

    _callApiLetter = () => {
        return fetch('https://bookcake.shop/api/inside-my-head/')
        // return fetch('http://127.0.0.1:8000/api/inside-my-head/')
        .then((response) => response.json())
        .then(data => {
            this.setState(
                {letter_object : data}
            )
        })
        .catch((err) => console.log(err))
    }
    
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col><LetterHeader/></Col>
                    </Row>
                    {/* <br/> */}
                    <Row className="justify-content-center">
                        <Col lg={10} xs={12} className="text-center bottom-border">{this.state.letter_object ? this._renderLetter() : "머릿속 뒤지는 중...🧠"}</Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col><Subscribe /></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Letters
