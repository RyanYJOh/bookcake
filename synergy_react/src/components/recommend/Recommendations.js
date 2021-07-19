import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import { BrowserRouter as Router} from 'react-router-dom';
import RcmndHeader from './RcmndHeader';
import RcmndList from './RcmndList';

import './rcmnd.css';

class Recommendations extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }

    componentDidMount() {
        this._getRcmndList();
    }

    _renderRcmndList = () => {
        const rcmnds = this.state.rcmnd_object.map((this_rcmnd, index) => {
            return <RcmndList
            cover = {this_rcmnd.cover}
            rcmnd_whom = {this_rcmnd.rcmnd_whom}
            rcmnd_title = {this_rcmnd.rcmnd_title}
            rcmnd_intro = {this_rcmnd.rcmnd_introduction}
            rcmnd_thickness = {this_rcmnd.rcmnd_thickness}
            key = {index}
            
            title = {this_rcmnd.title}
            author = {this_rcmnd.author}
            history = {this.props.history}
            />
        })
        return rcmnds
    }

    _getRcmndList = async () => {
        const rcmnd = await this._callApiRcmndList();
        this.setState({
            rcmnd_object : rcmnd
        })
    }

    _callApiRcmndList = () => {
        return fetch("https://bookcake.herokuapp.com/api/you-may-like-these/")
        .then((response) => response.json())
        .catch((err) => console.log(err))
    }

    render() {

        return (
            <div className="ContentWrapper">
                <Container>
                    <Router>
                        <Row className="justify-content-center">
                            <Col><RcmndHeader/></Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col lg={10} className="text-center bold">
                                {this.state.rcmnd_object ? this._renderRcmndList() : "통째로 가져오는 중... 🍰"}
                            </Col>
                        </Row>
                    </Router>
                </Container>
            </div>
        )
    }
}

export default Recommendations
