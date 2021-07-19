import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import EachCake from './EachCake';
import CakeHeader from './CakeHeader';
import {Container, Row, Col, Button} from 'react-bootstrap';
import Subscribe from './Subscribe';

class Cake extends Component {
    constructor(props){
        super(props);
        this.state = {
            cake_object : null,
            current_url : null,
            page : 'cake',
        }
    }

    componentDidMount() {
        this._callApiEachCake();
    }

    // 아래 _getCake()를 통해 state에 넣어진 cake을 <EachCake /> 컴포넌트로 display
   _renderEachCake = () => {
        return (
            <EachCake 
            image={this.state.cake_object.image}
            book_id={this.state.cake_object.source}
            source={this.state.cake_object.source_title}
            url={this.state.cake_object.source_url}
            body={this.state.cake_object.body}
            footnote={this.state.cake_object.footnote}
            tmi={this.state.cake_object.tmi}
            category={this.state.cake_object.category}
            />
        );
  }; 

    // 아래 _callApiEachCake()로 API를 가져오고, _getEachCake()로 이걸 state에 넣음(?)
    /* 
    _getEachCake = async () => {
         const cake = await this._callApiEachCake(); // this._callApiEachCake()가 끝나자마자(not succeed) 그 return값이 cake에 저장되고 아래 라인으로 넘어간다
         this.setState({
         cake_object : cake
         })
     }
     */
    
    // API 가져온 뒤 setState
    _callApiEachCake = () => {
        return fetch(`https://bookcake.herokuapp.com/api/cake/${this.props.match.params.id}`)
        .then((response) => response.json())
    // 만약 이 json 오브젝트 내에 또 다른 오브젝트가 있어서 거기에 access 하려면 json.data.cake 이런 식으로 명시해줘야 함.
    // 하지만 이 경우에는 그렇지 않기 때문에 json만 써주면 되고, 그럼 굳이 아래처럼 .then을 쓸 필요가 없는듯..
        .then(data => {
            this.setState({cake_object : data})
        })
        .catch((err) => console.log(err))
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col><CakeHeader /></Col>
                    </Row>
                    
                    <Row className="justify-content-center">
                        <Col lg={10} xs={12} className="text-center">{this.state.cake_object ? this._renderEachCake() : "구워오는 중... 🍰"}</Col>
                    </Row>

                    <Row className="justify-content-center">
                        <Col lg={12} className="text-center">
                            <div className="text-small">겨우 한 조각으로는 부족하잖아요</div>
                        </Col>
                        <br/>
                        <Col lg={12} className="text-center">
                            <Button className="btn-cta" onClick={() => this.props.history.push(`/cakes`)}>다른 조각들 음미하기</Button>
                        </Col>
                    </Row>
                    <Row className="justify-content-center"><br/>
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

export default Cake
