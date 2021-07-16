import React, { Component } from 'react'
import {Container, Row, Col, Card, Accordion, Button, Modal} from 'react-bootstrap';
import EachRcmnd from './EachRcmnd';
import RcmndHeader from './RcmndHeader';

import './rcmnd.css';

class Rcmnd extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        this._callApiEachRcmnd();
    }

    _renderEachRcmnd = () => {
        return (
            <EachRcmnd
            author = {this.state.rcmnd_object.author}
            publisher = {this.state.rcmnd_object.publisher}
            url = {this.state.rcmnd_object.url}
            title = {this.state.rcmnd_object.title}

            rcmnd_title = {this.state.rcmnd_object.rcmnd_title}
            cover = {this.state.rcmnd_object.cover}
            intro = {this.state.rcmnd_object.rcmnd_introduction}
            whom = {this.state.rcmnd_object.rcmnd_whom}
            thickness = {this.state.rcmnd_object.thickness}
            body = {this.state.rcmnd_object.rcmnd_body}
            url = {this.state.rcmnd_object.source_url}
            />
        )
    }

    _callApiEachRcmnd = () => {
        return fetch(`https://bookcake.shop/api/you-may-like/${this.props.match.params.title}`)
        // return fetch(`http://127.0.0.1:8000/api/you-may-like/${this.props.match.params.title}`)
        .then((response) => response.json())
        .then(data => {
            this.setState({rcmnd_object : data})
        })
        .catch((err) => console.log(err))
    }
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col><RcmndHeader /></Col>
                    </Row>
                    <br/>
                    <Row className="justify-content-center">
                        <Col lg={10} xs={12} className="text-center">{this.state.rcmnd_object ? this._renderEachRcmnd() : "통째로 가져오는 중... 🍰"}</Col>
                    </Row>
                </Container>
                
            </div>
        )
    }
}

export default Rcmnd
